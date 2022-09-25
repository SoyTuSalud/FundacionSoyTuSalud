import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import {
  findAllPacientes,
  findAllPacientesTuHistoria,
  findPacienteById,
  createPacienteTuHistoria,
} from '../../mongo/mongoAdapterPaciente'

export const resolversPaciente = {
  Query: {
    PacientesTabla: async () => {
      return await findAllPacientes()
    },
    PacientesTablaTuHistoria: async () => {
      return await findAllPacientesTuHistoria()
    },
    Paciente: async (parent: any, args: any) => {
      return await findPacienteById(args.uid)
    },
  },
  Mutation: {
    tuHistoria: async (parent: any, args: any, context: any) => {
      return await createPacienteTuHistoria(args, context)
    },
  },
  UnionPaciente: {
    __resolveType(obj: any) {
      return obj.status.code === ResponseCodes.SUCCESS
        ? 'ResponsePaciente'
        : 'ResponsePacienteError'
    },
  },
  UnionPacienteList: {
    __resolveType(obj: any) {
      return obj.status.code === ResponseCodes.SUCCESS
        ? 'ResponsePacienteList'
        : 'ResponsePacienteError'
    },
  },
}
