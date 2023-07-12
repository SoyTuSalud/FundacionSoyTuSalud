import {RequestEntity} from '@common/models/request.value';
import {ResponseEntity} from '@common/models/response.value';
import {IRepresentante} from '../../domain/entity/representante.entity';

export interface RepresentanteService{

    fetchRepresentantes(): Promise<ResponseEntity<IRepresentante[] | null>>
    fetchRepresentanteById(request: RequestEntity<string>): Promise<ResponseEntity<IRepresentante | null>>
    createRepresentante(request: RequestEntity<IRepresentante>): Promise<ResponseEntity<null>>

}