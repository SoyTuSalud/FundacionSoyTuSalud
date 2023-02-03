import type { NextApiRequest, NextApiResponse } from 'next'

import {handler} from '@common/router/rounter.interface'

import { authRoutes } from '@auth/infranstucture/container/auth.container'

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await authRoutes.runRouterAuth()
  await handler(req, res)
}
