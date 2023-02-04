import {Document, Model, model, models, Schema} from 'mongoose'

import {TipoDocumentoEnum} from "@common/enums/tipoDocumento.enum";

import {Filantropo} from "@filantropo/domain/entity/filantropo.entity";
import {ProfileTypeEnum} from "@filantropo/domain/enum/profileTypeEnum";



export interface FilantropoDoc extends Filantropo, Document {
  tipoDocumento: TipoDocumentoEnum
  identificacion: string
  nombre: string
  apellidos: string
  celular: string
  correo: string
  numeroDonaciones: number
  totalDonado: number
  pacientesApoyados: string[]
  profileType: ProfileTypeEnum
}

const FilantropoSchema = new Schema<FilantropoDoc>(
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
    apellidos: {
      type: String,
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
    numeroDonaciones: {
      type: Number,
      default: 0,
    },
    totalDonado: {
      type: Number,
      default: 0,
    },
    pacientesApoyados:{
      type: [String],
    },
    profileType: {
      type: String,
      enum: ProfileTypeEnum,
      default: ProfileTypeEnum.PUBLIC
    },
  },
  {
    versionKey: false,
  },
)

export default (models.Filantropo as Model<FilantropoDoc, {}, {}, {}, any>) || model<FilantropoDoc>('Filantropo', FilantropoSchema)