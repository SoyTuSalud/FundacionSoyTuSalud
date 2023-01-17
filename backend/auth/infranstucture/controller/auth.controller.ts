import {NextApiRequest, NextApiResponse} from 'next'
import conectarBD from '../../../common/connections/mongo.config'
import {validateError} from '../../../common/functions/functions.common'
import {RequestEntity} from '../../../common/models/request.value'
import {ResponseEntity} from '../../../common/models/response.value'
import {AuthService} from '../../application/services/auth.interface.service'
import {validateAuthDTO, validateBodySignIn, validateString} from '../../application/utils/auth.utils';
import {AuthDTO} from '../../domain/dtos/auth.dto'
import {UserDTO} from '../../domain/dtos/user.dto'
import {AuthSignInDTO} from '../../domain/dtos/authSignIn.dto';

class AuthController {
  constructor(private authService: AuthService) {
    conectarBD()
  }
  public postAuthLogin = async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const requestEntity = new RequestEntity<AuthDTO>(
        validateAuthDTO(request.body),
        request.cookies.Cookie,
        request.headers,
      )

      const responseEntity: ResponseEntity<UserDTO | null> =
        await this.authService.login(requestEntity, response)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public postAuthSignIn = async (request: NextApiRequest, response: NextApiResponse) => {
    try {

      const requestEntity = new RequestEntity<AuthSignInDTO>(
        validateBodySignIn(request.body),
        request.cookies.Cookie,
        request.headers,
      )
      const responseEntity: ResponseEntity<null> =
        await this.authService.signIn(requestEntity)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public postAuthLoginAdmin = async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const requestEntity = new RequestEntity<AuthDTO>(
        validateAuthDTO(request.body),
        request.cookies.Cookie,
        request.headers,
      )
      const responseEntity: ResponseEntity<UserDTO | null> =
        await this.authService.loginAdmin(requestEntity, response)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public getAuthVerifyRole = async (request: NextApiRequest, response: NextApiResponse) => {

    const { id } = request.query
    try {
      const requestEntity = new RequestEntity<string>(
        validateString(id),
        request.cookies.Cookie,
        request.headers,
      )

      const responseEntity: ResponseEntity<null> =
        await this.authService.verifyRoles(requestEntity)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }
}

export default AuthController
