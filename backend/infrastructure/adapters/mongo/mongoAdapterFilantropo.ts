import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import { Status } from '../../../domain/commons/StatusInterface'
import { Filantropo } from '../../../domain/filantropos/filantropoInterface'
import conectarBD from './configurations/mongoConfiguration'
import filantropoModel from './schemas/mongoSchemaFilantropo'

export const filantroposTabla = async () =>{

    await conectarBD()
  
    return await filantropoModel.find({})
    .then((data) => {

      if(!data){
  
          const status : Status = new Status(ResponseCodes.SUCCESS_EMPTY, "exitoso sin datos")
          const response : ResponseEntity<null> = new ResponseEntity(null, status)
  
          return response
      }
  
      const status : Status = new Status(ResponseCodes.SUCCESS, "exitoso")
      const response : ResponseEntity<any[]> = new ResponseEntity(data, status)
  
      return response
  
    }).catch(e =>{
      
      const status : Status = new Status(ResponseCodes.ERROR,  e.message)
      const response : ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
  
}

export const filantropo = async (id: String) =>{

    await conectarBD()
  
    return await filantropoModel.findById(id)
    .then((data: Filantropo) => {

      if(!data){
        const status : Status = new Status(ResponseCodes.SUCCESS_EMPTY, "exitoso sin datos")
        const response : ResponseEntity<null> = new ResponseEntity(null, status)

        return response

      }

      const status : Status = new Status(ResponseCodes.SUCCESS, "exitoso")
      const response : ResponseEntity<Filantropo> = new ResponseEntity(data, status)

      return response

    }).catch((e)  =>{

      const status : Status = new Status(ResponseCodes.ERROR,  e.message)

      const response : ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
  
}

export const crearFilantropo = async (args: any) =>{

    await conectarBD()

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
        const response : ResponseEntity<null> = new ResponseEntity(null, status)
        return response
      })

}


