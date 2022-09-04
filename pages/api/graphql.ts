import { NextApiRequest, NextApiResponse } from 'next'
import { execute } from '../../graphql-back/infrastructure/adapters/graphql/configuration/graphqlConfiguration'

export default async function handler(req: NextApiRequest , res: NextApiResponse) {

  execute(req, res)
  
}
