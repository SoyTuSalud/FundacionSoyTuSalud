
import { Auth } from '../../domain/entity/auth.entinty';
import AuthValue from '../../domain/model/auth.model';



export const modelToEntity = <T extends Auth>(auth: T): Auth => {
  return new AuthValue(
    auth.role,
    auth.correo,
    auth.contrasena,
    auth.statusAccount,
  )
}
