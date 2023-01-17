import {RequestEntity} from '../../../common/models/request.value';
import {ResponseEntity} from '../../../common/models/response.value';
import {UpdatePacienteDTO} from '../../domain/dtos/updatePaciente.dto';
import {Paciente} from '../../domain/entity/paciente.entity';

export interface PacienteService{

    fetchPacientes(): Promise<ResponseEntity<Paciente[] | null>>
    fetchPacientesTuHistoria(): Promise<ResponseEntity<Paciente[] | null>>
    fetchPacienteById(request: RequestEntity<string>): Promise<ResponseEntity<Paciente | null>>
    createPaciente(request: RequestEntity<Paciente>): Promise<ResponseEntity<null>>
    updatePacienteTuHistoria(request: RequestEntity<UpdatePacienteDTO>): Promise<ResponseEntity<null>>

}