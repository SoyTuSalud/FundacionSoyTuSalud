import { GeneroEnum } from '../commons/enums/generoEnum'
import { IdentidadGeneroEnum } from '../commons/enums/identidadGeneroEnum'
import { OrientacionSexualEnum } from '../commons/enums/orientacionSexualEnum'
import { TipoDiscapacidadEnum } from '../commons/enums/tipoDiscapacidadEnum'
import { TipoDocumentoEnum } from '../commons/enums/tipoDocumentoEnum'

export interface User {
  identificacion: String
  nombre: String
  apellidos: String
  tipoDocumento: TipoDocumentoEnum
  celular: String
  correo: String
  formularioTuHistoria: Boolean
  aplicaEnFundacion: Boolean
  matchService: String
  foto: String
  genero: GeneroEnum
  fechaNacimiento: String
  direccion: String
  discapacitado: Boolean
  tipoDiscapacidad: TipoDiscapacidadEnum
  victimaViolencia: Boolean
  identidadGenero: IdentidadGeneroEnum
  orientacionSexual: OrientacionSexualEnum
  grupoPoblacional: String
  municipio: String
  departamento: String
  EPS: String
  tuHistoria: String
  serviciosSolicitado: [String]
  historiaClinica: String
  sisben: String
  autorizacionFoto: Boolean
  recopilacionDatos: Boolean
  comunidad: String
  fechaSolicitud: String
}
