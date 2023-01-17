import {Auth} from '../entity/auth.entinty';
import {AuthDTO} from '../dtos/auth.dto';
import {AuthSignInDTO} from '../dtos/authSignIn.dto';

export interface AuthRepository {
    findByEmail(correo: string): Promise<Auth>
    authLoginAdmin(authdto: AuthDTO): Promise<Auth>
    authSignInEmail(auth: AuthSignInDTO, hash: string): Promise<void>
    authVerifyRoles(token: string): Promise<void>
}
  