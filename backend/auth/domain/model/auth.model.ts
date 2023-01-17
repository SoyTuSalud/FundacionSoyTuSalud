import {Auth} from '../entity/auth.entinty'
import {roleEnum} from '../enums/role.enum'
import {StatusAccountEnum} from '../enums/statusAccount.enum'

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
