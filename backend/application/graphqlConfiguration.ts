import { ApolloServer, AuthenticationError } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { serialize, CookieSerializeOptions } from 'cookie'
import {
  typeDefs,
  resolvers,
} from '../infrastructure/adapters/graphql/graphqlAdapter'
import conectarBD from '../infrastructure/adapters/mongo/configurations/mongoConfiguration'
import jwt from 'jsonwebtoken'


export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (typeof options.maxAge === 'number') {
    options.expires = new Date(Date.now() + options.maxAge * 1000)
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}

export const execute = async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    context: async ({ req }) => {
      await conectarBD()

      const authorization = req.headers.authorization || ''

      if (!authorization){
        return res
      } 

      try {
        const verifyToken = jwt.verify(
          authorization,
          process.env.ENV_KEY_TOKEN!,
          {
            complete: true,
          },
        )

        return verifyToken
      } catch (error: any) {
        throw new AuthenticationError('Error de auntenticación', error)
      }
    },
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  })

  const startServer = apolloServer.start()

  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}
