import {NextApiRequest, NextApiResponse} from 'next'
import {NodeRouter} from "next-connect/dist/types/node";
import {logger} from '@common/logger/winston.config'
import {loggerMessage} from "@common/enums/logger.enum";

import AuthController from '@auth/infranstucture/controller/auth.controller'


export class AuthRoutes {

  constructor(private authController: AuthController,
              private router: NodeRouter<NextApiRequest, NextApiResponse>) {}

  public runRouterAuth() {

    const methodName = "runRouterAuth"
    logger.info(loggerMessage.INICIO + methodName)

    this.router.post("/api/v1/auth/login", (req, res, next) => {
      return this.authController.postAuthLogin(req, res)
    });

    this.router.post("/api/v1/auth/loginAdmin", async (req, res, next) => {
      return this.authController.postAuthLoginAdmin(req, res)
    });

    this.router.post("/api/v1/auth/signing", async (req, res, next) => {
      return this.authController.postAuthSignIn(req, res)
    });

    logger.info(loggerMessage.FIN + methodName)
  }

}
