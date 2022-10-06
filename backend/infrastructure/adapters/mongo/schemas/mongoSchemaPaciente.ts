import { Schema, model, models } from 'mongoose'
import { GeneroEnum } from '../../../../domain/commons/enums/generoEnum'
import { IdentidadGeneroEnum } from '../../../../domain/commons/enums/identidadGeneroEnum'
import { OrientacionSexualEnum } from '../../../../domain/commons/enums/orientacionSexualEnum'
import { TipoDiscapacidadEnum } from '../../../../domain/commons/enums/tipoDiscapacidadEnum'
import { TipoDocumentoEnum } from '../../../../domain/commons/enums/tipoDocumentoEnum'
import { Paciente } from '../../../../domain/paciente/pacienteInterface'

const PacienteSchema = new Schema<Paciente>(
  {
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

export default models.Paciente || model('Paciente', PacienteSchema)
