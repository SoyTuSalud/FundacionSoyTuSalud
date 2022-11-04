import {ResponseCodes} from '../../../domain/commons/enums/responseCodesEnum'
import {ResponseEntity} from '../../../domain/commons/responseEntity'
import {Status} from '../../../domain/commons/StatusInterface'
import {Filantropo} from '../../../domain/filantropos/filantropoInterface'
import { roleEnum } from '../../../domain/user/enums/roleEnum'
import { deleteUser, registro } from './mongoAdapterUser'
import jwt from 'jsonwebtoken'
import filantropoModel from './schemas/mongoSchemaFilantropo'
import { sendEmail } from '../../helpers/emailHelper'

export const filantroposTabla = async () =>{
  
    return await filantropoModel.find({})
    .then((data) => {
      
      if(!data){
  
          const status : Status = new Status(ResponseCodes.SUCCESS_EMPTY, "exitoso sin datos")
          return new ResponseEntity(null, status)
      }
  
      const status : Status = new Status(ResponseCodes.SUCCESS, "exitoso")
      const response : ResponseEntity<any[]> = new ResponseEntity(data, status)
  
      return response
  
    }).catch(e =>{
      
      const status : Status = new Status(ResponseCodes.ERROR,  e.message)
            return new ResponseEntity(null, status)
    })
  
}

export const filantropo = async (id: String) =>{
  
    return await filantropoModel.findById(id)
    .then((data: Filantropo) => {

      if(!data){
        const status : Status = new Status(ResponseCodes.SUCCESS_EMPTY, "exitoso sin datos")
          return new ResponseEntity(null, status)

      }

      const status : Status = new Status(ResponseCodes.SUCCESS, "exitoso")
        return new ResponseEntity(data, status)

    }).catch((e)  =>{

      const status : Status = new Status(ResponseCodes.ERROR,  e.message)

      return new ResponseEntity(null, status)
    })
  
}

export const crearFilantropo = async (args: any) =>{

  return await registro({
    nombre: args.nombre,
    apellidos: args.apellidos,
    constrasena: args.contrasena,
    correo: args.correo,
    rol: roleEnum.FILANTROPO,
  })
  .then(() => {
    return filantropoModel.create({
      identificacion: args.identificacion,
      nombre: args.nombre,
      apellidos: args.apellidos,
      tipoDocumento: args.tipoDocumento,
      celular: args.celular,
      correo: args.correo
    })
      .then((data: any) => {
        const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
        const response: ResponseEntity<Filantropo> = new ResponseEntity(
          data,
          status,
        )

        let newData = data
        newData = newData.toObject()
        delete newData.contrasena

        const token = jwt.sign(newData, process.env.ENV_KEY_TOKEN!, {
          expiresIn: '5m',
        })
        // setCookie(context, 'token', token, {
        //   path: '/',
        // })

        sendEmail(data.correo, data.nombre, token)

        return response
      })
      .catch((e) => {
        deleteUser(args.correo)

        const status: Status = new Status(ResponseCodes.ERROR, e.message)
        return new ResponseEntity(null, status)
      })
  })
  .catch((e) => {
    const status: Status = new Status(ResponseCodes.ERROR, e.message)
    return new ResponseEntity(null, status)
  })
  



}


