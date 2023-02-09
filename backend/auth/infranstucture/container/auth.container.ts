import {router} from '@common/router/rounter.interface'
import { MongoDbConfig } from '@common/connections/mongo.config'

import { authServiceImpl } from '@auth/application/services/auth.impl.service'

import { MongoAuthRespostory } from '@auth/infranstucture/repository/mongo.repository'
import AuthController from '@auth/infranstucture/controller/auth.controller'
import { AuthRoutes } from '@auth/infranstucture/routes/auth.routes'
import {ServiceTemplate} from "@common/templates/service.template";
import {ControllerTemplate} from "@common/templates/controller.template";

const mongoDbConnection = new MongoDbConfig()
const authRepository = new MongoAuthRespostory()
const serviceTemplate = new ServiceTemplate(mongoDbConnection)
const controllerTemplate = new ControllerTemplate()
export const authService = new authServiceImpl(authRepository, serviceTemplate)
export const authController = new AuthController(authService, controllerTemplate)
export const authRoutes = new AuthRoutes(authController, router)
