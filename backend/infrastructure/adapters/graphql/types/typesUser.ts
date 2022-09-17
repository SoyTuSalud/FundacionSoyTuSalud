import { gql } from 'apollo-server-micro'

export const typesUsuario = gql`

  union UnionUsuario = ResponseUsuario | ResponseUsuarioError
  union UnionUsuarioList = ResponseUsuarioList | ResponseUsuarioError

  type Usuario {
    _id: ID!
    uid: String!
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

  type ResponseUsuario{
      body: Usuario
      status: StatusUsuario
  }
  type ResponseUsuarioList{
      body: [Usuario]
      status: StatusUsuario
  }
  type ResponseUsuarioError{
      status: StatusUsuario
  }
    type StatusUsuario{
      code: String!
      description: String!
  }

  type Query {
    UsuariosTabla: UnionUsuarioList
    UsuariosTablaTuHistoria: UnionUsuarioList
    Usuario(uid: String!): UnionUsuario
  }
  type Mutation {
    crearUsuario(
      uid: String!
      identificacion: String!
      nombre: String!
      apellidos: String!
      tipoDocumento: String!
      celular: String!
      correo: String!
    ): UnionUsuario
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
    ): UnionUsuario
  }
`
