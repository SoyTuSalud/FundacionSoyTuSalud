import {Document, Model, model, models, Schema} from 'mongoose'
import {IRepresentante} from '../../domain/entity/representante.entity'
import {TipoDocumentoEnum} from '../../domain/enum/tipoDocumento.enum'


export interface RepresentanteDoc extends IRepresentante, Document {

  identificacion: string
  foto: string
  nombreCompleto: string
  celular: string
  tipoDocumento: TipoDocumentoEnum
  departamento: string
  municipio: string
  direccion: string
  paginaWeb: string
  cuentaDeAhorros: string
  distintivoHabilitacion: string
  convalidacionIcfes: string
  fotoLogoPublicidad: string
  hojaVida: string
  resumenCurriculum: string
  aceptaConvenio: boolean
  aceptaTratamientoDatos: boolean
  aceptaDocumentoSARLAFT: boolean
  aceptaCodigoEticaSoyTuSalud: boolean
  habilitado: boolean
}

const RepresentanteSchema = new Schema<RepresentanteDoc>(
  {
    identificacion: {
      type: String,
      required: true,
      unique: true
    },
    foto: {
      type: String,
      required: true,
    },
    nombreCompleto: {
      type: String,
      required: true,
    },
    celular: {
      type: String,
      validate: /^\d{10}$/,
      required: true,
    },
    tipoDocumento: {
      type: String,
      enum: TipoDocumentoEnum,
      required: true,
    },
    departamento: {
      type: String,
      required: true,
    },
    municipio: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    paginaWeb: {
      type: String,
      validate:/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    },
    cuentaDeAhorros: {
      type: String,
      required: true,
      validate: /^\d/
    },
    distintivoHabilitacion: {
      type: String,
      required: true,
    },
    convalidacionIcfes: {
      type: String,
    },
    fotoLogoPublicidad: {
      type: String,
      required: true,
    },
    hojaVida: {
      type: String,
      required: true,
    },
    resumenCurriculum: {
      type: String,
      required: true,
    },
    aceptaConvenio: {
      type: Boolean,
      required: true,
    },
    aceptaTratamientoDatos: {
      type: Boolean,
      required: true,
    },
    aceptaDocumentoSARLAFT: {
      type: Boolean,
      required: true,
    },
    aceptaCodigoEticaSoyTuSalud: {
      type: Boolean,
      required: true,
    },
    habilitado: {
      type: Boolean,
      dafault: false,
    },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  },
)

RepresentanteSchema.virtual('servicios', {
    ref: 'Servicios',
    localField: '_id', //campo en el modelo representate
    foreignField: 'representante', // campo en el modelo servicio
  }
)

export default (models.Representante as Model<RepresentanteDoc, {}, {}, {}, any>) || model<RepresentanteDoc>('Representante', RepresentanteSchema)
