import { ResponseCodes } from '../enums/responseCodes.Enum'
import HttpError from '../models/httpError.value'
import { ResponseEntity } from '../models/response.value'
import { Status } from '../models/status.value'

export function validateError(error: unknown): ResponseEntity<null> {
  if (error instanceof HttpError) {
    return new ResponseEntity(null, error.status)
  }
  return new ResponseEntity(null, getFatalStatus())
}

export function getFatalStatus(): Status {
  return new Status(
    ResponseCodes.FATA_ERROR.httpStatus,
    ResponseCodes.FATA_ERROR.code,
    ResponseCodes.FATA_ERROR.message,
  )
}

export function getStatusOk(): Status {
  return new Status(
    ResponseCodes.SUCEESS.httpStatus,
    ResponseCodes.SUCEESS.code,
    ResponseCodes.SUCEESS.message,
  )
}
