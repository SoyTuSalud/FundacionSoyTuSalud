import {UpdatePacienteDTO} from "../dtos/updatePaciente.dto"
import {IRepresentante} from "../entity/representante.entity"


export interface RepresentanteRepository {
  findRepresentanteById(_id: string): Promise<IRepresentante>
  findRepresentantes(): Promise<IRepresentante[]>
  createRepresentante(representante: IRepresentante): Promise<void>
}
