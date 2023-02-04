import {router} from '@common/router/rounter.interface'

import {filantropoServiceImpl} from '@filantropo/application/service/filantropo.impl.service'

import FilantropoController from '@filantropo/infranstucture/controller/filantropo.controller'
import {MongoRepository} from '@filantropo/infranstucture/repository/mongo.repository'
import {FilantropoRoutes} from '@filantropo/infranstucture/routes/filantropo.routes';

const filantropoRepository = new MongoRepository()
export const filantropoService = new filantropoServiceImpl(filantropoRepository)
export const filantropoController = new FilantropoController(filantropoService)
export const filantropoRoutes = new FilantropoRoutes(filantropoController, router)
