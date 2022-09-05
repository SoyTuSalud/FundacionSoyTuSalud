import { Schema } from "mongoose"

export interface Servicios {

  tipoServicio: String
  especialidad: String
  modalidad: String
  horaInicio: String
  horaFin: String
  celularServicio: String
  whatsAppServicio: String
  nombreResponsable: String
  direccionServicio: String
  dias: [String]
  valorServicio: Number
  representante: Schema.Types.ObjectId
  habilitado: Boolean

}
