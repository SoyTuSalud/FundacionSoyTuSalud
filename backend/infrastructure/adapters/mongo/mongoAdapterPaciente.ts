import { ResponseCodes } from '../../../domain/commons/enums/responseCodesEnum'
import { ResponseEntity } from '../../../domain/commons/responseEntity'
import { Status } from '../../../domain/commons/StatusInterface'
import { Paciente } from '../../../domain/paciente/pacienteInterface'
import { deleteUser, registro } from './mongoAdapterUser'
import PacienteModel from './schemas/mongoSchemaPaciente'
import jwt from 'jsonwebtoken'
import { setCookie } from '../../helpers/tokenSerialize'
import { roleEnum } from '../../../domain/user/enums/roleEnum'
import { sendEmail } from '../../helpers/emailHelper'

export const findAllPacientes = async () => {
  return await PacienteModel.find({})
    .then((data) => {
      if (data.length === 0) {
        const status: Status = new Status(
          ResponseCodes.SUCCESS_EMPTY,
          'exitoso sin datos',
        )
        return new ResponseEntity(null, status)
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
  return await PacienteModel.find({
    formularioTuHistoria: true,
  })
    .then((data) => {
      if (data.length === 0) {
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

export const findPacienteById = async (_id: String) => {
  return await PacienteModel.findById(_id)
    .then((data: Paciente) => {
      console.log(data)
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.SUCCESS_EMPTY,
          'exitoso sin datos',
        )
        return new ResponseEntity(null, status)
      }

      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      return new ResponseEntity(data, status)
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)

      return new ResponseEntity(null, status)
    })
}

export const createPaciente = async (args: any, context: any) => {
  return await registro({
    nombre: args.nombre,
    apellidos: args.apellidos,
    constrasena: args.contrasena,
    correo: args.correo,
    rol: roleEnum.PACIENTE,
  })
    .then(() => {
      return PacienteModel.create({
        identificacion: args.identificacion,
        nombre: args.nombre,
        apellidos: args.apellidos,
        tipoDocumento: args.tipoDocumento,
        celular: args.celular,
        correo: args.correo,
      })
        .then((data: any) => {
          const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
          const response: ResponseEntity<Paciente> = new ResponseEntity(
            data,
            status,
          )

          let newData = data
          newData = newData.toObject()
          delete newData.contrasena

          const token = jwt.sign(newData, process.env.ENV_KEY_TOKEN!, {
            expiresIn: '1h',
          })
          // setCookie(context, 'token', token, {
          //   path: '/',
          // })

          sendEmail(data.correo, data.nombre, token)

          return response
        })
        .catch((e) => {
          deleteUser(args.correo)

          const status: Status = new Status(ResponseCodes.ERROR, e.message)
          return new ResponseEntity(null, status)
        })
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)
      return new ResponseEntity(null, status)
    })
}

export const createPacienteTuHistoria = async (args: any, context: any) => {
  return await PacienteModel.findOneAndUpdate(
    { correo: args.correo },
    {
      foto: args.foto,
      genero: args.genero,
      fechaNacimiento: args.fechaNacimiento,
      direccion: args.direccion,
      discapacitado: args.discapacitado === 'true',
      tipoDiscapacidad: args.tipoDiscapacidad,
      victimaViolencia: args.victimaViolencia === 'true',
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
      autorizacionFoto: args.autorizacionFoto === 'true',
      recopilacionDatos: args.recopilacionDatos === 'true',
      formularioTuHistoria: true,
      fechaSolicitud: new Date().toISOString().split('T')[0],
    },
  )
    .then((data: Paciente) => {
      if (!data) {
        const status: Status = new Status(
          ResponseCodes.SUCCESS_EMPTY,
          'exitoso sin datos',
        )
        return new ResponseEntity(null, status)
      }

      const status: Status = new Status(ResponseCodes.SUCCESS, 'exitoso')
      return new ResponseEntity(data, status)
    })
    .catch((e) => {
      const status: Status = new Status(ResponseCodes.ERROR, e.message)

      return new ResponseEntity(null, status)
    })
}

export const findAllPacientesClasificados = () => {}
