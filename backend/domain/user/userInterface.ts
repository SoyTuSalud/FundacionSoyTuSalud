
import { roleEnum } from './enums/roleEnum'

export interface User {
  role: roleEnum
  correo: string
  contrasena: string
}
