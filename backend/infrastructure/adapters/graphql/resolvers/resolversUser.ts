import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import {
  findAllUsers,
  findAllUsersTuHistoria,
  findUserById,
  createUserTuHistoria,
  createUser,
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
  },
  Mutation: {
    crearUsuario: async (parent: any, args: any) => {
      return await createUser(args)
    },
    tuHistoria: async (parent: any, args: any) => {
      return await createUserTuHistoria(args)
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
