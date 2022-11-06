import { ResponseCodes } from '../../../../domain/commons/enums/responseCodesEnum'
import { serviceTransactionTabla, serviceTransaction, createServiceTransaction } from '../../mongo/mongoAdapterServiceTransaction';

export const resolversServiceTransaction = {
  Query: {
    ServiceTransactionTabla : async () =>{
      return await serviceTransactionTabla()
    },
    ServiceTransaction: async (parent: any, args: any) =>{
      return await serviceTransaction(args._id)
    }
  },
  Mutation: {
    CreateServiceTransaction: async (parent: any, args: any) => {
      return await createServiceTransaction(args)
    },
  },
  UnionServiceTransaction: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseServiceTransaction" :
                  "ResponseServiceTransactionError" 
    }
  },
  UnionServiceTransactionList: {
    __resolveType(obj: any){
      return obj.status.code === ResponseCodes.SUCCESS ?  
                  "ResponseServiceTransactionList" :
                  "ResponseServiceTransactionError" 
    }
  }
}
