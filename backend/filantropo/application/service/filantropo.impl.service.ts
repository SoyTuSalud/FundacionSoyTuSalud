import {Filantropo} from '../../domain/entity/filantropo.entity'
import {FilantropoRepository} from '../../domain/repository/filantropo.repository'
import {ResponseEntity} from '../../../common/models/response.value'
import {FilantropoService} from './filantropo.inface.service'
import {RequestEntity} from '../../../common/models/request.value'
import {getStatusOk, validateError,} from '../../../common/functions/functions.common'
import {CreateFilantropoDTO} from "../../domain/dtos/updateFilantropo.dto";

export class filantropoServiceImpl implements FilantropoService {
  constructor(private readonly filantropoRepository: FilantropoRepository) {}

  public async fetchFilantropos(): Promise<ResponseEntity<Filantropo[] | null>> {
    try {
      const filantropo = await this.filantropoRepository.findFilantropo()
      return new ResponseEntity(
        filantropo,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }


  public async fetchFilantropoById(request: RequestEntity<string>): Promise<ResponseEntity<Filantropo | null>> {
    try {
      const filantropo = await this.filantropoRepository.findFilantropoById(
        request.body,
      )

      return new ResponseEntity(
        filantropo,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async createFilantropo(request: RequestEntity<CreateFilantropoDTO>): Promise<ResponseEntity<null>> {
    try {
      await this.filantropoRepository.createFilantropo(request.body)
      return new ResponseEntity(
        null,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
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
