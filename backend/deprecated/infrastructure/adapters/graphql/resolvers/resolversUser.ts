import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import {
  login,
  verifyRoles,
  loginAdmin,
  verifyAccount,
} from '../../mongo/mongoAdapterUser'

export const resolversUser = {
  Query: {
    login: async (parent: any, args: any, context: any) => {
      return await login(args, context)
    },
    loginAdmin: async (parent: any, args: any, context: any) => {
      return await loginAdmin(args, context)
    },
    verifyRoles: async (parent: any, args: any, { payload }: any) => {
      return await verifyRoles(payload)
    },
  },

  Mutation: {
    verifyAccount: async (parent: any, args: any) => {
      return await verifyAccount(args)
    },
  },

  UnionUser: {
    __resolveType(obj: any) {
      return obj.status.code === ResponseCodes.SUCCESS
        ? 'ResponseUser'
        : 'ResponseUserError'
    },
  },
  UnionUserList: {
    __resolveType(obj: any) {
      return obj.status.code === ResponseCodes.SUCCESS
        ? 'ResponseUserList'
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
