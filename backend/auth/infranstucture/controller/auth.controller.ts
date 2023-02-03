import { NextApiRequest, NextApiResponse } from 'next'

import conectarBD from '@common/connections/mongo.config'
import { validateError } from '@common/functions/functions.common'
import { RequestEntity } from '@common/models/request.value'
import { ResponseEntity } from '@common/models/response.value'
import {logger} from "@common/logger/winston.config";
import {loggerMessage} from "@common/enums/logger.enum";

import { AuthDTO } from '@auth/domain/dtos/auth.dto'
import { UserDTO } from '@auth/domain/dtos/user.dto'
import { AuthSignInDTO } from '@auth/domain/dtos/authSignIn.dto'

import { AuthService } from '@auth/application/services/auth.interface.service'
import {validateAuthDTO, validateBodySignIn, validateString} from '@auth/application/utils/auth.utils'


class AuthController {
  constructor(private authService: AuthService) {
    conectarBD()
  }
  public postAuthLogin = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {
    const methodName = "postAuthLogin"
    logger.info(loggerMessage.INICIO + methodName)

    try {
      const requestEntity = new RequestEntity<AuthDTO>(
        validateAuthDTO(request.body),
        request.cookies.Cookie,
        request.headers,
      )

      const responseEntity: ResponseEntity<UserDTO | null> =
        await this.authService.login(requestEntity, response)

      logger.info(loggerMessage.FIN + methodName)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      logger.info(loggerMessage.ERROR + methodName)
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public postAuthSignIn = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {

    const methodName = "postAuthSignIn"
    logger.info(loggerMessage.INICIO + methodName)

    try {
      const requestEntity = new RequestEntity<AuthSignInDTO>(
        validateBodySignIn(request.body),
        request.cookies.Cookie,
        request.headers,
      )
      const responseEntity: ResponseEntity<null> =
        await this.authService.signIn(requestEntity)

      logger.info(loggerMessage.FIN + methodName)
      response.status(responseEntity.status.httpStatus).json(responseEntity)

    } catch (error: unknown) {
      const responseEntity = validateError(error)
      logger.info(loggerMessage.ERROR + methodName)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public postAuthLoginAdmin = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {

    const methodName = "postAuthLoginAdmin"
    logger.info(loggerMessage.INICIO + methodName)

    try {
      const requestEntity = new RequestEntity<AuthDTO>(
        validateAuthDTO(request.body),
        request.cookies.Cookie,
        request.headers,
      )
      const responseEntity: ResponseEntity<UserDTO | null> =
        await this.authService.loginAdmin(requestEntity, response)

      logger.info(loggerMessage.FIN + methodName)

      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      logger.info(loggerMessage.ERROR + methodName)
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public getAuthVerifyRole = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {

    const methodName = "getAuthVerifyRole"
    logger.info(loggerMessage.INICIO + methodName)

    const { id } = request.query
    try {
      const requestEntity = new RequestEntity<string>(
        validateString(id),
        request.cookies.Cookie,
        request.headers,
      )

      const responseEntity: ResponseEntity<null> =
        await this.authService.verifyRoles(requestEntity)

      logger.info(loggerMessage.FIN + methodName)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      logger.info(loggerMessage.ERROR + methodName)
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }

  public getCheckToken = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {

    const methodName = "getCheckToken"
    logger.info(loggerMessage.INICIO + methodName)

    try {
      const requestEntity = new RequestEntity<null>(
        null,
        request.cookies.token,
        request.headers,
      )

      const responseEntity = await this.authService.checkToken(requestEntity)

      logger.info(loggerMessage.FIN + methodName)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    } catch (error: unknown) {
      logger.info(loggerMessage.ERROR + methodName)
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }
  }
}

export default AuthController
