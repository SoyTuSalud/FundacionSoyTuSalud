import {logger} from "@common/logger/winston.config";
import {loggerMessage} from "@common/enums/logger.enum";
import {validateError} from "@common/functions/functions.common";
import {NextApiResponse} from "next";

export class ControllerTemplate {
  async handleController<T>(methodName: string, response: NextApiResponse,
                            fn: () => Promise<void>){
    logger.info(loggerMessage.INICIO + methodName)
    try{
      return await fn()
    }
    catch (error: unknown){
      logger.info(loggerMessage.ERROR + methodName)
      const responseEntity = validateError(error)
      response.status(responseEntity.status.httpStatus).json(responseEntity)
    }finally {
      logger.info(loggerMessage.FIN + methodName)
    }
  }

}