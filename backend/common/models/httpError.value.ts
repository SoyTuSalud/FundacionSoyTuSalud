import {Status} from './status.value'

class HttpError extends Error {
  status: Status

  constructor(status: Status) {
    super(status.code)
    this.status = status
  }
}

export default HttpError
