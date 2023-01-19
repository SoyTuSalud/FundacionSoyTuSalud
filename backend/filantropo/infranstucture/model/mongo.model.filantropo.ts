import { Document, model, models, Schema } from 'mongoose'
import {Filantropo} from "../../domain/entity/filantropo.entity";
import {TipoDocumentoEnum} from "../../domain/enum/tipoDocumento.enum";
import {ProfileTypeEnum} from "../../domain/enum/profileTypeEnum";



export interface FilantropoDoc extends Filantropo, Document {
  tipoDocumento: TipoDocumentoEnum
  identificacion: string
  nombre: string
  apellidos: string
  celular: string
  direccion: string
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
    direccion:{
      type: String,
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

const filtranpoModel = model<FilantropoDoc>('Filantropo', FilantropoSchema)

export default (models.Filantropo as typeof  filtranpoModel)|| filtranpoModel
