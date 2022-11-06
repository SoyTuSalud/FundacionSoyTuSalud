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
    formularioTuHistoria: String
    aplicaEnFundacion: String
    matchService: String
    foto: String
    genero: String
    fechaNacimiento: String
    direccion: String
    discapacitado: String
    tipoDiscapacidad: String
    victimaViolencia: String
    identidadGenero: String
    orientacionSexual: String
    grupoPoblacional: String
    municipio: String
    departamento: String
    EPS: String
    tuHistoria: String
    serviciosSolicitado: [String]
    historiaClinica: String
    sisben: String
    autorizacionFoto: String
    recopilacionDatos: String
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
    Paciente( _id: String!): UnionPaciente
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
      correo: String!
      foto: String!
      genero: String!
      fechaNacimiento: String!
      direccion: String!
      discapacitado: String!
      tipoDiscapacidad: String
      victimaViolencia: String!
      identidadGenero: String!
      orientacionSexual: String
      grupoPoblacional: String!
      municipio: String!
      departamento: String!
      EPS: String!
      tuHistoria: String!
      serviciosSolicitado: [String]!
      historiaClinica: String!
      sisben: String!
      autorizacionFoto: String!
      recopilacionDatos: String!
    ): UnionPaciente
  }
`
