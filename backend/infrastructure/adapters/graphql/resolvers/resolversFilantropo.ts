import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum';
import { crearFilantropo, filantropo, filantroposTabla } from '../../mongo/mongoAdapterFilantropo';

export const resolversFilantropos = {
  Query: {
    Filantropos: async () => {
      return await filantroposTabla()
    },
    Filantropo: async (parent: any, args : any, context : any) => {
      return await filantropo(args._id)
    },
  },
  Mutation: {
    crearFilantropo: async (parent: any, args: any) => {
      return await crearFilantropo(args)
    },
  },

  UnionFilantropo: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseFilantropo" :
                  "ResponseFilantropoError" 
    }
  },
  UnionFilantropoList: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseFilantropoList" :
                  "ResponseFilantropoError" 
    }
  }
}
