import { TipoDocumentoEnum } from "../commons/enums/tipoDocumentoEnum"

export interface Representante {
  identificacion: String
  foto: String
  nombreCompleto: String
  celular: String
  tipoDocumento: TipoDocumentoEnum
  departamento: String
  municipio: String
  direccion: String
  paginaWeb?: String
  cuentaDeAhorros: String
  distintivoHabilitacion: String
  convalidacionIcfes?: String
  fotoLogoPublicidad: String
  hojaVida: String
  resumenCurriculum: String
  aceptaConvenio: Boolean
  aceptaTratamientoDatos: Boolean
  aceptaDocumentoSARLAFT: Boolean
  aceptaCodigoEticaSoyTuSalud: Boolean
  habilitado?: Boolean
}
