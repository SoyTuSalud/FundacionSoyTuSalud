import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: process.env.ENV_API_GRAPHQL || process.env.NEXT_PUBLIC_API_GRAPHQL,
});


const authLink = setContext((_, { headers })  => {

  const token = localStorage?.getItem('userUid');

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
