import {TipoDocumentoEnum} from '../enum/tipoDocumento.enum'

export interface IRepresentante {
  identificacion: string
  foto: string
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

