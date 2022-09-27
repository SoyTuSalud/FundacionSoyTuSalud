import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import { login, registro, verifyRoles } from '../../mongo/mongoAdapterUser'

export const resolversUser = {
  Query: {
    login: async (parent: any, args: any, context: any) => {
      return await login(args, context)
    },

    verifyRoles: async (parent: any, args: any, { payload }: any) => {
      return await verifyRoles(payload)
    },
  },
  Mutation: {
    registro: async (parent: any, args: any) => {
      return await registro(args)
    },
  },
  UnionUser: {
    __resolveType(obj: any) {
      return obj.status.code === ResponseCodes.SUCCESS
        ? 'ResponseUser'
        : 'ResponseUserError'
    },
  },

  UnionToken: {
    __resolveType(obj: any) {
      return obj.status.code === ResponseCodes.SUCCESS
        ? 'TokenResponse'
        : 'ResponseUserError'
    },
  },
}
