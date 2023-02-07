import {NextApiRequest, NextApiResponse} from 'next'
import {validateRol} from '@common/middleware/common.middleware'
import RepresenanteController from '../controller/representante.controller'
import {roleEnum} from '@common/enums/role.enum'
import {NodeRouter} from "next-connect/dist/types/node";
import {logger, loggerRequest} from "@common/logger/winston.config";
import {loggerMessage} from "@common/enums/logger.enum";

export class RepresentanteRoutes {
  constructor(private representanteController: RepresenanteController,
              private router: NodeRouter<NextApiRequest, NextApiResponse>) {}

  public runRouterRepresentante() {

    const methodName = "runRouterRepresentante"
    logger.info(loggerMessage.INICIO + methodName)

    this.router.use(async (req, res, next)=>{
      loggerRequest(req)
      await next()
    });

    //POST methods
    this.router.post("/api/v1/representante", (req, res, next) => {
      return this.representanteController.postRepresentante(req, res)
    })

    //GET methods
    this.router.get("/api/v1/representante", (req, res, next) => {
      validateRol(req, [roleEnum.ADMIN])
      return this.representanteController.getRepresentantes(req, res)
    })

    this.router.get("/api/v1/representante/:id", (req, res, next) => {
      validateRol(req, [roleEnum.ADMIN])
      return this.representanteController.getRepresentanteById(req, res)
    });

    logger.info(loggerMessage.FIN + methodName)
  }
}