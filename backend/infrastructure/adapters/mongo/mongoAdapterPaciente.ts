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

export const loginPaciente = async (args: any) => {

  return await userModel
    .findOne({
      correo: args.correo,
    })
    .then((data: Paciente) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.ERROR,
          'Usuario no existe',
        )
        const response: ResponseEntity<null> = new ResponseEntity(null, status)

        return response
      }
      return bcrypt
        .compare(args.contrasena, data.contrasena)
        .then((validationPass) => {
          if (validationPass) {
            const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
            const response: ResponseEntity<Paciente> = new ResponseEntity(
              data,
              status,
            )

            return response
          } else {
            const status: Status = new Status(
              ResponseCodes.ERROR,
              'contraseña erronea',
            )

            const response: ResponseEntity<null> = new ResponseEntity(
              null,
              status,
            )

            return response
          }
        })
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)

      const response: ResponseEntity<null> = new ResponseEntity(null, status)

      return response
    })
}

export const createPaciente = async (args: any) => {

  const hash = await bcrypt.hash(args.contrasena, 10)

  // const signToken = await jwt.sign()

  return await userModel
    .create({
      identificacion: args.identificacion,
      nombre: args.nombre,
      user: args.user,
      apellidos: args.apellidos,
      tipoDocumento: args.tipoDocumento,
      celular: args.celular,
      correo: args.correo,
      contrasena: hash,
    })
    .then((data: any) => {
      // AuthModel.create({
      //   id: data._id,
      //   role: roleEnum.PACIENTE,
      //   email: args.correo,
      //   password: hash,
      // })

      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      const response: ResponseEntity<Paciente> = new ResponseEntity(
        data,
        status,
      )
      sendEmail(args.correo, `${args.nombre} ${args.apellidos}`)

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
    .findByIdAndUpdate(args._id, {
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
      formularioTuHistoria: true,
    })
    .then((data: any) => {
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
