import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import { Status } from '../../../domain/commons/StatusInterface'
import { Servicios } from '../../../domain/servicios/serviciosInterface'
import serviceModel from './schemas/mongoSchemaServicios'

export const crearServicio = async (args: any) => {
  return await serviceModel
    .insertMany(args)
    .then((data: any) => {
      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<Servicios> = new ResponseEntity(
        data,
        status,
      )
      console.log("bien")

      return response
    })
    .catch((e) => {

      console.log("mal",e)
      const status: Status = new Status(ResponseCodes.ERROR, e.message)

      const response : ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const serviciosTabla = async () => {

  return await serviceModel
    .find({}).populate('Representante')
    .then((data: any) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.SUCCESS_EMPTY,
          'exitoso sin datos',
        )

        return status
      }

      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<any[]> = new ResponseEntity(data, status)

      return response
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)
      const response : ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const servicio = async (id: String) => {
  return await serviceModel
    .findById(id)
    .then((data: Servicios) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.SUCCESS_EMPTY,
          'exitoso sin datos',
        )
        const response : ResponseEntity<null> = new ResponseEntity(null, status)
        return response
      }

      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<Servicios> = new ResponseEntity(
        data,
        status,
      )

      return response
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)
      const response : ResponseEntity<null> = new ResponseEntity(null, status)
      return response
    })
}
