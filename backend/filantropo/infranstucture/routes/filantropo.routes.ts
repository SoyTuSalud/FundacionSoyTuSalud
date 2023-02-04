import {NextApiRequest, NextApiResponse} from 'next'

import {validateRol} from '@common/middleware/common.middleware'
import {roleEnum} from '@common/enums/role.enum'

import FilantropoController from '../controller/filantropo.controller'
import {NodeRouter} from "next-connect/dist/types/node";
import {logger, loggerRequest} from "@common/logger/winston.config";
import {loggerMessage} from "@common/enums/logger.enum";


export class FilantropoRoutes {
  constructor(private fintropoController: FilantropoController,
              private router: NodeRouter<NextApiRequest, NextApiResponse>) {}

  public runFilantropoRoutes() {

    const methodName = "runRouterPacientes"
    logger.info(loggerMessage.INICIO + methodName)

    this.router.use(async (req, res, next)=>{
      loggerRequest(req)
      await next()
    });

    //POST Routes
    this.router.post("/api/v1/filantropo", (req, res, next) => {
      validateRol(req, [roleEnum.ADMIN])
      return this.fintropoController.postFilantropo(req, res)
    })
    //GET Routes
    this.router.get("/api/v1/filantropo", (req, res, next) => {
      validateRol(req, [roleEnum.ADMIN])
      return this.fintropoController.getFilantropos(req, res)
    })
    this.router.get("/api/v1/filantropo/find/:id", (req, res, next) => {
      validateRol(req, [roleEnum.ADMIN])
      return this.fintropoController.getFilantropoById(req, res)
    });

  }
}
