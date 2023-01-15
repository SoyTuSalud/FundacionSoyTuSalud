import type { NextApiRequest, NextApiResponse } from 'next'
import { validateError } from '../../../../backend/common/functions/functions.common'
import { pacientesRoutes } from '../../../../backend/paciente/infranstucture/container/paciente.container'

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {


  try{
    return pacientesRoutes.initRoute(req, res)
  }
  catch (error: unknown) {
    const responseEntity = validateError(error)
    res.status(responseEntity.status.httpStatus).json(responseEntity)
  }
}
