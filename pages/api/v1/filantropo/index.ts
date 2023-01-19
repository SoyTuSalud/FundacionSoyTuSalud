import type {NextApiRequest, NextApiResponse} from 'next'
import {validateError} from '../../../../../backend/common/functions/functions.common'
import {filantropoRoutes} from "../../../../../backend/filantropo/infranstucture/container/filantropo.container";

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  
  try{
    return filantropoRoutes.initRoute(req, res)
  }
  catch (error: unknown) {
    const responseEntity = validateError(error)
    res.status(responseEntity.status.httpStatus).json(responseEntity)
  }

}
