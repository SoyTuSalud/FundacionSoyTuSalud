import {RequestEntity} from '../../../common/models/request.value';
import {ResponseEntity} from '../../../common/models/response.value';
import {IRepresentante} from '../../domain/entity/representante.entity';

export interface RepresentanteService{

    fetchPacientes(): Promise<ResponseEntity<IRepresentante[] | null>>
    fetchPacienteById(request: RequestEntity<string>): Promise<ResponseEntity<IRepresentante | null>>
    createPaciente(request: RequestEntity<IRepresentante>): Promise<ResponseEntity<null>>

}