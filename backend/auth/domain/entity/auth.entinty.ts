import {roleEnum} from "@auth/domain/enums/role.enum"
import {StatusAccountEnum} from "@auth/domain/enums/statusAccount.enum"


export interface Auth {
  role: roleEnum
  correo: string
  contrasena: string
  statusAccount?: StatusAccountEnum
}


