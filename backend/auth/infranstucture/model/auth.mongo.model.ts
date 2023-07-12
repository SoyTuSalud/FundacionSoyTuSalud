import {Document, model, Model, models, Schema} from 'mongoose'

import {Auth} from '@auth/domain/entity/auth.entinty'
import {roleEnum} from '@auth/domain/enums/role.enum'
import {StatusAccountEnum} from '@auth/domain/enums/statusAccount.enum'

export interface AuthDoc extends Auth, Document {
  role: roleEnum
  correo: string
  contrasena: string
  statusAccount: StatusAccountEnum
}

const AuthSchema = new Schema<AuthDoc>({
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
    required: true,
  },
})

export default (models.User as Model<AuthDoc, {}, {}, {}, any>) || model<AuthDoc>('User', AuthSchema)
