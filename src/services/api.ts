import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from 'apollo-boost';

export default new ApolloClient({
  link: new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        'x-hasura-admin-secret': process.env.REACT_APP_GRAPHQL_ADMIN_SECRET,
      }
    });
    return forward(operation);
  }).concat(
    new HttpLink({
      uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql',
    })
  ),
  cache: new InMemoryCache()
});