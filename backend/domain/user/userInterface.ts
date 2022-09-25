import { TipoDocumentoEnum } from '../commons/enums/tipoDocumentoEnum'
import { roleEnum } from './enums/roleEnum'

export interface User {
  role: roleEnum
  identificacion: string
  nombre: string
  apellidos: string
  tipoDocumento: TipoDocumentoEnum
  celular: string
  correo: string
  contrasena: string
}
