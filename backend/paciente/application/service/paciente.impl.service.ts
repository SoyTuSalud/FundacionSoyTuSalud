import {getStatusOk,} from '@common/functions/functions.common'
import {ResponseEntity} from '@common/models/response.value'
import {RequestEntity} from '@common/models/request.value'
import {ServiceTemplate} from "@common/templates/service.template";

import {Paciente} from '@paciente/domain/entity/paciente.entity'
import {PacienteRepository} from '@paciente/domain/repository/paciente.repository'
import {UpdatePacienteDTO} from '@paciente/domain/dtos/updatePaciente.dto'

import {PacienteService} from '@paciente/application/service/paciente.inface.service'


export class PacienteServiceImpl implements PacienteService {
  constructor(private readonly pacienteRepository: PacienteRepository,
              private readonly serviceTemplate: ServiceTemplate) {}


  public async fetchPacientes(): Promise<ResponseEntity<Paciente[] | null>> {

    const methodName = "fetchPacientes"

    return await this.serviceTemplate.handleService(methodName,
      async () => {
        const pacientes = await this.pacienteRepository.findPacientes()
        return new ResponseEntity(
          pacientes,
          getStatusOk(),
        )
      })
  }

  public async fetchPacientesTuHistoria(): Promise<ResponseEntity<Paciente[] | null>> {

    const methodName = "fetchPacientesTuHistoria"

    return await this.serviceTemplate.handleService(methodName,
      async () => {
        const pacientes = await this.pacienteRepository.findPacientesTuHistoria()
        return new ResponseEntity(
          pacientes,
          getStatusOk(),
        )
      })
  }

  public async fetchPacienteById(request: RequestEntity<string>): Promise<ResponseEntity<Paciente | null>> {

    const methodName = "fetchPacienteById"

    return await this.serviceTemplate.handleService(methodName,
      async () => {
        const paciente = await this.pacienteRepository.findPacienteById(
          request.body,
        )
        return new ResponseEntity(
          paciente,
          getStatusOk(),
        )
      })
  }

  public async createPaciente(request: RequestEntity<Paciente>): Promise<ResponseEntity<null>> {

    const methodName = "createPaciente"

    return await this.serviceTemplate.handleService(methodName,
      async () => {
        await this.pacienteRepository.createPaciente(request.body)
        return new ResponseEntity(
          null,
          getStatusOk(),
        )
      })
  }

  public async updatePacienteTuHistoria(request: RequestEntity<UpdatePacienteDTO>): Promise<ResponseEntity<null>> {

    const methodName = "updatePacienteTuHistoria"

    return await this.serviceTemplate.handleService(methodName,
      async () => {
        await this.pacienteRepository.updateTuHistoria(request.body)
        return new ResponseEntity(
          null,
          getStatusOk(),
        )
      })
  }
}
