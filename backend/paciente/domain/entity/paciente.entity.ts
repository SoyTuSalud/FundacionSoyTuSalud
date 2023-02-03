import {GeneroEnum} from '@paciente/domain/enum/genero.enum'
import {IdentidadGeneroEnum} from '@paciente/domain/enum/identidadGenero.enum'
import {OrientacionSexualEnum} from '@paciente/domain/enum/orientacionSexual.enum'
import {TipoDiscapacidadEnum} from '@paciente/domain/enum/tipoDiscapacida.enum'
import {TipoDocumentoEnum} from '@paciente/domain/enum/tipoDocumento.enum'

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
