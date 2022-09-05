import { codeService, crearCode } from "../../mongo/mongoAdapterServiciosCodes"

export const resolversServiciosCodes = {
  Query: {
    CodeService: async (parent:any, args:any) => {
      return codeService(args)
    },
  },
  Mutation: {
    crearCode: async (parent: any, args:any) => {
      return crearCode(args)
    },
  },
}
