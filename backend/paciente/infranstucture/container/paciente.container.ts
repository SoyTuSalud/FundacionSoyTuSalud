import {router} from '@common/router/rounter.interface'

import {PacienteServiceImpl} from '@paciente/application/service/paciente.impl.service'

import PacienteController from '@paciente/infranstucture/controller/paciente.controller'
import {MongoRepository} from '@paciente/infranstucture/repository/mongo.repository'
import {PacientesRoutes} from '@paciente/infranstucture/routes/paciente.routes';
import {ServiceTemplate} from "@common/templates/service.template";
import {ControllerTemplate} from "@common/templates/controller.template";
import {MongoDbConfig} from "@common/connections/mongo.config";

const pacienteRepository = new MongoRepository()
const mongoDbConnection = new MongoDbConfig()
const serviceTemplate = new ServiceTemplate(mongoDbConnection)
const controllerTemplate = new ControllerTemplate()
export const pacienteService = new PacienteServiceImpl(pacienteRepository, serviceTemplate)
export const pacienteController = new PacienteController(pacienteService, controllerTemplate)
export const pacientesRoutes = new PacientesRoutes(pacienteController, router)
