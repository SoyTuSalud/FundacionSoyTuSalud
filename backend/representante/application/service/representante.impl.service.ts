import {IRepresentante} from '../../domain/entity/representante.entity'
import {RepresentanteRepository} from '../../domain/repository/representante.repository'
import {ResponseEntity} from '../../../common/models/response.value'
import {RequestEntity} from '../../../common/models/request.value'
import {getStatusOk, validateError,} from '../../../common/functions/functions.common'
import {RepresentanteService} from "./paciente.inface.service";

export class RepresentanteServiceImpl implements RepresentanteService {
  constructor(private readonly representanteRepository: RepresentanteRepository) {}

  public async fetchPacientes(): Promise<ResponseEntity<IRepresentante[] | null>> {
    try {
      const pacientes = await this.representanteRepository.findRepresentantes()
      return new ResponseEntity(
        pacientes,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async fetchPacienteById(request: RequestEntity<string>): Promise<ResponseEntity<IRepresentante | null>> {
    try {
      const paciente = await this.representanteRepository.findRepresentanteById(
        request.body,
      )

      return new ResponseEntity(
        paciente,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async createPaciente(request: RequestEntity<IRepresentante>): Promise<ResponseEntity<null>> {
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
