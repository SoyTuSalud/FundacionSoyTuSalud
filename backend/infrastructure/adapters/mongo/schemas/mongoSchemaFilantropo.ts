import { Schema, model, models } from 'mongoose'
import { TipoDocumentoEnum } from '../../../../domain/commons/enums/tipoDocumentoEnum'
import { filantropo } from '../../../../domain/filantropos/filantropoInterface'

const FilantropoSchema = new Schema<filantropo>({
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
    validate: /^\d/,
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
},
{
  versionKey: false
}
)

export default models.Filantropo || model('Filantropo', FilantropoSchema)
