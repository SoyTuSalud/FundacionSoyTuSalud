import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import {
  findAllUsers,
  findAllUsersTuHistoria,
  findUserById,
  createUserTuHistoria,
  createUser,
  loginUsuario,
} from '../../mongo/mongoAdapterUser'

export const resolversUsuario = {
  Query: {
    UsuariosTabla: async () => {
      return await findAllUsers()
    },
    UsuariosTablaTuHistoria: async () => {
      return await findAllUsersTuHistoria()
    },
    Usuario: async (parent: any, args: any) =>  {
      return await findUserById(args.uid)
    },
    LoginUsuario: async (parent: any, args: any) =>  {
      return await loginUsuario(args)
    },
  },
  Mutation: {
    crearUsuario: async (parent: any, args: any) => {
      return await createUser(args)
    },
    tuHistoria: async (parent: any, args: any, context: any) => {
      return await createUserTuHistoria(args, context)
    },
  },
  UnionUsuario: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseUsuario" :
                  "ResponseUsuarioError" 
    }
  },
  UnionUsuarioList: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseUsuarioList" :
                  "ResponseUsuarioError" 
    }
  }
}
