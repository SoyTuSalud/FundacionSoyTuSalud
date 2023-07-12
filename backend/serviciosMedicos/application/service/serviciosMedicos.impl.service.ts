import {ServiciosMedicosService} from "@serviciosMedicos/application/service/serviciosMedicos.inface.service";
import { ServiciosMedicosRepository } from "@serviciosMedicos/domain/repository/serviciosMedicos.repository";
import {ResponseEntity} from "@common/models/response.value";
import {IServiciosMedicos} from "@serviciosMedicos/domain/entity/serviciosMedicos.entity";
import {RequestEntity} from "@common/models/request.value";
import {getStatusOk, validateError} from "@common/functions/functions.common";


export class ServiciosMedicosImplService implements ServiciosMedicosService {
  constructor(private readonly serviciosMedicosRepository: ServiciosMedicosRepository) {}

  public async fetchServiciosMedicos(): Promise<ResponseEntity<IServiciosMedicos[] | null>> {
    try {
      const serviciosMedicos = await this.serviciosMedicosRepository.findServiciosMedicos()
      return new ResponseEntity(
        serviciosMedicos,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }


  public async fetchServiciosMedicosById(request: RequestEntity<string>): Promise<ResponseEntity<IServiciosMedicos | null>> {
    try {
      const paciente = await this.serviciosMedicosRepository.findServicioMedicoById(
        request.body,
      )

      return new ResponseEntity(
        paciente,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async createServicioMedico(request: RequestEntity<IServiciosMedicos>): Promise<ResponseEntity<null>> {
    try {
      await this.serviciosMedicosRepository.createServicioMedico(request.body)
      return new ResponseEntity(
        null,
        getStatusOk(),
      )
    } catch (error: unknown) {
      return validateError(error)
    }
  }

}
