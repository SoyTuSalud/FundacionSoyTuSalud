import { gql } from '@apollo/client'

export const pacientesTabla = gql`
query UsersTablaByRol {
  usersTablaByRol {
      ... on ResponseUserList {
      body {
        identificacion
        nombre
        apellidos
        correo
        tipoDocumento
      }
      status {
        description
        code
      }
    }
    ... on ResponseUserError {
      status {
        code
        description
      }
    }  
  }
}
`

export const pacientesTablaTuHistoria = gql`
  query UsuariosTabla {
    PacientesTabla {
      ... on ResponsePacienteList {
        body {
          uid
          nombre
          apellidos
          comunidad
          fechaSolicitud
          grupoPoblacional
          foto
        }
        status {
          code
          description
        }
      }
      ... on ResponsePacienteError {
        status {
          code
          description
        }
      }
    }
  }
`

export const authUser = gql`
query Query($correo: String!, $contrasena: String!) {
  login(correo: $correo, contrasena: $contrasena) {
    ... on ResponseUser {
      body {
        identificacion
      }
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
    Paciente(uid: $uid) {
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



export const loginUserAdmin = gql`
  query Query($correo: String!, $contrasena: String!) {
    loginAdmin(correo: $correo, contrasena: $contrasena) {
      ... on ResponseUser {
        status {
          code
          description
        }
      }
      ... on ResponseUserError {
        status {
          code
          description
        }
      }
    }
  }
`
