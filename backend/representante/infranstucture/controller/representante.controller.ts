import {NextApiRequest, NextApiResponse} from 'next'
import {ResponseEntity} from '@common/models/response.value'
import {IRepresentante} from '../../domain/entity/representante.entity'
import {RequestEntity} from '@common/models/request.value'
import {validateBodyCreation, validateString,} from '../../application/utils/representante.utils'
import {RepresentanteService} from '../../application/service/representante.inface.service'
import {validateError} from '@common/functions/functions.common'


class RepresenanteController {
  constructor(private representanteService: RepresentanteService) {}
  public getRepresentantes = async (request: NextApiRequest, response: NextApiResponse) => {

      const responseEntity: ResponseEntity<IRepresentante[] | null> =
        await this.representanteService.fetchRepresentantes()

      response.status(responseEntity.status.httpStatus).json(responseEntity)
  }

  public getRepresentanteById = async (request: NextApiRequest, response: NextApiResponse) => {
    const { id } = request.query
    try {
      const requestEntity = new RequestEntity<string>(
        validateString(id),
        request.cookies.Cookie,
        request.headers,
      )
      const responseEntity: ResponseEntity<IRepresentante> | ResponseEntity<null> =
        await this.representanteService.fetchRepresentanteById(requestEntity)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public postRepresentante = async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const requestEntity = new RequestEntity(
        validateBodyCreation(request.body),
        request.cookies.Cookie,
        request.headers,
      )

      const responseEntity: ResponseEntity<null> =
        await this.representanteService.createRepresentante(requestEntity)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

}

export default RepresenanteController
