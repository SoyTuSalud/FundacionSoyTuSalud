import {NextApiRequest, NextApiResponse} from 'next'
import {ResponseEntity} from '@common/models/response.value'
import {RequestEntity} from '@common/models/request.value'
import {ControllerTemplate} from "@common/templates/controller.template";

import {Paciente} from '@paciente/domain/entity/paciente.entity'

import {validateBodyCreation, validateBodyUpdate, validateString,} from '@paciente/application/utils/paciente.utils'
import {PacienteService} from '@paciente/application/service/paciente.inface.service'


class PacienteController {
  constructor(private pacienteService: PacienteService,
              private controllerTemplate: ControllerTemplate) {}

  public getPacientes = async (request: NextApiRequest, response: NextApiResponse) => {

    const methodName = "getPacientes"

    await this.controllerTemplate.handleController(methodName,
      response,
      async () => {

        const responseEntity: ResponseEntity<Paciente[] | null> =
          await this.pacienteService.fetchPacientes()

        response.status(responseEntity.status.httpStatus).json(responseEntity)
      })
  }

  public getPacientesTuHistoria = async ( request: NextApiRequest, response: NextApiResponse) => {
    const methodName = "getPacientesTuHistoria"

    await this.controllerTemplate.handleController(methodName,
      response,
      async () => {

        const responseEntity: ResponseEntity<Paciente[]> | ResponseEntity<null> =
          await this.pacienteService.fetchPacientesTuHistoria()

        response.status(responseEntity.status.httpStatus).json(responseEntity)
      })
  }

  public getPacientesById = async (request: NextApiRequest, response: NextApiResponse) => {

    const methodName = "getPacientesById"

    await this.controllerTemplate.handleController(methodName,
      response,
      async () => {

        const { id } = request.query

        const requestEntity = new RequestEntity<string>(
          validateString(id),
          request.cookies.Cookie,
          request.headers,
        )
        const responseEntity: ResponseEntity<Paciente> | ResponseEntity<null> =
          await this.pacienteService.fetchPacienteById(requestEntity)

        response.status(responseEntity.status.httpStatus).json(responseEntity)

      })
  }

  public postPacientes = async (request: NextApiRequest, response: NextApiResponse) => {

    const methodName = "postPacientes"

    await this.controllerTemplate.handleController(methodName,
      response,
      async () => {

        const requestEntity = new RequestEntity(
          validateBodyCreation(request.body),
          request.cookies.Cookie,
          request.headers,
        )

        const responseEntity: ResponseEntity<null> =
          await this.pacienteService.createPaciente(requestEntity)

        response.status(responseEntity.status.httpStatus).json(responseEntity)

      })
  }

  public patchPacientes = async (request: NextApiRequest, response: NextApiResponse) => {

    const methodName = "patchPacientes"

    await this.controllerTemplate.handleController(methodName,
      response,
      async () => {
        const requestEntity = new RequestEntity(
          validateBodyUpdate(request.body),
          request.cookies.Cookie,
          request.headers,
        )
        const responseEntity: ResponseEntity<null> =
          await this.pacienteService.updatePacienteTuHistoria(requestEntity)

        response.status(responseEntity.status.httpStatus).json(responseEntity)

      })
  }
}

export default PacienteController
