import { Status } from '../../../common/models/status.value';
import { AuthRepository } from '../../domain/repository/auth.repository';
import { ResponseCodes } from '../../../common/enums/responseCodes.Enum';
import HttpError from '../../../common/models/httpError.value';
import { ResponseEntity } from '../../../common/models/response.value';


export class PacienteService {
  constructor(private readonly AuthRepository: AuthRepository) {}



  private getStatusOk(): Status {
    return new Status(
      ResponseCodes.SUCEESS.httpStatus,
      ResponseCodes.SUCEESS.code,
      ResponseCodes.SUCEESS.message,
    )
  }

  private getFatalStatus(): Status {
    return new Status(
      ResponseCodes.FATA_ERROR.httpStatus,
      ResponseCodes.FATA_ERROR.code,
      ResponseCodes.FATA_ERROR.message,
    )
  }

  private validateError(error: unknown): ResponseEntity<null> {
    if (error instanceof HttpError) {
      return new ResponseEntity(null, error.status)
    }
    return new ResponseEntity(null, this.getFatalStatus())
  }
}
