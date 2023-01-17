import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum';

import {
  representantesTabla,
  representante,
  crearRepresentante,
} from '../../mongo/mongoAdapterRepresentante'

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

  UnionRepresentante: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseRepresentante" :
                  "ResponseRepresentanteError" 
    }
  },
  UnionRepresentanteList: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseRepresentanteList" :
                  "ResponseRepresentanteError" 
    }
  }

}
