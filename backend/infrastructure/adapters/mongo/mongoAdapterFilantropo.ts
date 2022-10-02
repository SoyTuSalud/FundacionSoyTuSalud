import {ResponseCodes} from '../../../domain/commons/enums/responseCodesEnum'
import {ResponseEntity} from '../../../domain/commons/responseEntity'
import {Status} from '../../../domain/commons/StatusInterface'
import {Filantropo} from '../../../domain/filantropos/filantropoInterface'
import filantropoModel from './schemas/mongoSchemaFilantropo'

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

    return await filantropoModel.create({
        tipoDocumento: args.tipoDocumento,
        identificacion: args.identificacion,
        nombre: args.nombre,
        celular: args.celular,
        direccion: args.direccion,
        correo: args.correo,
    })
    .then((data: any) => {
      
      const status : Status = new Status(ResponseCodes.SUCCESS, "exitoso")
      const response : ResponseEntity<Filantropo> = new ResponseEntity(data, status)

      return response
      })
      .catch((e) => {

        const status : Status = new Status(ResponseCodes.ERROR,  e.message)
          return new ResponseEntity(null, status)
      })

}


