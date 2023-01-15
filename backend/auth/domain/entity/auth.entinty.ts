import { roleEnum } from "../enums/role.enum"
import { StatusAccountEnum } from "../enums/statusAccount.enum"


export interface Auth {
  role: roleEnum
  correo: string
  contrasena: string
  statusAccount?: StatusAccountEnum
}


