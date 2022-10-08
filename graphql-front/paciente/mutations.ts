import { gql } from '@apollo/client'

export const registrarPaciente = gql`
  mutation Mutation(
    $identificacion: String!
    $nombre: String!
    $apellidos: String!
    $tipoDocumento: String!
    $celular: String!
    $correo: String!
    $contrasena: String!
  ) {
    crearPaciente(
      identificacion: $identificacion
      nombre: $nombre
      apellidos: $apellidos
      tipoDocumento: $tipoDocumento
      celular: $celular
      correo: $correo
      contrasena: $contrasena
    ) {
      ... on ResponsePaciente {
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

export const tuHistoriaUpdate = gql`
  mutation Mutation(
    $correo: String!
    $foto: String!
    $genero: String!
    $fechaNacimiento: String!
    $direccion: String!
    $discapacitado: String!
    $victimaViolencia: String!
    $identidadGenero: String!
    $orientacionSexual: String!
    $grupoPoblacional: String!
    $municipio: String!
    $departamento: String!
    $EPS: String!
    $tuHistoria: String!
    $serviciosSolicitado: [String]!
    $historiaClinica: String!
    $sisben: String!
    $autorizacionFoto: String!
    $recopilacionDatos: String!
    $tipoDiscapacidad: String
  ) {
    tuHistoria(
      correo: $correo
      foto: $foto
      genero: $genero
      fechaNacimiento: $fechaNacimiento
      direccion: $direccion
      discapacitado: $discapacitado
      victimaViolencia: $victimaViolencia
      identidadGenero: $identidadGenero
      orientacionSexual: $orientacionSexual
      grupoPoblacional: $grupoPoblacional
      municipio: $municipio
      departamento: $departamento
      EPS: $EPS
      tuHistoria: $tuHistoria
      serviciosSolicitado: $serviciosSolicitado
      historiaClinica: $historiaClinica
      sisben: $sisben
      autorizacionFoto: $autorizacionFoto
      recopilacionDatos: $recopilacionDatos
      tipoDiscapacidad: $tipoDiscapacidad
    ) {
      ... on ResponsePaciente {
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
