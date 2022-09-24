import { Schema } from 'mongoose'
import { roleEnum } from './enums/roleEnum'

export interface AuthInterface {
  id: Schema.Types.ObjectId
  role: roleEnum
  email: string
  password: string
}
