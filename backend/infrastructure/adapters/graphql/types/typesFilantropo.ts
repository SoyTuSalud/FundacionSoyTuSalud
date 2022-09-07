import { gql } from 'apollo-server-micro'

export const typesFilantropo = gql`
  type Filantropo {
    _id: ID!
    tipoDocumento: String!
    identificacion: String!
    nombre: String!
    celular: String!
    direccion: String!
    correo: String!
  }
  type Query {
    Filantropos: ResponseList
    Filantropo(_id: String!): Response
  }

  type Mutation {
    crearFilantropo(
      tipoDocumento: String!
      identificacion: String!
      nombre: String!
      celular: String!
      direccion: String!
      correo: String!
    ): Response
  }
`
