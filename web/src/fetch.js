// TODO: add custom GraphQL client "library"
import graphqlFetch from "./lib/graphqlFetch";

const url = 'http://localhost:4001/graphql';

export default graphqlFetch(url);