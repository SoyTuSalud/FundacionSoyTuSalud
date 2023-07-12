import {ResponseEntity} from "@common/models/response.value";
import {logger} from "@common/logger/winston.config";
import {loggerMessage} from "@common/enums/logger.enum";
import {IDbConfig} from "@common/connections/db.config";
import {validateError} from "@common/functions/functions.common";


export class ServiceTemplate {
  constructor(private readonly dbConnection: IDbConfig) {}

  async handleService<T>(methodName: string,
                         fn: () => Promise<ResponseEntity<T>>){
    logger.info(loggerMessage.INICIO + methodName)
    await this.dbConnection.connectDb()
    try{
      return await fn()
    }
    catch (error: unknown){
      console.log("error serio", error)
      logger.info(loggerMessage.ERROR + methodName)
      return validateError(error)
    }finally {
      logger.info(loggerMessage.FIN + methodName)
    }
  }

}

