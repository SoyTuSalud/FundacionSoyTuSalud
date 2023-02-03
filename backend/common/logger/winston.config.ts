import {createLogger, format, transports} from "winston"
import { existsSync, mkdirSync } from 'fs';
import winstonDaily from 'winston-daily-rotate-file';
import {join} from "path";
import {NextApiRequest} from "next";

import {loggerMessage} from "@common/enums/logger.enum";



// logs dir
const logDir: string = join(__dirname, './logs');

if (!existsSync(logDir)) {
  mkdirSync(logDir);
}
// Define log format
const logFormat = format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`);

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
  ),
  transports: [
    // debug log setting
    new winstonDaily({
      level: 'debug',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/debug', // log file /logs/debug/*.log in save
      filename: `%DATE%.log`,
      maxFiles: 30, // 30 Days saved
      json: false,
      zippedArchive: true,
    }),
    // error log setting
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error', // log file /logs/error/*.log in save
      filename: `%DATE%.log`,
      maxFiles: 30, // 30 Days saved
      handleExceptions: true,
      json: false,
      zippedArchive: true,
    }),
  ],
});

logger.add(
  new transports.Console({
    format: format.combine(format.splat(), format.colorize()),
  }),
);

const stream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};

const loggerRequest = (request : NextApiRequest) => {
  logger.info(`\n ${loggerMessage.REQUEST}${JSON.stringify(request.body)}
  ${loggerMessage.HEADERS}${JSON.stringify( request.headers)}
   ${loggerMessage.COOKIES}${JSON.stringify(request.cookies)}`)
}

export { logger, stream, loggerRequest };