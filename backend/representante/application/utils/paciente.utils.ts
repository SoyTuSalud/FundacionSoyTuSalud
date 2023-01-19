import {ResponseCodes} from '../../../common/enums/responseCodes.Enum'
import HttpError from '../../../common/models/httpError.value'
import RepresentanteValue from '../../domain/model/representante.value'
import {PacienteSchema, PacienteUpdateSchema} from '../schema/paciente.schema'
import {UpdatePacienteDTO} from '../../domain/dtos/updatePaciente.dto'
import {Status} from '../../../common/models/status.value'
import {z} from "zod";

export const validateBodyCreation = (body: any): RepresentanteValue => {
  try {
    PacienteSchema.parse(body)

    return new RepresentanteValue(
      body.identificacion,
      body.nombre,
      body.apellidos,
      body.TipoDocumentoEnum,
      body.celular,
      body.correo,
    )
  } catch (e) {

    throw new HttpError(
      new Status(
        ResponseCodes.BAD_REQUEST.httpStatus,
        ResponseCodes.BAD_REQUEST.code,
        ResponseCodes.BAD_REQUEST.message,
      ),
    )
  }
}

export const validateBodyUpdate = (body: any): UpdatePacienteDTO => {
  try {
    PacienteUpdateSchema.parse(body)

    return new UpdatePacienteDTO(
      body.identificacion,
      body.foto,
      body.fechaNacimiento,
      body.direccion,
      body.municipio,
      body.departamento,
      body.EPS,
      body.tuHistoria,
      body.serviciosSolicitado,
      body.historiaClinica,
      body.sisben,
      body.autorizacionFoto,
      body.recopilacionDatos,
    )
  } catch (e) {
    throw new HttpError(
      new Status(
        ResponseCodes.BAD_REQUEST.httpStatus,
        ResponseCodes.BAD_REQUEST.code,
        ResponseCodes.BAD_REQUEST.message,
      ),
    )
  }
}

export const validateString = (id: any): string => {
  try {
    
    return z.string().parse(id)

  } catch (e) {
    throw new HttpError(
      new Status(
        ResponseCodes.BAD_REQUEST.httpStatus,
        ResponseCodes.BAD_REQUEST.code,
        ResponseCodes.BAD_REQUEST.message,
      ),
    )
  }
}
