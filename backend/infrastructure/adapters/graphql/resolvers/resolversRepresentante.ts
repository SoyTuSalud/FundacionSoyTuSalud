import { Servicios } from '../../../../domain/servicios/serviciosInterface';
import {
  representantesTabla,
  representante,
  crearRepresentante,
} from '../../mongo/mongoAdapterRepresentante'
import { crearServicio } from '../../mongo/mongoAdapterServicios';

export const resolversRepresentante = {
  Query: {
    RepresentantesTabla: async () => {
      return await representantesTabla()
    },
    Representante: async (parent: any, args: any) => {
      return await representante(args._id)
    },
  },
  Mutation: {
    CrearRepresentante: async (parent: any, args: any) => {
      return await crearRepresentante(args);
    }
  },
}
