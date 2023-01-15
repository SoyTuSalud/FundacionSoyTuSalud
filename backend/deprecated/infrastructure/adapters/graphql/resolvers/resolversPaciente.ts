import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../../domain/commons/responseEntity'
import { Status } from '../../../../domain/commons/StatusInterface'
import { roleEnum } from '../../../../domain/user/enums/roleEnum'
import {
  createPacienteTuHistoria,
  findAllPacientes,
  findAllPacientesTuHistoria,
  findPacienteById,
  createPaciente,
} from '../../mongo/mongoAdapterPaciente'

export const resolversPaciente = {
  Query: {
    PacientesTabla: async (parent: any, args: any, { payload }: any) => {
      if (payload?.role === roleEnum.ADMIN) {
        return await findAllPacientes()
      }
      const status: Status = new Status(
        ResponseCodes.PERMISSION_ERROR,
        'Acceso denegado',
      )
      return new ResponseEntity(null, status)
    },

    PacientesTablaTuHistoria: async (
      parent: any,
      args: any,
      { payload }: any,
    ) => {
      if (payload?.role === roleEnum.ADMIN) {
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
      if (payload?.role === roleEnum.ADMIN) {
        return await findPacienteById(args._id)
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
    tuHistoria: async (parent: any, args: any, { payload }: any) => {
      if (payload?.role === roleEnum.PACIENTE) {
        return await createPacienteTuHistoria(args, payload)
      }
      const status: Status = new Status(
        ResponseCodes.PERMISSION_ERROR,
        'Acceso denegado',
      )
      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    },
    crearPaciente: async (parent: any, args: any, context: any) => {
      return await createPaciente(args, context)
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
