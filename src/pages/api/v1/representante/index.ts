import type {NextApiRequest, NextApiResponse} from 'next'

import {handler} from '@common/router/rounter.interface'

import {representanteRoutes} from "@representante/infranstucture/container/representante.container";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await representanteRoutes.runRouterRepresentante()
  await handler(req, res)
}