import {Filantropo} from "@filantropo/domain/entity/filantropo.entity"
import {CreateFilantropoDTO} from "@filantropo/domain/dtos/createFilantropo.dto";


export interface FilantropoRepository {
  findFilantropoById(identificacion: string): Promise<Filantropo>
  findFilantropo(): Promise<Filantropo[]>
  createFilantropo(paciente: CreateFilantropoDTO): Promise<void>

  //todo update filantropos
  //updateFilantropo(updatePaciente: UpdatePacienteDTO): Promise<void>
}
