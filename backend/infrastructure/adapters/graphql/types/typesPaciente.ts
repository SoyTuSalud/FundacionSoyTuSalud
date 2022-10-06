import { gql } from 'apollo-server-micro'

export const typesPaciente = gql`
  union UnionPaciente = ResponsePaciente | ResponsePacienteError
  union UnionPacienteList = ResponsePacienteList | ResponsePacienteError

  type Paciente {
    _id: ID!
    identificacion: String!
    nombre: String!
    apellidos: String!
    tipoDocumento: TipoDocumentoEnum!
    celular: String!
    correo: String!
    formularioTuHistoria: Boolean
    aplicaEnFundacion: Boolean
    matchService: String
    foto: String
    genero: GeneroEnum
    fechaNacimiento: String
    direccion: String
    discapacitado: Boolean
    tipoDiscapacidad: TipoDiscapacidadEnum
    victimaViolencia: String
    identidadGenero: IdentidadGeneroEnum
    orientacionSexual: OrientacionSexualEnum
    grupoPoblacional: String
    municipio: String
    departamento: String
    EPS: String
    tuHistoria: String
    serviciosSolicitado: [String]
    historiaClinica: String
    sisben: String
    autorizacionFoto: Boolean
    recopilacionDatos: Boolean
    comunidad: String
    fechaSolicitud: String
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
    crearPaciente(
      identificacion: String!
      nombre: String!
      apellidos: String!
      tipoDocumento: String!
      celular: String!
      correo: String!
      contrasena: String!
    ): UnionPaciente
    tuHistoria(
      _id: ID!
      foto: String!
      genero: GeneroEnum!
      fechaNacimiento: String!
      direccion: String!
      discapacitado: Boolean!
      tipoDiscapacidad: TipoDiscapacidadEnum
      victimaViolencia: Boolean!
      identidadGenero: IdentidadGeneroEnum!
      orientacionSexual: OrientacionSexualEnum
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
    ): UnionPaciente
  }
`
