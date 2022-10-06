import bcrypt from 'bcrypt'
import { Status } from '../../domain/commons/StatusInterface'
import { ResponseCodes } from '../../domain/commons/enums/responseCodesEnum'
import jwt from 'jsonwebtoken'
import { setCookie } from './tokenSerialize'
import { ResponseEntity } from '../../domain/commons/responseEntity'
import { ResponseDescription } from '../../domain/commons/enums/responseDescriptionEnum'

export const validatePass = async (args: any, data: any, context: any) => {
  return await bcrypt
    .compare(args.contrasena, data.contrasena)
    .then((validationPass) => {
      if (validationPass) {
        const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')

        let newData = data
        newData = newData.toObject()
        delete newData.contrasena

        const token = jwt.sign(newData, process.env.ENV_KEY_TOKEN!, {
          expiresIn: '1h',
        })
        setCookie(context, 'token', token, {
          path: '/',
        })
        return new ResponseEntity(data, status)
      } else {
        const status: Status = new Status(
          ResponseCodes.ERROR_AUTH,
          ResponseDescription.ERROR_AUTH,
        )
        return new ResponseEntity(null, status)
      }
    })
}

