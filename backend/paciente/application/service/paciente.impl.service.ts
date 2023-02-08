import {getStatusOk, validateError,} from '@common/functions/functions.common'
import {ResponseEntity} from '@common/models/response.value'
import {RequestEntity} from '@common/models/request.value'

import {Paciente} from '@paciente/domain/entity/paciente.entity'
import {PacienteRepository} from '@paciente/domain/repository/paciente.repository'
import {UpdatePacienteDTO} from '@paciente/domain/dtos/updatePaciente.dto'

import {PacienteService} from '@paciente/application/service/paciente.inface.service'

export class PacienteServiceImpl implements PacienteService {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  public async fetchPacientes(): Promise<ResponseEntity<Paciente[] | null>> {
    try {
      const pacientes = await this.pacienteRepository.findPacientes()
      return new ResponseEntity(
        pacientes,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async fetchPacientesTuHistoria(): Promise<ResponseEntity<Paciente[] | null>> {
    try {
      const pacientes = await this.pacienteRepository.findPacientesTuHistoria()
      return new ResponseEntity(
        pacientes,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async fetchPacienteById(request: RequestEntity<string>): Promise<ResponseEntity<Paciente | null>> {
    try {
      const paciente = await this.pacienteRepository.findPacienteById(
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

  public async createPaciente(request: RequestEntity<Paciente>): Promise<ResponseEntity<null>> {
    try {
      await this.pacienteRepository.createPaciente(request.body)
      return new ResponseEntity(
        null,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async updatePacienteTuHistoria(request: RequestEntity<UpdatePacienteDTO>): Promise<ResponseEntity<null>> {
    try {
      await this.pacienteRepository.updateTuHistoria(request.body)
      return new ResponseEntity(
        null,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }
}
