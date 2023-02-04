import { Schema, model, models } from 'mongoose'
import { User } from '../../../../domain/user/userInterface'
import { roleEnum } from '../../../../domain/user/enums/roleEnum'
import { TipoDocumentoEnum } from '../../../../domain/commons/enums/tipoDocumentoEnum'

const UserSchema = new Schema<User>({
  correo: {
    type: String,
    unique: true,
    validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  role: {
    type: String,
    enum: roleEnum,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  statusAccount: {
    type: String,
    enum: {
      values: ['verified', 'unverified'],
      message: '{VALUE} no es un estado de cuenta permitido',
    },
    default: 'unverified',
  },
})

export default models.User || model('User', UserSchema)