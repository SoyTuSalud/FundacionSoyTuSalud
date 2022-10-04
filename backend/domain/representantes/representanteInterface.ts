import { Schema } from "mongoose"
import { TipoDocumentoEnum } from "../commons/enums/tipoDocumentoEnum"

export interface Representante {
  identificacion: string
  foto: string
  user: Schema.Types.ObjectId
  nombreCompleto: string
  celular: string
  tipoDocumento: TipoDocumentoEnum
  departamento: string
  municipio: string
  direccion: string
  paginaWeb?: string
  cuentaDeAhorros: string
  distintivoHabilitacion: string
  convalidacionIcfes?: string
  fotoLogoPublicidad: string
  hojaVida: string
  resumenCurriculum: string
  aceptaConvenio: boolean
  aceptaTratamientoDatos: boolean
  aceptaDocumentoSARLAFT: boolean
  aceptaCodigoEticaSoyTuSalud: boolean
  habilitado?: boolean
}
