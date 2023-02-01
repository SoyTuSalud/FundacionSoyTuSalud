import type { NextApiRequest, NextApiResponse } from 'next'
import { authRoutes } from '../../../../backend/auth/infranstucture/container/auth.container'
import { validateError } from '../../../../backend/common/functions/functions.common'

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    return authRoutes.initRoute(req, res)
  } catch (error: unknown) {
    const responseEntity = validateError(error)
    res.status(responseEntity.status.httpStatus).json(responseEntity)
  }
}
