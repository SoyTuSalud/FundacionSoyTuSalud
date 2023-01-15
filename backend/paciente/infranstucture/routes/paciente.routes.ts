import { NextApiRequest, NextApiResponse } from 'next'
import { ResponseCodes } from '../../../common/enums/responseCodes.Enum'
import { validateRol } from '../../../common/middleware/common.middleware'
import { Status } from '../../../common/models/status.value'
import PacienteController from '../controller/paciente.controller'
import { roleEnum } from '../../../common/enums/role.enum'
import HttpError from '../../../common/models/httpError.value'

export class PacientesRoutes {
  constructor(private pacienteController: PacienteController) {}

  public initRoute(request: NextApiRequest, response: NextApiResponse) {
    const { method } = request
    const { url } = request
    switch (method) {
      case 'GET':
        return this.getRoutes(request, response, url || '')
      case 'POST':
        return this.postRoutes(request, response, url || '')
      case 'PATCH':
        return this.patchRoutes(request, response, url || '')
      default:
        throw new HttpError(
          new Status(
            ResponseCodes.METHOD_NOT_ALLOWED.httpStatus,
            ResponseCodes.METHOD_NOT_ALLOWED.code,
            ResponseCodes.METHOD_NOT_ALLOWED.message,
          ),
        )
    }
  }

  private getRoutes(
    request: NextApiRequest,
    response: NextApiResponse,
    url: string,
  ) {
    const { id } = request.query

    switch (url) {
      case '/api/v1/pacientes':
        validateRol(request, [roleEnum.ADMIN])
        return this.pacienteController.getPacientes(request, response)

      case '/api/v1/pacientes/historia':
        validateRol(request, [roleEnum.NO_AUTH])
        return this.pacienteController.getPacientesTuHistoria(request, response)

      case `/api/v1/pacientes/find/${id}`:
        validateRol(request, [roleEnum.NO_AUTH])
        return this.pacienteController.getPacientesById(request, response)

      default:
        throw new HttpError(
          new Status(
            ResponseCodes.ROUTE_NOT_FOUND.httpStatus,
            ResponseCodes.ROUTE_NOT_FOUND.code,
            ResponseCodes.ROUTE_NOT_FOUND.message,
          ),
        )
    }
  }

  private postRoutes(
    request: NextApiRequest,
    response: NextApiResponse,
    url: string,
  ) {
    switch (url) {
      case '/api/v1/pacientes':
        validateRol(request, [roleEnum.NO_AUTH])
        return this.pacienteController.postPacientes(request, response)

      default:
        throw new HttpError(
          new Status(
            ResponseCodes.ROUTE_NOT_FOUND.httpStatus,
            ResponseCodes.ROUTE_NOT_FOUND.code,
            ResponseCodes.ROUTE_NOT_FOUND.message,
          ),
        )
    }
  }
  private patchRoutes(
    request: NextApiRequest,
    response: NextApiResponse,
    url: string,
  ) {
    switch (url) {
      case '/api/v1/pacientes':
        validateRol(request, [roleEnum.NO_AUTH])
        return this.pacienteController.postPacientes(request, response)

      default:
        throw new HttpError(
          new Status(
            ResponseCodes.ROUTE_NOT_FOUND.httpStatus,
            ResponseCodes.ROUTE_NOT_FOUND.code,
            ResponseCodes.ROUTE_NOT_FOUND.message,
          ),
        )
    }
  }
}
