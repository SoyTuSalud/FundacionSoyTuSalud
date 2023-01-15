import { Paciente } from '../../domain/entity/paciente.entity'
import { PacienteRepository } from '../../domain/repository/paciente.repository'
import { ResponseEntity } from '../../../common/models/response.value'
import { PacienteService } from './paciente.inface.service'
import { UpdatePacienteDTO } from '../../domain/dtos/updatePaciente.dto'
import { RequestEntity } from '../../../common/models/request.value'
import {
  validateError,
  getStatusOk,
} from '../../../common/functions/functions.common'

export class PacienteServiceImpl implements PacienteService {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  public async fetchPacientes(): Promise<ResponseEntity<Paciente[] | null>> {
    try {
      const pacientes = await this.pacienteRepository.findPacientes()
      const response: ResponseEntity<Paciente[]> = new ResponseEntity(
        pacientes,
        getStatusOk(),
      )

      return response
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async fetchPacientesTuHistoria(): Promise<
    ResponseEntity<Paciente[] | null>
  > {
    try {
      const pacientes = await this.pacienteRepository.findPacientesTuHistoria()
      const response: ResponseEntity<Paciente[]> = new ResponseEntity(
        pacientes,
        getStatusOk(),
      )

      return response
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async fetchPacienteById(
    request: RequestEntity<string>,
  ): Promise<ResponseEntity<Paciente | null>> {
    try {
      const paciente = await this.pacienteRepository.findPacienteById(
        request.body,
      )

      const response: ResponseEntity<Paciente> = new ResponseEntity(
        paciente,
        getStatusOk(),
      )
      return response
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async createPaciente(
    request: RequestEntity<Paciente>,
  ): Promise<ResponseEntity<null>> {
    try {
      await this.pacienteRepository.createPaciente(request.body)
      const response: ResponseEntity<null> = new ResponseEntity(
        null,
        getStatusOk(),
      )
      return response
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async updatePacienteTuHistoria(
    request: RequestEntity<UpdatePacienteDTO>,
  ): Promise<ResponseEntity<null>> {
    try {
      await this.pacienteRepository.updateTuHistora(request.body)
      const response: ResponseEntity<null> = new ResponseEntity(
        null,
        getStatusOk(),
      )

      return response
    } catch (error: unknown) {
      return validateError(error)
    }
  }
}
