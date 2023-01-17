import {filantropoServiceImpl} from '../../application/service/filantropo.impl.service'
import FilantropoController from '../controller/filantropo.controller'
import {MongoRepository} from '../repository/mongo.repository'
import {FilantropoRoutes} from '../routes/filantropo.routes';

const filantropoRepository = new MongoRepository()
const filantropoService = new filantropoServiceImpl(filantropoRepository)
export const filantropoController = new FilantropoController(filantropoService)
export const filantropoRoutes = new FilantropoRoutes(filantropoController)
