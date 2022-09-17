import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import { Status } from '../../../domain/commons/StatusInterface'
import conectarBD from './configurations/mongoConfiguration'
import ServiceCodes from './schemas/MongoSchemaServiceCodes'

export const codeService = async (args: any) => {
  await conectarBD()

  return await ServiceCodes.find({
    TIPO_DE_SERVICIO: { $regex: args.TIPO_DE_SERVICIO, $options: 'i' },
    DESCRIPCION_SERVICIO: {
      $regex: args.DESCRIPCION_SERVICIO,
      $options: 'i',
    },
  }).then((data) => {

    if(data.length === 0){

      const status : Status = new Status(ResponseCodes.SUCCESS_EMPTY, "exitoso sin datos")
      const response : ResponseEntity<null> = new ResponseEntity(null, status)

      return response

    }

    const status : Status = new Status(ResponseCodes.SUCCESS, "exitoso")
    const response : ResponseEntity<any[]> = new ResponseEntity(data, status)

    return response

  }).catch((e)  =>{

    const status : Status = new Status(ResponseCodes.ERROR,  e.message)

    const response : ResponseEntity<null> = new ResponseEntity(null, status)

    return response
  })
}
