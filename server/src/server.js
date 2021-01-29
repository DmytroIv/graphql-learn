import express from 'express';

const app = express();

app.use('/graphiql', (req, res) => {
  res.send('Hello')
});

app.listen(4001, () => {
  console.log('Go to http://localhost:4001/graphiql to run queries!');
});
