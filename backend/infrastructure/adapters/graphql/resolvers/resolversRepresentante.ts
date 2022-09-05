import { Servicios } from '../../../../domain/servicios/serviciosInterface';
import {
  serviciosTabla,
  servicio,
  crearRepresentante,
} from '../../mongo/mongoAdapterRepresentante'
import { crearServicio } from '../../mongo/mongoAdapterServicios';

export const resolversRepresentante = {
  Query: {
    ServiciosTabla: async () => {
      return await serviciosTabla()
    },
    Servicio: async (parent: any, args: any) => {
      return await servicio(args._id)
    },
  },
  Mutation: {
    CrearRepresentante: async (parent: any, args: any) => {
      let representante = await crearRepresentante(args);
      args.sevicios.forEach((element: Servicios) => {
        crearServicio({...element, representante: representante._id})
      })
      return representante;
    }
  },
}
