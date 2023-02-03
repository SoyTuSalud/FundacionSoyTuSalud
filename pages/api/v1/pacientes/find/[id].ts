import type {NextApiRequest, NextApiResponse} from 'next'

import {handler} from '@common/router/rounter.interface'

import {pacientesRoutes} from '@paciente/infranstucture/container/paciente.container'

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await pacientesRoutes.runRouterPacientes()
  await handler(req, res)
}
