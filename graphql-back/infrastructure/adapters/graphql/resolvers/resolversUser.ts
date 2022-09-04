import { User } from '../../../../domain/user/userInterface'
import {
  findAllUsers,
  findAllUsersTuHistoria,
  findUserById
} from '../../mongo/mongoAdapterUser'

export const resolversUsuario = {
  Query: {
    UsuariosTabla: () => {
      return findAllUsers()
    },
    UsuariosTablaTuHistoria: () => {
      return findAllUsersTuHistoria()
    },
    Usuario: (parent: any , args:any ) => {
      return findUserById(args.id)
    },
  },
  Mutation: {},
}
