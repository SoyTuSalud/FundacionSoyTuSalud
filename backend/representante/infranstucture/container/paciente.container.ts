import {RepresentanteServiceImpl} from '../../application/service/representante.impl.service'
import PacienteController from '../controller/paciente.controller'
import {MongoRepository} from '../repository/mongo.repository'
import {PacientesRoutes} from '../routes/representante.routes';

const pacienteRepository = new MongoRepository()
const pacienteService = new RepresentanteServiceImpl(pacienteRepository)
export const pacienteController = new PacienteController(pacienteService)
export const pacientesRoutes = new PacientesRoutes(pacienteController)
