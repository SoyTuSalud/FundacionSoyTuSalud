import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import { login, registro, verifyRoles, usersTablaByRol, loginAdmin } from '../../mongo/mongoAdapterUser'

export const resolversUser = {
  Query: {
    login: async (parent: any, args: any, context: any) => {
      return await login(args, context)
    },
    loginAdmin: async (parent: any, args: any, context: any) => {
      return await loginAdmin(args, context)
    },
    usersTablaByRol: async(parent: any, args: any, { payload }: any) => {
      return await usersTablaByRol(payload)
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
  UnionUserList:{
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
