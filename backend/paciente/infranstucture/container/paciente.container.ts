import { PacienteServiceImpl } from '../../application/service/paciente.impl.service'
import PacienteController from '../controller/paciente.controller'
import { MongoRepository } from '../repository/mongo.repository'
import { PacientesRoutes } from '../routes/paciente.routes';

const pacienteRepository = new MongoRepository()
const pacienteService = new PacienteServiceImpl(pacienteRepository)
export const pacienteController = new PacienteController(pacienteService)
export const pacientesRoutes = new PacientesRoutes(pacienteController)
