import { ResponseEntity } from '../../domain/commons/responseEntity'
import { Status } from '../../domain/commons/StatusInterface'

class HttpError extends Error implements ResponseEntity<string> {
  httpCode: number
  body: string
  status: Status

  constructor(
    message: string | undefined,
    httpCode: number,
    status: Status,
  ) {
    super(message)
    this.body = message || ''
    this.httpCode = httpCode
    this.status = status
  }
}

export default HttpError
