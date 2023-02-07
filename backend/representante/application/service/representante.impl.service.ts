import {IRepresentante} from '../../domain/entity/representante.entity'
import {RepresentanteRepository} from '../../domain/repository/representante.repository'
import {ResponseEntity} from '@common/models/response.value'
import {RequestEntity} from '@common/models/request.value'
import {getStatusOk, validateError,} from '@common/functions/functions.common'
import {RepresentanteService} from "./representante.inface.service";

export class RepresentanteServiceImpl implements RepresentanteService {
  constructor(private readonly representanteRepository: RepresentanteRepository) {}

  public async fetchRepresentantes(): Promise<ResponseEntity<IRepresentante[] | null>> {
    try {
      const representante = await this.representanteRepository.findRepresentantes()
      return new ResponseEntity(
        representante,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async fetchRepresentanteById(request: RequestEntity<string>): Promise<ResponseEntity<IRepresentante | null>> {
    try {
      const representante = await this.representanteRepository.findRepresentanteById(
        request.body,
      )

      return new ResponseEntity(
        representante,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async createRepresentante(request: RequestEntity<IRepresentante>): Promise<ResponseEntity<null>> {
    try {
      await this.representanteRepository.createRepresentante(request.body)
      return new ResponseEntity(
        null,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

}
