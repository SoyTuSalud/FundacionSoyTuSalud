import jwt from 'jsonwebtoken'
import { NextApiRequest } from 'next'
import { ResponseCodes } from '../enums/responseCodes.Enum'
import { roleEnum } from '../enums/role.enum'
import HttpError from '../models/httpError.value'
import { Status } from '../models/status.value'
import z from 'zod'

export const validateRol = (req: NextApiRequest, rolRequired: roleEnum[]) => {
  const authorization = req.cookies.token || ''

  if (!authorization || rolRequired.includes(roleEnum.NO_AUTH)) {
    return 
  }

  try {
    const data: any = jwt.verify(authorization, process.env.ENV_KEY_TOKEN!, {
      complete: true,
    }).payload

    if(!rolRequired.includes(data.role)){
      throw new HttpError(
        new Status(
          ResponseCodes.UNAUTHORIZED.httpStatus,
          ResponseCodes.UNAUTHORIZED.code,
          ResponseCodes.UNAUTHORIZED.message,
        ),
      )
    }

  } catch (error: unknown) {
    throw new HttpError(
      new Status(
        ResponseCodes.UNAUTHORIZED.httpStatus,
        ResponseCodes.UNAUTHORIZED.code,
        ResponseCodes.UNAUTHORIZED.message,
      ),
    )
  }
}
