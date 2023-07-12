import {z} from "zod";

import {ResponseCodes} from '@common/enums/responseCodes.Enum'
import HttpError from '@common/models/httpError.value'
import {Status} from '@common/models/status.value'

import PacienteValue from '@paciente/domain/model/paciente.value'
import {UpdatePacienteDTO} from '@paciente/domain/dtos/updatePaciente.dto'

import {PacienteSchema, PacienteUpdateSchema} from '@paciente/application/schema/paciente.schema'
import {logger} from "@common/logger/winston.config";



export const validateBodyCreation = (body: any): PacienteValue => {
  try {
    PacienteSchema.parse(body)
    return new PacienteValue(
      body.identificacion,
      body.nombre,
      body.apellidos,
      body.tipoDocumento,
      body.celular,
      body.correo
    )
  } catch (e) {
    // @ts-ignore
    logger.info(e.message)
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
    // @ts-ignore
    logger.info(e.message)
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
    // @ts-ignore
    logger.info(e.message)
    throw new HttpError(
      new Status(
        ResponseCodes.BAD_REQUEST.httpStatus,
        ResponseCodes.BAD_REQUEST.code,
        ResponseCodes.BAD_REQUEST.message,
      ),
    )
  }
}
