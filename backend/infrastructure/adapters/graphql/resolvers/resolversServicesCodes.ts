import { ResponseCodes } from "../../../../domain/commons/enums/responseCodesEnum"
import { codeService, crearCode } from "../../mongo/mongoAdapterServiciosCodes"

export const resolversServiciosCodes = {
  Query: {
    CodeService: async (parent:any, args:any) => {
      return codeService(args)
    },
  },
  UnionServicesCodes: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseServicesCodes" :
                  "ResponseServicesCodesError" 
    }
  },
  UnionServicesCodesList: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseServicesCodesList" :
                  "ResponseServicesCodesError" 
    }
  }
}
