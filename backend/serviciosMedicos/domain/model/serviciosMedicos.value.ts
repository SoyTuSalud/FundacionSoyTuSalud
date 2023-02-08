import {IServiciosMedicos} from "@/backend/serviciosMedicos/domain/entity/serviciosMedicos.entity";

class ServiciosMedicosValue implements IServiciosMedicos {
  tipoServicio: string
  especialidad: string
  modalidad: string
  horaInicio: string
  horaFin: string
  celularServicio: string
  whatsAppServicio: string
  nombreResponsable: string
  direccionServicio: string
  dias: [string]
  valorServicio: string
  representante: string
  habilitado: boolean

  constructor(tipoServicio: string, especialidad: string,
              modalidad: string, horaInicio: string,
              horaFin: string, celularServicio: string,
              whatsAppServicio: string, nombreResponsable: string,
              direccionServicio: string, dias: [string],
              valorServicio: string, representante: string,
              habilitado: boolean) {
    this.tipoServicio = tipoServicio;
    this.especialidad = especialidad;
    this.modalidad = modalidad;
    this.horaInicio = horaInicio;
    this.horaFin = horaFin;
    this.celularServicio = celularServicio;
    this.whatsAppServicio = whatsAppServicio;
    this.nombreResponsable = nombreResponsable;
    this.direccionServicio = direccionServicio;
    this.dias = dias;
    this.valorServicio = valorServicio;
    this.representante = representante;
    this.habilitado = habilitado;
  }
}

export default ServiciosMedicosValue
