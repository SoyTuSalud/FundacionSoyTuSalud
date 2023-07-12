import {RequestEntity} from '@common/models/request.value';
import {ResponseEntity} from '@common/models/response.value';
import {Filantropo} from '@filantropo/domain/entity/filantropo.entity';
import {CreateFilantropoDTO} from "../../domain/dtos/createFilantropo.dto";

export interface FilantropoService {

    fetchFilantropos(): Promise<ResponseEntity<Filantropo[] | null>>

    fetchFilantropoById(request: RequestEntity<string>): Promise<ResponseEntity<Filantropo | null>>

    createFilantropo(request: RequestEntity<CreateFilantropoDTO>): Promise<ResponseEntity<null>>

    //todo update filantropos
    //updatePacienteTuHistoria(request: RequestEntity<UpdatePacienteDTO>): Promise<ResponseEntity<null>>

}