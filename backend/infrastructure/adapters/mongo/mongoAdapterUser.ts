import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import { Status } from '../../../domain/commons/StatusInterface'
import { User } from '../../../domain/user/userInterface'
import UserModel from './schemas/mongoSchemaUser'
import bcrypt from 'bcrypt'

export const login = async (args: any) => {
  return await UserModel.findOne({ correo: args.correo })
    .then((data: User) => {
      if (!data) {
        const status: Status = new Status(ResponseCodes.SUCCESS_EMPTY,'Usuario no existe')

        return status
      }
      return bcrypt.compare(args.contrasena, data.contrasena)
        .then((validationPass) => {
            if (validationPass) {
                const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')

                const response: ResponseEntity<User> = new ResponseEntity(data,status,)

                return response
            } else {
                const status: Status = new Status(ResponseCodes.ERROR, 'contraseña erronea')

                return status
            }
        })
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)

      return status
    })
}

export const registro = async (args: any) => {

const hash = await bcrypt.hash(args.contrasena, 10)

  return await UserModel
    .create({
      tipoDocumento: args.tipoDocumento,
      identificacion: args.identificacion,
      nombre: args.nombre,
      role: args.role,
      apellidos: args.apellidos,
      celular: args.celular,
      direccion: args.direccion,
      correo: args.correo,
      contrasena: hash
    })
    .then((data: any) => {
      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<User> = new ResponseEntity(
        data,
        status,
      )

      return response
    })
    .catch((e) => {
      const status: Status = new Status("PACIENTE", e.message)
      const response: ResponseEntity<null> = new ResponseEntity(null, status)
      
      return response
    })
}
