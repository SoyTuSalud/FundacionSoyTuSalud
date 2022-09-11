import { crearFilantropo, filantropo, filantroposTabla } from '../../mongo/mongoAdapterFilantropo';

export const resolversFilantropos = {
  Query: {
    Filantropos: async () => {
      return await filantroposTabla()
    },
    Filantropo: async (parent: any, args : any) => {
      return await filantropo(args._id)
    },
  },
  Mutation: {
    crearFilantropo: async (parent: any, args: any) => {
      return await crearFilantropo(args)
    },
  },
}
