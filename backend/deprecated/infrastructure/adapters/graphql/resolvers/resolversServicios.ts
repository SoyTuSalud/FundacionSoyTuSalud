import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
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
  UnionServicios: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseServicios" :
                  "ResponseServiciosError" 
    }
  },
  UnionServiciosList: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseServiciosList" :
                  "ResponseServiciosError" 
    }
  }
}
