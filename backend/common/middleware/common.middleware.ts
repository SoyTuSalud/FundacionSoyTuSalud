import jwt from 'jsonwebtoken'
import {NextApiRequest} from 'next'

import {ResponseCodes} from '@common/enums/responseCodes.Enum'
import {roleEnum} from '@common/enums/role.enum'
import HttpError from '@common/models/httpError.value'
import {Status} from '@common/models/status.value'

export const validateRol = (req: NextApiRequest, rolRequired: roleEnum[]) => {
  const authorization = req.cookies.token || ''

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
