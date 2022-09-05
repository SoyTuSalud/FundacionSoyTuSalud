import { NextApiRequest, NextApiResponse } from 'next'
import { execute } from '../../backend/infrastructure/adapters/graphql/configuration/graphqlConfiguration'

export default async function handler(req: NextApiRequest , res: NextApiResponse) {

  await execute(req, res)
  
}

export const config = {
  api: {
    bodyParser: false,
  },
}
