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
    servicios: [Servicios]
    aceptaConvenio: String!
    aceptaTratamientoDatos: String!
    aceptaDocumentoSARLAFT: String!
    aceptaCodigoEticaSoyTuSalud: String!
    habilitado: Boolean!
  }

  type Response{
      body: Representante
      status: Status
  }
  type ResponseList{
      body: [Representante]
      status: Status
  }
    type Status{
      code: String!
      description: String!
  }

  type Query {
    RepresentantesTabla: ResponseList
    Representante(_id: String!): Response
  }
  
  type Mutation {
    CrearRepresentante(
      identificacion: String!
      foto: String!
      nombreCompleto: String!
      tipoDocumento: String!
      celular: String!
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
      aceptaConvenio: Boolean!
      aceptaTratamientoDatos: Boolean!
      aceptaDocumentoSARLAFT: Boolean!
      aceptaCodigoEticaSoyTuSalud: Boolean!
    ): Representante
  }
`
