import {Auth} from '@auth/domain/entity/auth.entinty';
import {AuthSignInDTO} from '@auth/domain/dtos/authSignIn.dto';

export interface AuthRepository {
    findByEmail(correo: string): Promise<Auth>
    authLoginAdmin(correo: string): Promise<Auth>
    authSignInEmail(auth: AuthSignInDTO, hash: string): Promise<void>
    authVerifyRoles(token: string): Promise<void>
}
  