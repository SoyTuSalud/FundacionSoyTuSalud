import { Schema, model, models } from 'mongoose'
import { AuthInterface } from '../../../../domain/auth/authInterface'
import { roleEnum } from '../../../../domain/auth/enums/roleEnum'

const AuthSchema = new Schema<AuthInterface>({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  role: {
    enum: roleEnum,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  password: {
    type: String,
    required: true,
  },
})

export default models.Auth || model('Auth', AuthSchema)
