import { gql } from 'apollo-server-micro'

export const typesUsuario = gql`
  type Usuario {
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
  type Query {
    UsuariosTabla: [Usuario]
    UsuariosTablaTuHistoria: [Usuario]
    Usuario(uid: String!): Usuario
  }
  type Mutation {
    crearUsuario(
      uid: ID!
      identificacion: String!
      nombre: String!
      apellidos: String!
      tipoDocumento: String!
      celular: String!
      correo: String!
    ): Usuario
    tuHistoria(
      uid: ID!
      foto: String!
      genero: String!
      fechaNacimiento: String!
      direccion: String!
      discapacitado: String!
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
      autorizacionFoto: String!
      recopilacionDatos: String!
    ): Usuario
  }
`
