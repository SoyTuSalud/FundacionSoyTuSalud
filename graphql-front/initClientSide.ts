import { ApolloClient, createHttpLink, InMemoryCache , DefaultOptions  } from '@apollo/client'


const uri =  process.env.ENV_API_GRAPHQL || process.env.NEXT_PUBLIC_API_GRAPHQL

const defaultOptions: DefaultOptions  = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}


const link = createHttpLink({
  uri,
  credentials: 'include'
});

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})
