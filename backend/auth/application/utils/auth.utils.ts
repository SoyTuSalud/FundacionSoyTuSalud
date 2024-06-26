import {z} from "zod";

import {ResponseCodes} from "@common/enums/responseCodes.Enum";
import HttpError from "@common/models/httpError.value";
import {Status} from "@common/models/status.value";

import {AuthDTO} from "@auth/domain/dtos/auth.dto";
import {AuthSignInDTO} from '@auth/domain/dtos/authSignIn.dto';

import {AuthDTOSchema, AuthSignInDTOSchema} from "@auth/application/schemas/auth.schema";

export const validateAuthDTO = (body: any): AuthDTO => {
  try {
    AuthDTOSchema.parse(body)

    return new AuthDTO(
      body.correo,
      body.contrasena,
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

export const validateBodySignIn = (body: any): AuthSignInDTO => {
  try {
    AuthSignInDTOSchema.parse(body)

    return new AuthSignInDTO(
      body.role,
      body.correo,
      body.contrasena,
      body.tipoDocumento,
      body.nombre,
      body.apellidos,
      body.celular,
      body.identificacion
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
