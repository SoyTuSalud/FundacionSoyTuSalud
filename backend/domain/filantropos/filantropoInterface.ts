import { TipoDocumentoEnum } from "../commons/enums/tipoDocumentoEnum"

export interface Filantropo {
  tipoDocumento: String
  identificacion: TipoDocumentoEnum
  nombre: String
  celular: String
  direccion: String
  correo: String
}
