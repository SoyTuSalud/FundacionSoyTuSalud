import {ResponseCodes} from '@common/enums/responseCodes.Enum'
import HttpError from '../../../common/models/httpError.value'
import FilantropoValue from '../../domain/model/filantropo.value'
import {FilantropoDTOSchema, filntropoUpdateSchema} from '../schema/filantropo.schema'
import {Status} from '@common/models/status.value'
import {z} from "zod";

export const validateBodyCreation = (body: any): FilantropoValue => {
  try {
    FilantropoDTOSchema.parse(body)

    return new FilantropoValue(
      body.apellidos,
      body.celular,
      body.correo,
      body.identificacion,
      body.nombre,
      body.numeroDonaciones,
      body.pacientesApoyados,
      body.profileType,
      body.tipoDocumento,
      body.totalDonado,
        body.pais
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
/*
export const validateBodyUpdate = (body: any): UpdatePacienteDTO => {
  try {
    filntropoUpdateSchema.parse(body)

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

 */

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
