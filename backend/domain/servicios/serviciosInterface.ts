import { Schema } from "mongoose"

export interface Servicios {

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
  representante: Schema.Types.ObjectId
  habilitado: boolean

}
