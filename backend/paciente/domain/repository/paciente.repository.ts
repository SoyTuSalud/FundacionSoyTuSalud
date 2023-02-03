import {UpdatePacienteDTO} from "@paciente/domain/dtos/updatePaciente.dto"
import {Paciente} from "@paciente/domain/entity/paciente.entity"


export interface PacienteRepository {
  findPacienteById(_id: string): Promise<Paciente>
  findPacientes(): Promise<Paciente[]>
  findPacientesTuHistoria(): Promise<Paciente[]>
  createPaciente(paciente: Paciente): Promise<void>
  updateTuHistora(updatePaciente: UpdatePacienteDTO): Promise<void>
}
