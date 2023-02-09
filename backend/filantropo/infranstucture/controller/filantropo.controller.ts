import {NextApiRequest, NextApiResponse} from 'next'

import {ControllerTemplate} from "@common/templates/controller.template";
import {ResponseEntity} from '@common/models/response.value'
import {RequestEntity} from '@common/models/request.value'
import {validateError} from '@common/functions/functions.common'

import {validateBodyCreation, validateString,} from '@filantropo/application/utils/filantropo.utils'
import {FilantropoService} from '@filantropo//application/service/filantropo.inface.service'

import {Filantropo} from "@filantropo/domain/entity/filantropo.entity";



class FilantropoController {
  constructor(private filantropoService: FilantropoService,
              private controllerTemplate: ControllerTemplate) {}

  public getFilantropos = async (request: NextApiRequest, response: NextApiResponse) => {

    const methodName = "getFilantropos"

    await this.controllerTemplate.handleController(
      methodName,
      response,
      async () => {
        const responseEntity: ResponseEntity<Filantropo[] | null> =
          await this.filantropoService.fetchFilantropos()
        response.status(responseEntity.status.httpStatus).json(responseEntity)
      })

  }

  public getFilantropoById = async (request: NextApiRequest, response: NextApiResponse) => {

    const methodName = "getFilantropoById"

    await this.controllerTemplate.handleController(
      methodName,
      response,
      async () => {
        const { id } = request.query
        const requestEntity = new RequestEntity<string>(
          validateString(id),
          request.cookies.Cookie,
          request.headers,
        )
        const responseEntity: ResponseEntity<Filantropo> | ResponseEntity<null> =
          await this.filantropoService.fetchFilantropoById(requestEntity)

        response.status(responseEntity.status.httpStatus).json(responseEntity)
      })
  }

  public postFilantropo = async (request: NextApiRequest, response: NextApiResponse) => {

    const methodName = "postFilantropo"

    await this.controllerTemplate.handleController(
      methodName,
      response,
      async () => {

        const requestEntity = new RequestEntity(
          validateBodyCreation(request.body),
          request.cookies.Cookie,
          request.headers,
        )

        const responseEntity: ResponseEntity<null> =
          await this.filantropoService.createFilantropo(requestEntity)

        response.status(responseEntity.status.httpStatus).json(responseEntity)
      })
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
