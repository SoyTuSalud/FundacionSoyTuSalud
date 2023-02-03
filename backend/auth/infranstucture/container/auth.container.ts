import {router} from '@common/router/rounter.interface'

import { authServiceImpl } from '@auth/application/services/auth.impl.service'

import { MongoAuthRespostory } from '@auth/infranstucture/repository/mongo.repository'
import AuthController from '@auth/infranstucture/controller/auth.controller'
import { AuthRoutes } from '@auth/infranstucture/routes/auth.routes'

const authRepository = new MongoAuthRespostory()
export const authService = new authServiceImpl(authRepository)
export const authController = new AuthController(authService)
export const authRoutes = new AuthRoutes(authController, router)
