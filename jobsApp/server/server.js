import fs from 'fs';
import {ApolloServer, gql} from "apollo-server-express";
import bodyParser from 'body-parser';
import cors from 'cors'
import express from 'express';
import expressJwt from 'express-jwt'
import jwt from 'jsonwebtoken';
import db from './db';
import resolvers from "./resolvers";

const port = 9000;
const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

const app = express();
app.use(cors(), bodyParser.json(), expressJwt({
  secret: jwtSecret,
  algorithms: ['RS256'],
  credentialsRequired: false
}));

const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'}));
const context = ({req}) => ({
  user: req.user && db.users.get(req.user.sub)
});
const apolloServer = new ApolloServer({typeDefs, resolvers, context});
apolloServer.applyMiddleware({app, path: '/graphql'});

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  const user = db.users.list().find((user) => user.email === email);
  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({sub: user.id}, jwtSecret);
  res.send({token});
});

app.listen(port, () => console.info(`Server started on port ${port}`));