import { crearServicio } from '../../mongo/mongoAdapterServicios'

export const resolversServicios = {
  Mutation: {
    crearServicio: async (parent: any, args: any) => {
      return await crearServicio(args)
    },
  },
}
