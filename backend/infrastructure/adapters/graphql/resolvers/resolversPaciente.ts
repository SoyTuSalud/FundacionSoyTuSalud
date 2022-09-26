import { ValidationError } from 'apollo-server-micro'
import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../../domain/commons/responseEntity'
import { Status } from '../../../../domain/commons/StatusInterface'
import { roleEnum } from '../../../../domain/user/enums/roleEnum'
import {
  findAllPacientes,
  findAllPacientesTuHistoria,
  findPacienteById,
  createPacienteTuHistoria,
} from '../../mongo/mongoAdapterPaciente'

export const resolversPaciente = {
  Query: {
    PacientesTabla: async (parent: any, args: any, { payload }: any) => {
      if (payload.role === roleEnum.ADMIN) {
        return await findAllPacientes()
      }
      const status: Status = new Status(
        ResponseCodes.PERMISSION_ERROR,
        'Acceso denegado',
      )
      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    },

    PacientesTablaTuHistoria: async (
      parent: any,
      args: any,
      { payload }: any,
    ) => {
      if (payload.role === roleEnum.ADMIN) {
        return await findAllPacientesTuHistoria()
      }
      const status: Status = new Status(
        ResponseCodes.PERMISSION_ERROR,
        'Acceso denegado',
      )
      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    },

    Paciente: async (parent: any, args: any, { payload }: any) => {
      if (payload.role === roleEnum.ADMIN) {
        return await findPacienteById(args.uid)
      }
      const status: Status = new Status(
        ResponseCodes.PERMISSION_ERROR,
        'Acceso denegado',
      )
      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
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
