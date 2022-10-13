import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { NextApiRequest } from 'next/types'

const uri = process.env.ENV_API_GRAPHQL || process.env.NEXT_PUBLIC_API_GRAPHQL

export const initClientSSR = (req: NextApiRequest) => {
  const link = createHttpLink({
    uri,
    credentials: 'same-origin',
    headers: {
      Cookie: `token=${req.cookies.token}`,
    },
  })

  return new ApolloClient({
    ssrMode: true,
    link: link,
    cache: new InMemoryCache(),
  })
}

export const initClientSSRNoToken = () => {
  const link = createHttpLink({
    uri,
    credentials: 'same-origin',
  })

  return new ApolloClient({
    ssrMode: true,
    link: link,
    cache: new InMemoryCache(),
  })
}
