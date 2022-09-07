import { crearServicio, servicio, serviciosTabla } from '../../mongo/mongoAdapterServicios'

export const resolversServicios = {
  Query: {
    serviciosTabla : async () =>{
      return await serviciosTabla()
    },
    servicio: async (parent: any, args: any) =>{
      return await servicio(args._id)
    }
  },
  Mutation: {
    crearServicio: async (parent: any, args: any) => {
      return await crearServicio(args)
    },
  },
}
