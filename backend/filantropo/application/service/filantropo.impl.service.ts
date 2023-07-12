import {ResponseEntity} from '@common/models/response.value'
import {RequestEntity} from '@common/models/request.value'
import {getStatusOk,} from '@common/functions/functions.common'

import {Filantropo} from '@filantropo/domain/entity/filantropo.entity'
import {FilantropoRepository} from '@filantropo/domain/repository/filantropo.repository'
import {CreateFilantropoDTO} from "@filantropo/domain/dtos/createFilantropo.dto";

import {FilantropoService} from '@filantropo/application/service/filantropo.inface.service'
import {ServiceTemplate} from "@common/templates/service.template";


export class filantropoServiceImpl implements FilantropoService {
  constructor(private readonly filantropoRepository: FilantropoRepository,
              private readonly serviceTemplate: ServiceTemplate) {}

  public async fetchFilantropos(): Promise<ResponseEntity<Filantropo[] | null>> {

    const methodName = "fetchFilantropos"

    return await this.serviceTemplate.handleService(methodName,
      async () => {
        const filantropo = await this.filantropoRepository.findFilantropo()
        return new ResponseEntity(
          filantropo,
          getStatusOk(),
        )
      })
  }


  public async fetchFilantropoById(request: RequestEntity<string>): Promise<ResponseEntity<Filantropo | null>> {

    const methodName = "fetchFilantropoById"

    return await this.serviceTemplate.handleService(methodName,
      async () => {
        const filantropo = await this.filantropoRepository.findFilantropoById(
          request.body,
        )
        return new ResponseEntity(
          filantropo,
          getStatusOk(),
        )
      })
  }

  public async createFilantropo(request: RequestEntity<CreateFilantropoDTO>): Promise<ResponseEntity<null>> {

    const methodName = "createFilantropo"

    return await this.serviceTemplate.handleService(methodName,
      async () => {
        await this.filantropoRepository.createFilantropo(request.body)
        return new ResponseEntity(
          null,
          getStatusOk(),
        )
      })
  }

  //todo
/*  public async updatePacienteTuHistoria(request: RequestEntity<UpdatePacienteDTO>): Promise<ResponseEntity<null>> {
    try {
      await this.filantropoRepository.updateFilantropo(request.body)
      return new ResponseEntity(
        null,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }
 */
}
