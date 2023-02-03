import {router} from '@common/router/rounter.interface'

import {PacienteServiceImpl} from '@paciente/application/service/paciente.impl.service'

import PacienteController from '@paciente/infranstucture/controller/paciente.controller'
import {MongoRepository} from '@paciente/infranstucture/repository/mongo.repository'
import {PacientesRoutes} from '@paciente/infranstucture/routes/paciente.routes';

const pacienteRepository = new MongoRepository()
const pacienteService = new PacienteServiceImpl(pacienteRepository)
export const pacienteController = new PacienteController(pacienteService)
export const pacientesRoutes = new PacientesRoutes(pacienteController, router)
