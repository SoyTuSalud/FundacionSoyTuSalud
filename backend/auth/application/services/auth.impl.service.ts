import {compare, hash} from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextApiResponse } from 'next/types'

import {getStatusOk, validateError} from '@common/functions/functions.common'
import {logger} from "@common/logger/winston.config";
import {loggerMessage} from "@common/enums/logger.enum";
import { RequestEntity } from '@common/models/request.value'
import { ResponseEntity } from '@common/models/response.value'
import HttpError from '@common/models/httpError.value'
import { Status } from '@common/models/status.value'
import { ResponseCodes } from '@common/enums/responseCodes.Enum'

import {nextCreation} from "@/backend/crossMovements/authCross/auth.cross";

import { AuthDTO } from '@auth/domain/dtos/auth.dto'
import { AuthRepository } from '@auth/domain/repository/auth.repository'
import { AuthSignInDTO } from '@auth/domain/dtos/authSignIn.dto'
import { Auth } from '@auth/domain/entity/auth.entinty'
import { UserDTO } from '@auth/domain/dtos/user.dto'

import { AuthService } from '@auth/application/services/auth.interface.service'
import { setCookie } from '@auth/application/utils/tokenSerialize.utils'



export class authServiceImpl implements AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  public async login(
    request: RequestEntity<AuthDTO>,
    response: NextApiResponse,
  ): Promise<ResponseEntity<UserDTO | null>> {

    const methodName = "login"
    logger.info(loggerMessage.INICIO + methodName)

    try {
      const user: Auth = await this.authRepository.findByEmail(
        request.body.correo,
      )

      await this.validatePass(user.contrasena, request.body.contrasena)

      const userDto = new UserDTO(user.role, user.correo, user.statusAccount)

      const token = jwt.sign(
        {
          role: userDto.role,
          correo: userDto.correo,
          statusAccount: userDto.statusAccount,
        },
        process.env.ENV_KEY_TOKEN!,
        {
          expiresIn: '6h',
        },
      )
      userDto.token = token

      setCookie(response, 'token', token,{
        path: "/",
      })

      logger.info(loggerMessage.FIN + methodName)
      return new ResponseEntity(userDto, getStatusOk())
    } catch (error: unknown) {
      logger.info(loggerMessage.ERROR + methodName)
      console.log(error)
      return validateError(error)
    }
  }

  public async signIn(
    request: RequestEntity<AuthSignInDTO>,
  ): Promise<ResponseEntity<null>> {

    const methodName = "signIn"
    logger.info(loggerMessage.INICIO + methodName)

    try {
      const hashPass = await hash(request.body.contrasena, 10)

      await this.authRepository.authSignInEmail(request.body, hashPass)

      await nextCreation(request)
      logger.info(loggerMessage.FIN + methodName)

      return new ResponseEntity(null, getStatusOk())
    } catch (error: unknown) {
      logger.info(loggerMessage.ERROR + methodName)
      return validateError(error)
    }
  }

  public async loginAdmin(
    request: RequestEntity<AuthDTO>,
    response: NextApiResponse,
  ): Promise<ResponseEntity<UserDTO | null>> {

    const methodName = "loginAdmin"
    logger.info(loggerMessage.INICIO + methodName)

    try {
      const user = await this.authRepository.authLoginAdmin(request.body.correo)
      await this.validatePass(user.contrasena, request.body.contrasena)

      const userDto = new UserDTO(user.role, user.correo, user.statusAccount)

      const token = jwt.sign(
        {
          role: userDto.role,
          correo: userDto.correo,
          statusAccount: userDto.statusAccount,
        },
        process.env.ENV_KEY_TOKEN!,
        {
          expiresIn: '6h',
        },
      )
      userDto.token = token

      setCookie(response, 'token', token,{
        path: "/",
      })

      logger.info(loggerMessage.FIN + methodName)

      return new ResponseEntity(userDto, getStatusOk())
    } catch (error: unknown) {
      logger.info(loggerMessage.ERROR + methodName)
      return validateError(error)
    }
  }

  public async verifyRoles(
    request: RequestEntity<string>,
  ): Promise<ResponseEntity<null>> {
    try {
      await this.authRepository.authVerifyRoles(request.body)
      return new ResponseEntity(null, getStatusOk())
    } catch (error: unknown) {
      return validateError(error)
    }
  }

  public async checkToken(
    req: RequestEntity<null>,
  ): Promise<ResponseEntity<null>> {

    const methodName = "checkToken"
    logger.info(loggerMessage.INICIO + methodName)

    const token: string = req?.cookies || ''

    if (!token) {
      throw new HttpError(
        new Status(
          ResponseCodes.BAD_REQUEST.httpStatus,
          ResponseCodes.BAD_REQUEST.code,
          ResponseCodes.BAD_REQUEST.message,
        ),
      )
    }

    const envJWT: any = process.env.ENV_KEY_TOKEN

    try {
      const { correo }: any = jwt.verify(token, envJWT)

      await this.authRepository.findByEmail(correo)

      logger.info(loggerMessage.FIN + methodName)

      return new ResponseEntity(null, getStatusOk())
    } catch (error) {
      if (error instanceof HttpError) {
        logger.info(loggerMessage.ERROR + methodName)
        return new ResponseEntity(null, error.status)
      }
      logger.info(loggerMessage.ERROR + methodName)
      return new ResponseEntity(
        null,
        new Status(
          ResponseCodes.EXPIRED_TOKEN.httpStatus,
          ResponseCodes.EXPIRED_TOKEN.code,
          ResponseCodes.EXPIRED_TOKEN.message,
        ),
      )
    }
  }

  private validatePass = async (userPass: string, requestPass: string) => {
    const isPasswordMatching: boolean = await compare(requestPass, userPass)

    const methodName = "validatePass"
    logger.info(loggerMessage.INICIO + methodName)

    if(!isPasswordMatching){
      logger.info(loggerMessage.ERROR + methodName)
      throw new HttpError(
        new Status(
          ResponseCodes.LOGIN_ERROR.httpStatus,
          ResponseCodes.LOGIN_ERROR.code,
          ResponseCodes.LOGIN_ERROR.message,
        ),
      )

    }
    logger.info(loggerMessage.FIN + methodName)
  }
}