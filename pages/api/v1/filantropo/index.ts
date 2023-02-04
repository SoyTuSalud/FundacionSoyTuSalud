import type { NextApiRequest, NextApiResponse } from 'next'

import {handler} from '@common/router/rounter.interface'
import {filantropoRoutes} from "@filantropo/infranstucture/container/filantropo.container";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await filantropoRoutes.runFilantropoRoutes()
  await handler(req, res)
}
