import { gql } from 'apollo-server-micro'

export const typesRepresentate = gql`

  union UnionRepresentante = ResponseRepresentante | ResponseRepresentanteError
  union UnionRepresentanteList = ResponseRepresentanteList | ResponseRepresentanteError

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
    habilitado: String!
  }

  input ServiciosCreate {
    tipoServicio: String!
    especialidad: String!
    modalidad: String!
    horaInicio: String!
    horaFin: String!
    celularServicio: String!
    whatsAppServicio: String!
    nombreResponsable: String!
    direccionServicio: String!
    dias: [String]!
    valorServicio: String!
  }

  type ResponseRepresentante{
      body: Representante
      status: StatusRepresentante
  }

  type ResponseRepresentanteError{
      status: StatusRepresentante
  }

  type ResponseRepresentanteList{
      body: [Representante]
      status: StatusRepresentante
  }
    type StatusRepresentante{
      code: String!
      description: String!
  }

  type Query {
    RepresentantesTabla: UnionRepresentanteList
    Representante(_id: String!): UnionRepresentante 
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
      servicios: [ServiciosCreate]!
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
    ): UnionRepresentante
  }
`
