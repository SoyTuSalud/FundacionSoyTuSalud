import { NextApiResponse } from 'next/types'

import { RequestEntity } from '@common/models/request.value'
import { ResponseEntity } from '@common/models/response.value'

import { AuthDTO } from '@auth/domain/dtos/auth.dto'
import { UserDTO } from '@auth/domain/dtos/user.dto'
import { AuthSignInDTO } from '@auth/domain/dtos/authSignIn.dto'

export interface AuthService {
  login(
    request: RequestEntity<AuthDTO>,
    response: NextApiResponse,
  ): Promise<ResponseEntity<UserDTO | null>>
  signIn(request: RequestEntity<AuthSignInDTO>): Promise<ResponseEntity<null>>
  loginAdmin(
    request: RequestEntity<AuthDTO>,
    response: NextApiResponse,
  ): Promise<ResponseEntity<UserDTO | null>>
  verifyRoles(request: RequestEntity<string>): Promise<ResponseEntity<null>>
  checkToken(request: RequestEntity<null>): Promise<ResponseEntity<null>>
}
