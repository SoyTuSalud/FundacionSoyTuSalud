import {NextApiRequest, NextApiResponse} from "next";
import {createRouter, expressWrapper} from "next-connect";
import morgan from 'morgan';
import helmet from "helmet";

import {ResponseEntity} from "@common/models/response.value";
import {Status} from "@common/models/status.value";
import {ResponseCodes} from "@common/enums/responseCodes.Enum";
import {stream, logger} from "@common/logger/winston.config";
import {validateError} from "@common/functions/functions.common";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(expressWrapper(helmet()))
  .use(expressWrapper(morgan("dev", { stream })))
  const handler = router.handler({
    onError(error, req, res){
      const responseEntity = validateError(error)

      res.status(responseEntity.status.httpStatus).json(responseEntity)
    },
    onNoMatch(req, res){
      logger.info(`${req.method} ${req.url} ${ResponseCodes.METHOD_NOT_ALLOWED.httpStatus}`)
      const responseEntity = new ResponseEntity(null,
        new Status(
          ResponseCodes.METHOD_NOT_ALLOWED.httpStatus,
          ResponseCodes.METHOD_NOT_ALLOWED.code,
          ResponseCodes.METHOD_NOT_ALLOWED.message,
        ))
      res.status(responseEntity.status.httpStatus).json(responseEntity)
    }
})
export {router, handler}