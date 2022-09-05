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
}
