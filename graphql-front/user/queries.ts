import { gql } from '@apollo/client'

export const usuariosTablas = gql`
  query Query {
    UsuariosTabla {
      identificacion
      nombre
      apellidos
      correo
      tipoDocumento
      formularioTuHistoria
      foto
    }
  }
`

export const pacientesTablaTuHistoria = gql`
  query Query {
    UsuariosTablaTuHistoria {
      uid
      nombre
      apellidos
      comunidad
      fechaSolicitud
      grupoPoblacional
      foto
    }
  }
`

export const authUser = gql`
  query Query($uid: String!) {
    Usuario(uid: $uid) {
      ... on ResponseUsuario {
        body {
          identificacion
          _id
          uid
          nombre
          apellidos
          tipoDocumento
          celular
          correo
          formularioTuHistoria
        }
        status {
          code
          description
        }
      }
      ... on ResponseUsuarioError {
        status {
          code
          description
        }
      }
    }
  }
`

export const userData = gql`
  query Usuario($uid: String!) {
    Usuario(uid: $uid) {
      uid
      identificacion
      nombre
      apellidos
      tipoDocumento
      foto
      celular
      correo
      formularioTuHistoria
      aplicaEnFundacion
      matchService
      genero
      fechaNacimiento
      direccion
      discapacitado
      tipoDiscapacidad
      victimaViolencia
      identidadGenero
      grupoPoblacional
      orientacionSexual
      municipio
      departamento
      EPS
      tuHistoria
      serviciosSolicitado
      historiaClinica
      sisben
      autorizacionFoto
      recopilacionDatos
      comunidad
      fechaSolicitud
    }
  }
`
