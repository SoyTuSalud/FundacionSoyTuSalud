import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import { Status } from '../../../domain/commons/StatusInterface'
import { ServicesTransaction } from '../../../domain/serviceTransaction/serviceTransaction'
import serviceTransacionModel from './schemas/mongoSchemServiceTransaction'

export const crearServicio = async (args: any) => {
  return await serviceTransacionModel
    .insertMany(args)
    .then((data: any) => {
      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<ServicesTransaction> = new ResponseEntity(
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

  return await serviceTransacionModel
    .find({})
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
  return await serviceTransacionModel
    .findById(id)
    .then((data: ServicesTransaction) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.SUCCESS_EMPTY,
          'exitoso sin datos',
        )
        const response : ResponseEntity<null> = new ResponseEntity(null, status)
        return response
      }

      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<ServicesTransaction> = new ResponseEntity(
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
