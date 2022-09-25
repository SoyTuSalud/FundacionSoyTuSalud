import { Schema } from "mongoose"
import { TipoDocumentoEnum } from "../commons/enums/tipoDocumentoEnum"

export interface Filantropo {
  tipoDocumento: string
  identificacion: TipoDocumentoEnum
  nombre: string
  user: Schema.Types.ObjectId
  celular: string
  direccion: string
  correo: string
}
