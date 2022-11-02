import { Schema, model, models } from 'mongoose'
import { ProfileTypeEnum } from '../../../../domain/commons/enums/profileTypeEnum'
import { TipoDocumentoEnum } from '../../../../domain/commons/enums/tipoDocumentoEnum'
import { Filantropo } from '../../../../domain/filantropos/filantropoInterface'

const FilantropoSchema = new Schema<Filantropo>(
  {
    tipoDocumento: {
      type: String,
      enum: TipoDocumentoEnum,
      required: true,
    },
    identificacion: {
      type: String,
      unique: true,
      validate: /^\d/,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    celular: {
      type: String,
      validate: /^\d{10}$/,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      unique: true,
      validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      required: true,
    },
    numeroDonaciones: {
      type: Number,
      default: 0,
    },
    totalDonado: {
      type: Number,
      default: 0,
    },
    profileType: {
      type: String,
      enum: ProfileTypeEnum,
    },
  },
  {
    versionKey: false,
  },
)

export default models.Filantropo || model('Filantropo', FilantropoSchema)
