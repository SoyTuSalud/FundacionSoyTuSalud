import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'


const uri =  process.env.ENV_API_GRAPHQL || process.env.NEXT_PUBLIC_API_GRAPHQL


const link = createHttpLink({
  uri,
  credentials: 'include'
});

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})
