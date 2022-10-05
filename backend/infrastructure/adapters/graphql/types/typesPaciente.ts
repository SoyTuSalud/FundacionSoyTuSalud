import { gql } from 'apollo-server-micro'

export const typesPaciente = gql`
  union UnionPaciente = ResponsePaciente | ResponsePacienteError
  union UnionPacienteList = ResponsePacienteList | ResponsePacienteError

  type Paciente {
    _id: ID!
    user: User!
    aplicaEnFundacion: Boolean!
    matchService: String
    foto: String!
    genero: String!
    fechaNacimiento: String!
    direccion: String!
    discapacitado: Boolean!
    tipoDiscapacidad: String
    victimaViolencia: String!
    identidadGenero: String!
    orientacionSexual: String!
    grupoPoblacional: String!
    municipio: String!
    departamento: String!
    EPS: String!
    tuHistoria: String!
    serviciosSolicitado: [String]!
    historiaClinica: String!
    sisben: String!
    autorizacionFoto: Boolean!
    recopilacionDatos: Boolean!
    comunidad: String
    fechaSolicitud: String!
  }

  type ResponsePaciente {
    body: Paciente
    status: StatusPaciente
  }
  type ResponsePacienteList {
    body: [Paciente]
    status: StatusPaciente
  }
  type ResponsePacienteError {
    status: StatusPaciente
  }
  type StatusPaciente {
    code: String!
    description: String!
  }

  type Query {
    PacientesTabla: UnionPacienteList
    PacientesTablaTuHistoria: UnionPacienteList
    Paciente(uid: String!): UnionPaciente
  }
  type Mutation {
    tuHistoria(
      user: String!
      foto: String!
      genero: String!
      fechaNacimiento: String!
      direccion: String!
      discapacitado: Boolean!
      tipoDiscapacidad: String
      victimaViolencia: Boolean!
      identidadGenero: String!
      orientacionSexual: String!
      grupoPoblacional: String
      municipio: String!
      departamento: String!
      EPS: String!
      tuHistoria: String!
      serviciosSolicitado: [String]!
      historiaClinica: String!
      sisben: String!
      autorizacionFoto: Boolean!
      recopilacionDatos: Boolean!
    ): UnionPaciente
  }
`
