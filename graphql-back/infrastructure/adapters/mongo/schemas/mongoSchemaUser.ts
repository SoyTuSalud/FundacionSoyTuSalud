import { Schema, model, models } from 'mongoose'
import { GeneroEnum } from '../../../../domain/commons/enums/generoEnum'
import { IdentidadGeneroEnum } from '../../../../domain/commons/enums/identidadGeneroEnum'
import { OrientacionSexualEnum } from '../../../../domain/commons/enums/orientacionSexualEnum'
import { TipoDiscapacidadEnum } from '../../../../domain/commons/enums/tipoDiscapacidadEnum'
import { TipoDocumentoEnum } from '../../../../domain/commons/enums/tipoDocumentoEnum'
import { User } from '../../../../domain/user/userInterface'

const UserSchema = new Schema<User>({
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  tipoDocumento: {
    type: String,
    enum: TipoDocumentoEnum,
    required: true,
  },
  celular: {
    type: String,
    validate: /^\d{10}$/,
    required: true,
  },
  correo: {
    type: String,
    unique: true,
    validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  formularioTuHistoria: {
    type: Boolean,
    required: true,
    default: false
  },
  aplicaEnFundacion: {
    type: Boolean,
    required: true,
    default: false,
  },
  matchService: {
    type: Boolean,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    enum: GeneroEnum,
    required: true,
  },
  fechaNacimiento: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  discapacitado: {
    type: Boolean,
    required: true,
  },
  tipoDiscapacidad: {
    type: String,
    enum: TipoDiscapacidadEnum,
    required: true,
  },
  victimaViolencia: {
    type: Boolean,
    required: true,
  },
  identidadGenero: {
    type: String,
    enum: IdentidadGeneroEnum,
    required: true,
  },
  orientacionSexual: {
    type: String,
    enum: OrientacionSexualEnum,
    required: true,
  },
  grupoPoblacional: {
    type: String,
    required: true,
  },
  municipio: {
    type: String,
    required: true,
  },
  departamento: {
    type: String,
    required: true,
  },
  EPS: {
    type: String,
    required: true,
  },
  tuHistoria: {
    type: Boolean,
    required: true,
  },
  serviciosSolicitado: {
    type: [String],
    required: true,
  },
  historiaClinica: {
    type: String,
    required: true,
  },
  sisben: {
    type: String,
    required: true,
  },
  autorizacionFoto: {
    type: String,
    required: true,
  },
  recopilacionDatos: {
    type: Boolean,
    required: true,
  },
  comunidad: {
    type: String,
    required: true,
  },
  fechaSolicitud: {
    type: String,
    required: true,
  },
})

export default models.User || model('User', UserSchema)
