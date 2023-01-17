import { Document, model, models, Schema } from 'mongoose'
import { GeneroEnum } from '../../domain/enum/genero.enum'
import { Paciente } from '../../domain/entity/paciente.entity'
import { TipoDiscapacidadEnum } from '../../domain/enum/tipoDiscapacida.enum'
import { TipoDocumentoEnum } from '../../domain/enum/tipoDocumento.enum'
import { IdentidadGeneroEnum } from '../../domain/enum/identidadGenero.enum'
import { OrientacionSexualEnum } from '../../domain/enum/orientacionSexual.enum'

export interface PacienteDoc extends Paciente, Document {
  identificacion: string
  nombre: string
  apellidos: string
  tipoDocumento: TipoDocumentoEnum
  celular: string
  correo: string
  formularioTuHistoria: boolean
  aplicaEnFundacion?: boolean
  matchService?: boolean
  foto?: string
  genero?: GeneroEnum
  fechaNacimiento?: string
  direccion?: string
  discapacitado?: boolean
  tipoDiscapacidad?: TipoDiscapacidadEnum
  victimaViolencia?: boolean
  identidadGenero?: IdentidadGeneroEnum
  orientacionSexual?: OrientacionSexualEnum
  grupoPoblacional?: string
  municipio?: string
  departamento?: string
  EPS?: string
  tuHistoria?: string
  serviciosSolicitado?: [string]
  historiaClinica?: string
  sisben?: string
  autorizacionFoto?: boolean
  recopilacionDatos?: boolean
  comunidad?: string
  fechaSolicitud?: string
}

export const PacienteSchema = new Schema<PacienteDoc>(
  {
    identificacion: {
      type: String,
      required: true,
      unique: true,
      index: true,
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
      default: false,
    },
    aplicaEnFundacion: {
      type: Boolean,
      required: true,
      default: false,
    },
    matchService: {
      type: Boolean,
    },
    foto: {
      type: String,
    },
    genero: {
      type: String,
      enum: GeneroEnum,
    },
    fechaNacimiento: {
      type: String,
    },
    direccion: {
      type: String,
    },
    discapacitado: {
      type: Boolean,
    },
    tipoDiscapacidad: {
      type: String,
      enum: TipoDiscapacidadEnum,
    },
    victimaViolencia: {
      type: Boolean,
    },
    identidadGenero: {
      type: String,
      enum: IdentidadGeneroEnum,
    },
    orientacionSexual: {
      type: String,
      enum: OrientacionSexualEnum,
    },
    grupoPoblacional: {
      type: String,
    },
    municipio: {
      type: String,
    },
    departamento: {
      type: String,
    },
    EPS: {
      type: String,
    },
    tuHistoria: {
      type: String,
    },
    serviciosSolicitado: {
      type: [String],
    },
    historiaClinica: {
      type: String,
    },
    sisben: {
      type: String,
    },
    autorizacionFoto: {
      type: Boolean,
    },
    recopilacionDatos: {
      type: Boolean,
    },
    comunidad: {
      type: String,
    },
    fechaSolicitud: {
      type: String,
    },
  },
  {
    versionKey: false,
  },
)

export default models.Paciente || model<PacienteDoc>('Paciente', PacienteSchema)
