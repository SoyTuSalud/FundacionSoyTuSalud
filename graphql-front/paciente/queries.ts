import { gql } from '@apollo/client'

export const pacientesTabla = gql`
query Query {
  PacientesTabla {
    ... on ResponsePacienteList {
      body {
      identificacion
      nombre
      apellidos
      correo
      tipoDocumento
      formularioTuHistoria
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

export const pacientesTablaTuHistoria = gql`
query PacientesTablaTuHistoria {
  PacientesTablaTuHistoria {
    ... on ResponsePacienteList {
      body {
      _id
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

export const userData = gql`
query Query($_id: String!) {
  Paciente(_id: $_id) {
    ... on ResponsePaciente {
      body {
      _id
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
