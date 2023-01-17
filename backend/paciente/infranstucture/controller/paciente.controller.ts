import {NextApiRequest, NextApiResponse} from 'next'
import conectarBD from '../../../common/connections/mongo.config'
import {ResponseEntity} from '../../../common/models/response.value'
import {Paciente} from '../../domain/entity/paciente.entity'
import {RequestEntity} from '../../../common/models/request.value'
import {validateBodyCreation, validateBodyUpdate, validateString,} from '../../application/utils/paciente.utils'
import {PacienteService} from '../../application/service/paciente.inface.service'
import {validateError} from '../../../common/functions/functions.common'


class PacienteController {
  constructor(private pacienteService: PacienteService) {
    conectarBD()
  }
  public getPacientes = async (request: NextApiRequest, response: NextApiResponse) => {

      const responseEntity: ResponseEntity<Paciente[] | null> =
        await this.pacienteService.fetchPacientes()

      response.status(responseEntity.status.httpStatus).json(responseEntity)
  }

  public getPacientesTuHistoria = async ( request: NextApiRequest, response: NextApiResponse) => {
    const responseEntity: ResponseEntity<Paciente[]> | ResponseEntity<null> =
      await this.pacienteService.fetchPacientesTuHistoria()

    response.status(responseEntity.status.httpStatus).json(responseEntity)
  }

  public getPacientesById = async (request: NextApiRequest, response: NextApiResponse) => {
    const { id } = request.query
    try {
      const requestEntity = new RequestEntity<string>(
        validateString(id),
        request.cookies.Cookie,
        request.headers,
      )
      const responseEntity: ResponseEntity<Paciente> | ResponseEntity<null> =
        await this.pacienteService.fetchPacienteById(requestEntity)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public postPacientes = async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const requestEntity = new RequestEntity(
        validateBodyCreation(request.body),
        request.cookies.Cookie,
        request.headers,
      )

      const responseEntity: ResponseEntity<null> =
        await this.pacienteService.createPaciente(requestEntity)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public patchPacientes = async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const requestEntity = new RequestEntity(
        validateBodyUpdate(request.body),
        request.cookies.Cookie,
        request.headers,
      )
      const responseEntity: ResponseEntity<null> =
        await this.pacienteService.updatePacienteTuHistoria(requestEntity)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }
}

export default PacienteController
