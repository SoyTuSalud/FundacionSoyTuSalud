import { Schema } from "mongoose"
import { TipoDocumentoEnum } from "../commons/enums/tipoDocumentoEnum"

export interface Filantropo {
  tipoDocumento: string
  identificacion: TipoDocumentoEnum
  nombre: string
  celular: string
  direccion: string
  correo: string
}
