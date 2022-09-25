import { Schema } from 'mongoose'
import { GeneroEnum } from '../commons/enums/generoEnum'
import { IdentidadGeneroEnum } from '../commons/enums/identidadGeneroEnum'
import { OrientacionSexualEnum } from '../commons/enums/orientacionSexualEnum'
import { TipoDiscapacidadEnum } from '../commons/enums/tipoDiscapacidadEnum'
import { TipoDocumentoEnum } from '../commons/enums/tipoDocumentoEnum'

export interface Paciente {
  identificacion: string
  nombre: string
  user: Schema.Types.ObjectId
  apellidos: string
  contrasena: string
  tipoDocumento: TipoDocumentoEnum
  celular: string
  correo: string
  formularioTuHistoria: boolean
  aplicaEnFundacion: boolean
  matchService: boolean
  foto: string
  genero: GeneroEnum
  fechaNacimiento: string
  direccion: string
  discapacitado: boolean
  tipoDiscapacidad: TipoDiscapacidadEnum
  victimaViolencia: boolean
  identidadGenero: IdentidadGeneroEnum
  orientacionSexual: OrientacionSexualEnum
  grupoPoblacional: string
  municipio: string
  departamento: string
  EPS: string
  tuHistoria: string
  serviciosSolicitado: [string]
  historiaClinica: string
  sisben: string
  autorizacionFoto: boolean
  recopilacionDatos: boolean
  comunidad: string
  fechaSolicitud: string
}
