import {IServiciosMedicos} from "@/backend/serviciosMedicos/domain/entity/serviciosMedicos.entity";

export interface ServiciosMedicosRepository {
  findServicioMedicoById(_id: string): Promise<IServiciosMedicos>
  findServiciosMedicos(): Promise<IServiciosMedicos[]>
  createServicioMedico(paciente: IServiciosMedicos): Promise<void>
}
