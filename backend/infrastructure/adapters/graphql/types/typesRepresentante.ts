import { gql } from 'apollo-server-micro'

export const typesRepresentate = gql`

  type Representante {
    _id: ID!
    identificacion: String!
    foto: String!
    nombreCompleto: String!
    celular: String!
    tipoDocumento: TipoDocumentoEnum!
    departamento: String!
    municipio: String!
    direccion: String!
    paginaWeb: String
    cuentaDeAhorros: String!
    distintivoHabilitacion: String!
    convalidacionIcfes: String
    fotoLogoPublicidad: String!
    hojaVida: String!
    resumenCurriculum: String!
    aceptaConvenio: String!
    aceptaTratamientoDatos: String!
    aceptaDocumentoSARLAFT: String!
    aceptaCodigoEticaSoyTuSalud: String!
    habilitado: Boolean!
  }

  type Query {
    ServiciosTabla: [Servicio]
    Servicio(identificacion: String!): Servicio
  }

  type Mutation {
    CrearServicio(
      identificacion: String!
      foto: String!
      nombreCompleto: String!
      tipoDocumento: String!
      celular: String!
      departamento: String!
      municipio: String!
      direccion: String!
      paginaWeb: String
      servicios: [Servicios]!
      cuentaDeAhorros: String!
      distintivoHabilitacion: String!
      convalidacionIcfes: String
      fotoLogoPublicidad: String!
      hojaVida: String!
      resumenCurriculum: String!
      aceptaConvenio: Boolean!
      aceptaTratamientoDatos: Boolean!
      aceptaDocumentoSARLAFT: Boolean!
      aceptaCodigoEticaSoyTuSalud: Boolean!
    ): Servicio
    ActualizarEstadoServicio(
      habilitado: Boolean!
      identificacion: String!
    ): Servicio
  }
`
