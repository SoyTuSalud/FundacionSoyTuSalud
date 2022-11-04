import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import { Status } from '../../../domain/commons/StatusInterface'
import { User } from '../../../domain/user/userInterface'
import UserModel from './schemas/mongoSchemaUser'
import bcrypt from 'bcrypt'
import { sendEmail } from '../../helpers/emailHelper'
import { roleEnum } from '../../../domain/user/enums/roleEnum'
import { ResponseDescription } from '../../../domain/commons/enums/responseDescriptionEnum'
import { validatePass } from '../../helpers/validatePass'
import { registroData } from '../../../domain/commons/interfaces'
import { verify } from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-micro'

export const login = async (args: any, context: any) => {
  return await UserModel.findOne({ correo: args.correo })
    .then((data: any) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.ERROR_AUTH,
          ResponseDescription.ERROR_AUTH,
        )
        return new ResponseEntity(null, status)
      }
      return validatePass(args, data, context)
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)
      return new ResponseEntity(null, status)
    })
}

export const loginAdmin = async (args: any, context: any) => {
  return await UserModel.findOne({ correo: args.correo, role: roleEnum.ADMIN })
    .then((data: any) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.ERROR_AUTH,
          ResponseDescription.ERROR_AUTH,
        )
        return new ResponseEntity(null, status)
      }
      return validatePass(args, data, context)
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)

      return new ResponseEntity(null, status)
    })
}

export const registro = (args: registroData) =>
  new Promise(async (resolve, reject) => {
    const hash = await bcrypt.hash(args.constrasena, 10)
    await UserModel.create({
      correo: args.correo,
      contrasena: hash,
      role: args.rol,
    })
      .then((data: any) => {
        const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
        const response: ResponseEntity<User> = new ResponseEntity(data, status)
        resolve(response)
      })
      .catch((e) => {
        reject({
          message: e.message,
        })
      })
  })

export const deleteUser = async (correo: string) => {
  await UserModel.findOneAndDelete({ correo })
}

export const verifyRoles = (payload: any) => {
  return payload.role
}

// export const usersTablaByRol = async (args: any, payload: any) => {
//   if (payload.role === roleEnum.ADMIN) {
//     return await UserModel.find({ role: args.role })
//       .then((data) => {
//         if (data.length === 0) {
//           const status: Status = new Status(
//             ResponseCodes.SUCCESS_EMPTY,
//             ResponseDescription.ERROR_NO_DATA,
//           )
//           return new ResponseEntity(null, status)
//         }

//         const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
//         const response: ResponseEntity<any[]> = new ResponseEntity(data, status)

//         return response
//       })
//       .catch((e) => {
//         const status: Status = new Status(ResponseCodes.ERROR, e.message)
//         const response: ResponseEntity<null> = new ResponseEntity(null, status)

//         return response
//       })
//   } else {
//     const status: Status = new Status(
//       ResponseCodes.PERMISSION_ERROR,
//       'Acceso denegado',
//     )
//     return new ResponseEntity(null, status)
//   }
// }

export const verifyAccount = async (args: any) => {
  
  const  { payload } : any = await validateToken(args.token)

  console.log("entre", payload)

  return await UserModel.findOneAndUpdate(
    { correo: payload?.correo , statusAccount: 'unverified'},
    { statusAccount: 'verified' },
  )
    .then((user: any) => {
      console.log(user)
      if (!user) {
        const status: Status = new Status(
          ResponseCodes.ERROR_AUTH,
          ResponseDescription.ERROR_AUTH,
        )
        return new ResponseEntity(null, status)
      }
      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      return new ResponseEntity(null, status)
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)

      return new ResponseEntity(null, status)
    })
}

export const validateToken = async (token: string) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve( verify(token, process.env.ENV_KEY_TOKEN!, {
        complete: true,
      }))
    } catch (error: any) {
      reject({
        message: error.message,
      })
      throw new AuthenticationError('Error de auntenticación', error)
    }
  })
