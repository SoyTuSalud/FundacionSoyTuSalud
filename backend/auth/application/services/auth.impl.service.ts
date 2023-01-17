import {getStatusOk, validateError,} from '../../../common/functions/functions.common'
import {RequestEntity} from '../../../common/models/request.value'
import {ResponseEntity} from '../../../common/models/response.value'
import {AuthDTO} from '../../domain/dtos/auth.dto'
import {AuthRepository} from '../../domain/repository/auth.repository'
import {AuthService} from './auth.interface.service'
import bcrypt from 'bcrypt'
import HttpError from '../../../common/models/httpError.value'
import {Status} from '../../../common/models/status.value'
import {ResponseCodes} from '../../../common/enums/responseCodes.Enum'
import jwt from 'jsonwebtoken';
import {UserDTO} from '../../domain/dtos/user.dto';
import {NextApiResponse} from 'next/types';
import {setCookie} from '../utils/tokenSerialize.utils'
import {AuthSignInDTO} from '../../domain/dtos/authSignIn.dto';
import {Auth} from "../../domain/entity/auth.entinty";

export class authServiceImpl implements AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  public async login(request: RequestEntity<AuthDTO>, response: NextApiResponse): Promise<ResponseEntity<UserDTO | null>> {
    try {
      const user:Auth = await this.authRepository.findByEmail(request.body.correo)

      await this.validatePass(user.contrasena, request.body.contrasena)

      const userDto = new UserDTO(user.role, user.correo, user.statusAccount)

      const token = jwt.sign({
        role: userDto.role,
        correo: userDto.correo,
        statusAccount:
        userDto.statusAccount
      }, process.env.ENV_KEY_TOKEN!, {
        expiresIn: '6h',
      })
      
      setCookie(response, 'token', token)

      return new ResponseEntity(userDto, getStatusOk())

    } catch (error: unknown) {
      console.log(error)
      return validateError(error)
    }
  }

  public async signIn(request: RequestEntity<AuthSignInDTO>): Promise<ResponseEntity<null>> {
    try {

      const hash = await bcrypt.hash(request.body.contrasena, 10)

      await this.authRepository.authSignInEmail(request.body, hash)

      return new ResponseEntity(null, getStatusOk())
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async loginAdmin(request: RequestEntity<AuthDTO>, response: NextApiResponse): Promise<ResponseEntity<UserDTO | null>> {

    try {
      const user = await this.authRepository.findByEmail(request.body.correo)

      await this.validatePass(user.contrasena, request.body.contrasena)

      const userDto = new UserDTO(user.role, user.correo, user.statusAccount)

      const token = jwt.sign(userDto, process.env.ENV_KEY_TOKEN!, {
        expiresIn: '6h',
      })
      setCookie(response, 'token', token)

      return new ResponseEntity(userDto, getStatusOk())
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async verifyRoles(request: RequestEntity<string>): Promise<ResponseEntity<null>> {

    try {
      await this.authRepository.authVerifyRoles(request.body)
      return new ResponseEntity(null, getStatusOk())

    } catch (error: unknown) {
      return validateError(error)
    }
  }

  private validatePass = async (userPass: string, requestPass: string) => {
    return await bcrypt.compare(userPass, requestPass)
      .catch((e) => {
        throw new HttpError(
          new Status(
            ResponseCodes.LOGIN_ERROR.httpStatus,
            ResponseCodes.LOGIN_ERROR.code,
            ResponseCodes.LOGIN_ERROR.message,
          ),
        )
      })
  }
}
