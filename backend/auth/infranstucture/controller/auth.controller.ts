import {NextApiRequest, NextApiResponse} from 'next'
import {RequestEntity} from '@common/models/request.value'
import {ResponseEntity} from '@common/models/response.value'

import {AuthDTO} from '@auth/domain/dtos/auth.dto'
import {UserDTO} from '@auth/domain/dtos/user.dto'
import {AuthSignInDTO} from '@auth/domain/dtos/authSignIn.dto'

import {AuthService} from '@auth/application/services/auth.interface.service'
import {validateAuthDTO, validateBodySignIn, validateString} from '@auth/application/utils/auth.utils'
import {ControllerTemplate} from "@common/templates/controller.template";


class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly controllerTemplate: ControllerTemplate ) {}
  public postAuthLogin = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {
    const methodName = "postAuthLogin"
    await this.controllerTemplate.handleController(
      methodName,
      response,
      async () => {
        const requestEntity = new RequestEntity<AuthDTO>(
          validateAuthDTO(request.body),
          request.cookies.Cookie,
          request.headers,
        )

        const responseEntity: ResponseEntity<UserDTO | null> =
          await this.authService.login(requestEntity, response)

        response.status(responseEntity.status.httpStatus).json(responseEntity)
      }
    )
  }

  public postAuthSignIn = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {

    const methodName = "postAuthSignIn"

    await this.controllerTemplate.handleController(
      methodName,
      response,
      async () => {
        const requestEntity = new RequestEntity<AuthSignInDTO>(
          validateBodySignIn(request.body),
          request.cookies.Cookie,
          request.headers,
        )
        const responseEntity: ResponseEntity<null> =
          await this.authService.signIn(requestEntity)
        response.status(responseEntity.status.httpStatus).json(responseEntity)
      })
  }

  public postAuthLoginAdmin = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {

    const methodName = "postAuthLoginAdmin"
    await this.controllerTemplate.handleController(
      methodName,
      response,
      async () => {
        const requestEntity = new RequestEntity<AuthDTO>(
          validateAuthDTO(request.body),
          request.cookies.Cookie,
          request.headers,
        )
        const responseEntity: ResponseEntity<UserDTO | null> =
          await this.authService.loginAdmin(requestEntity, response)
        response.status(responseEntity.status.httpStatus).json(responseEntity)
      })
  }

  public getAuthVerifyRole = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {
    const methodName = "getAuthVerifyRole"

    await this.controllerTemplate.handleController(
      methodName,
      response,
      async () => {

        const { id } = request.query
        const requestEntity = new RequestEntity<string>(
          validateString(id),
          request.cookies.Cookie,
          request.headers,
        )

        const responseEntity: ResponseEntity<null> =
          await this.authService.verifyRoles(requestEntity)
        response.status(responseEntity.status.httpStatus).json(responseEntity)

      })
  }

  public getCheckToken = async (
    request: NextApiRequest,
    response: NextApiResponse,
  ) => {

    const methodName = "getCheckToken"
    await this.controllerTemplate.handleController(
      methodName,
      response,
      async () => {
        const requestEntity = new RequestEntity<null>(
          null,
          request.cookies.token,
          request.headers,
        )

        const responseEntity = await this.authService.checkToken(requestEntity)
        response.status(responseEntity.status.httpStatus).json(responseEntity)
      })
  }

}

export default AuthController
