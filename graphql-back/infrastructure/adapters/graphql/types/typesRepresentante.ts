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
    servicios : [Servicios]!
  }

  type Query {
   
  }

  type Mutation {
  }
`
