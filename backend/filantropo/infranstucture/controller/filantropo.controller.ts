import {NextApiRequest, NextApiResponse} from 'next'
import conectarBD from '../../../common/connections/mongo.config'
import {ResponseEntity} from '../../../common/models/response.value'
import {RequestEntity} from '../../../common/models/request.value'
import {validateBodyCreation, validateString,} from '../../application/utils/filantropo.utils'
import {FilantropoService} from '../../application/service/filantropo.inface.service'
import {validateError} from '../../../common/functions/functions.common'
import {Filantropo} from "../../domain/entity/filantropo.entity";


class FilantropoController {
  constructor(private filantropoService: FilantropoService) {
    conectarBD()
  }
  public getFilantropos = async (request: NextApiRequest, response: NextApiResponse) => {

      const responseEntity: ResponseEntity<Filantropo[] | null> =
        await this.filantropoService.fetchFilantropos()

    response.status(responseEntity.status.httpStatus).json(responseEntity)
  }

  public getFilantropoById = async (request: NextApiRequest, response: NextApiResponse) => {
    const { id } = request.query
    try {
      const requestEntity = new RequestEntity<string>(
        validateString(id),
        request.cookies.Cookie,
        request.headers,
      )
      const responseEntity: ResponseEntity<Filantropo> | ResponseEntity<null> =
        await this.filantropoService.fetchFilantropoById(requestEntity)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public postFilantropo = async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const requestEntity = new RequestEntity(
        validateBodyCreation(request.body),
        request.cookies.Cookie,
        request.headers,
      )

      const responseEntity: ResponseEntity<null> =
        await this.filantropoService.createFilantropo(requestEntity)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }
  //todo
/*
  public patchPacientes = async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const requestEntity = new RequestEntity(
        validateBodyUpdate(request.body),
        request.cookies.Cookie,
        request.headers,
      )
      const responseEntity: ResponseEntity<null> =
        await this.filantropoService.updatePacienteTuHistoria(requestEntity)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

 */
}

export default FilantropoController
