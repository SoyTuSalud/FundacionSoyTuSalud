import { GeneroEnum } from '../enum/genero.enum'
import { IdentidadGeneroEnum } from '../enum/identidadGenero.enum'
import { OrientacionSexualEnum } from '../enum/orientacionSexual.enum'
import { TipoDiscapacidadEnum } from '../enum/tipoDiscapacida.enum'
import { TipoDocumentoEnum } from '../enum/tipoDocumento.enum'

export interface Paciente {
  identificacion: string
  nombre: string
  apellidos: string
  tipoDocumento: TipoDocumentoEnum
  celular: string
  correo: string
  formularioTuHistoria?: boolean
  aplicaEnFundacion?: boolean
  matchService?: boolean
  foto?: string
  fechaNacimiento?: string
  direccion?: string
  municipio?: string
  departamento?: string
  EPS?: string
  tuHistoria?: string
  serviciosSolicitado?: [string]
  historiaClinica?: string
  sisben?: string
  autorizacionFoto?: boolean
  recopilacionDatos?: boolean
  fechaSolicitud?: string
  comunidad?: string
  genero?: GeneroEnum
  discapacitado?: boolean
  tipoDiscapacidad?: TipoDiscapacidadEnum
  victimaViolencia?: boolean
  identidadGenero?: IdentidadGeneroEnum
  orientacionSexual?: OrientacionSexualEnum
  grupoPoblacional?: string
}
