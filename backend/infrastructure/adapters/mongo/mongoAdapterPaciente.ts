import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import { Status } from '../../../domain/commons/StatusInterface'
import { Paciente } from '../../../domain/paciente/pacienteInterface'
import userModel from './schemas/mongoSchemaPaciente'
import { sendEmail } from '../../helpers/emailHelper'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import AuthModel from './schemas/mongoSchemaAuth'
// import { roleEnum } from '../../../domain/auth/enums/roleEnum'

export const findAllPacientes = async () => {
  return await userModel
    .find({})
    .populate('user')
    .then((data) => {
      console.log('data: ', data)
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.SUCCESS_EMPTY,
          'exitoso sin datos',
        )
        const response: ResponseEntity<null> = new ResponseEntity(null, status)

        return response
      }

      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<any[]> = new ResponseEntity(data, status)

      return response
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)
      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const findAllPacientesTuHistoria = async () => {
  return await userModel
    .find({
      formularioTuHistoria: true,
    })
    .then((data) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.SUCCESS_EMPTY,
          'exitoso sin datos',
        )
        const response: ResponseEntity<null> = new ResponseEntity(null, status)

        return response
      }

      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<any[]> = new ResponseEntity(data, status)

      return response
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)
      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const findPacienteById = async (uid: String) => {
  return await userModel
    .findOne({
      uid,
    })
    .then((data: Paciente) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.SUCCESS_EMPTY,
          'exitoso sin datos',
        )
        const response: ResponseEntity<null> = new ResponseEntity(null, status)

        return response
      }

      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<Paciente> = new ResponseEntity(
        data,
        status,
      )

      return response
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)

      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const createPacienteTuHistoria = async (args: any, context: any) => {
  return await userModel
    .create({
      user: args.user,
      foto: args.foto,
      genero: args.genero,
      fechaNacimiento: args.fechaNacimiento,
      direccion: args.direccion,
      discapacitado: args.discapacitado,
      tipoDiscapacidad: args.tipoDiscapacidad,
      victimaViolencia: args.victimaViolencia,
      identidadGenero: args.identidadGenero,
      orientacionSexual: args.orientacionSexual,
      grupoPoblacional: args.grupoPoblacional,
      municipio: args.municipio,
      departamento: args.departamento,
      EPS: args.EPS,
      tuHistoria: args.tuHistoria,
      serviciosSolicitado: args.serviciosSolicitado,
      historiaClinica: args.historiaClinica,
      sisben: args.sisben,
      autorizacionFoto: args.autorizacionFoto,
      recopilacionDatos: args.recopilacionDatos,
    })
    .then((data: any) => {
      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<Paciente> = new ResponseEntity(
        data,
        status,
      )

      return response
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)
      const response: ResponseEntity<null> = new ResponseEntity(null, status)
      return response
    })
}
