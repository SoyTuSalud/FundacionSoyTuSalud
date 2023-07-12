import {router} from '@common/router/rounter.interface'

import {RepresentanteServiceImpl} from '../../application/service/representante.impl.service'
import RepresenanteController from '../controller/representante.controller'
import {MongoRepository} from '../repository/mongo.repository'
import {RepresentanteRoutes} from '../routes/representante.routes';

const representanteReposity = new MongoRepository()
const representanteService = new RepresentanteServiceImpl(representanteReposity)
export const representanteController = new RepresenanteController(representanteService)
export const representanteRoutes = new RepresentanteRoutes(representanteController, router)
