import {router} from '@common/router/rounter.interface'

import {filantropoServiceImpl} from '@filantropo/application/service/filantropo.impl.service'

import FilantropoController from '@filantropo/infranstucture/controller/filantropo.controller'
import {MongoRepository} from '@filantropo/infranstucture/repository/mongo.repository'
import {FilantropoRoutes} from '@filantropo/infranstucture/routes/filantropo.routes';
import {MongoDbConfig} from "@common/connections/mongo.config";
import {ServiceTemplate} from "@common/templates/service.template";
import {ControllerTemplate} from "@common/templates/controller.template";

const filantropoRepository = new MongoRepository()
const mongoDbConnection = new MongoDbConfig()
const serviceTemplate = new ServiceTemplate(mongoDbConnection)
const controllerTemplate = new ControllerTemplate()

export const filantropoService = new filantropoServiceImpl(filantropoRepository, serviceTemplate)
export const filantropoController = new FilantropoController(filantropoService, controllerTemplate)
export const filantropoRoutes = new FilantropoRoutes(filantropoController, router)
