import {NextApiRequest, NextApiResponse} from 'next'
import {NodeRouter} from "next-connect/dist/types/node";

import {validateRol} from '@common/middleware/common.middleware'
import PacienteController from '../controller/paciente.controller'
import {roleEnum} from '@common/enums/role.enum'
import {logger, loggerRequest} from "@common/logger/winston.config";
import {loggerMessage} from "@common/enums/logger.enum";


export class PacientesRoutes {
  constructor(private pacienteController: PacienteController,
              private router: NodeRouter<NextApiRequest, NextApiResponse>) {}

  public runRouterPacientes() {

    const methodName = "runRouterPacientes"
    logger.info(loggerMessage.INICIO + methodName)

    this.router.use(async (req, res, next)=>{
        loggerRequest(req)
        await next()
    });

    //POST methods
    this.router.post("/api/v1/pacientes", (req, res, next) => {
      return this.pacienteController.postPacientes(req, res)
    })

    //GET methods
    this.router.get("/api/v1/pacientes", (req, res, next) => {
      return this.pacienteController.getPacientes(req, res)
    })

    this.router.get("/api/v1/pacientes/historia", (req, res, next) => {
      validateRol(req, [roleEnum.ADMIN])
      return this.pacienteController.getPacientesTuHistoria(req, res)
    });

    this.router.get("/api/v1/pacientes/find/:id", (req, res, next) => {
      validateRol(req, [roleEnum.ADMIN])
      return this.pacienteController.getPacientesById(req, res)
    });

    //PATCH METHODS
    this.router.patch("/api/v1/pacientes", (req, res, next) => {
      validateRol(req, [roleEnum.PACIENTE, roleEnum.ADMIN])
      return this.pacienteController.patchPacientes(req, res)
    });

    logger.info(loggerMessage.FIN + methodName)
  }
}