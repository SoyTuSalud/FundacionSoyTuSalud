import { Auth } from '../entity/auth.entinty';

export interface AuthRepository {
    authEmail(email: string): Promise<Auth>
}
  