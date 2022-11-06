import { roleEnum } from './enums/roleEnum'

export interface User {
  role: roleEnum
  correo: string
  contrasena: string
  statusAccount: StatusAccount
}

type StatusAccount = 'verified' | 'unverified'
