import {RequestEntity} from '@common/models/request.value';
import {ResponseEntity} from '@common/models/response.value';
import {IServiciosMedicos} from "@serviciosMedicos/domain/entity/serviciosMedicos.entity";


export interface ServiciosMedicosService {

    fetchServiciosMedicos(): Promise<ResponseEntity<IServiciosMedicos[] | null>>
    fetchServiciosMedicosById(request: RequestEntity<string>): Promise<ResponseEntity<IServiciosMedicos | null>>
    createServicioMedico(request: RequestEntity<IServiciosMedicos>): Promise<ResponseEntity<null>>

}