import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import { Status } from '../../../domain/commons/StatusInterface'
import { User } from '../../../domain/user/userInterface'
import UserModel from './schemas/mongoSchemaUser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmail } from '../../helpers/emailHelper'
import { roleEnum } from '../../../domain/user/enums/roleEnum'
import { setCookie } from '../../../application/graphqlConfiguration'
import { ResponseDescription } from '../../../domain/commons/enums/responseDescriptionEnum'

export const login = async (args: any, context: any) => {
  return await UserModel.findOne({ correo: args.correo })
    .then((data: any) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.ERROR_AUTH,
          ResponseDescription.ERROR_AUTH,
        )
        const response: ResponseEntity<null> = new ResponseEntity(null, status)
        return response
      }
      return bcrypt
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

            const tokenObject = {
              token,
            }
            setCookie(context, 'token', token, {
              path: '/',
            })
            const response: ResponseEntity<any> = new ResponseEntity(
              data,
              status,
            )
            return response
          } else {
            const status: Status = new Status(
              ResponseCodes.ERROR_AUTH,
              ResponseDescription.ERROR_AUTH,
            )
            const response: ResponseEntity<null> = new ResponseEntity(
              null,
              status,
            )
            return response
          }
        })
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)

      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const registro = async (args: any) => {
  const hash = await bcrypt.hash(args.contrasena, 10)

  return await UserModel.create({
    tipoDocumento: args.tipoDocumento,
    identificacion: args.identificacion,
    nombre: args.nombre,
    role: args.role,
    apellidos: args.apellidos,
    celular: args.celular,
    direccion: args.direccion,
    correo: args.correo,
    contrasena: hash,
  })
    .then((data: any) => {
      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<User> = new ResponseEntity(data, status)

      sendEmail(args.correo, `${args.nombre} ${args.apellidos}`)

      return response
    })
    .catch((e) => {
      const status: Status = new Status('PACIENTE', e.message)
      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const findUserById = () => {}

export const verifyAdmin = (payload: any) => {
  if (payload.role === roleEnum.ADMIN) {
    return 'ok'
  }
  const status: Status = new Status(
    ResponseCodes.PERMISSION_ERROR,
    'Acceso denegado',
  )
  const response: ResponseEntity<null> = new ResponseEntity(null, status)

  return 'no'
}
