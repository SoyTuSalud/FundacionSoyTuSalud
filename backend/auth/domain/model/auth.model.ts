import {Auth} from '@auth/domain/entity/auth.entinty'
import {roleEnum} from '@auth/domain/enums/role.enum'
import {StatusAccountEnum} from '@auth/domain/enums/statusAccount.enum'

class AuthValue implements Auth {
  role: roleEnum
  correo: string
  contrasena: string
  statusAccount?: StatusAccountEnum = StatusAccountEnum.UNVERIFIED
  constructor(
    role: roleEnum,
    correo: string,
    contrasena: string,
    statusAccount?: StatusAccountEnum,
  ) {
    this.role = role
    this.correo = correo
    this.contrasena = contrasena
    this.statusAccount = statusAccount
  }
}

export default AuthValue
