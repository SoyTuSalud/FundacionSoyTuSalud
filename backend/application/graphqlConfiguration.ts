import { ApolloServer, AuthenticationError } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { typeDefs, resolvers } from '../infrastructure/adapters/graphql/graphqlAdapter'
import User from '../infrastructure/adapters/mongo/schemas/mongoSchemaUser'
import conectarBD from '../infrastructure/adapters/mongo/configurations/mongoConfiguration'

export const execute = async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    context: async ({ req }) => {
      await conectarBD()

      return await User.findById(req.headers.authorization || '').then(
        (data) => {
          if (!data) {

            return null
            // throw new AuthenticationError('you must be logged in')
          }
          return data._id
        },
      )

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

  // await runMiddleware(req, res, cors)
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}