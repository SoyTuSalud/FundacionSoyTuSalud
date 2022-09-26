import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import { login, registro, verifyAdmin } from '../../mongo/mongoAdapterUser'

export const resolversUser = {
  Query: {
    login: async (parent: any, args: any) => {
      return await login(args)
    },

    verifyAdmin: async (parent: any, args: any, { payload }: any) => {
      return await verifyAdmin(payload)
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
