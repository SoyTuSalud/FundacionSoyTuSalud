import {Document, model, Schema, models} from 'mongoose';
import {Auth} from '../../domain/entity/auth.entinty';
import {roleEnum} from '../../domain/enums/role.enum';
import {StatusAccountEnum} from '../../domain/enums/statusAccount.enum';


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
        required: true
    }
  })



  export default models.Auth || model<AuthDoc>('Auth', AuthSchema)
  