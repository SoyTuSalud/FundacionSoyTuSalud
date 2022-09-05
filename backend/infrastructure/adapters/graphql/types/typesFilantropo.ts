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
    Filantropos: [Filantropo]
    Filantropo(_id: String!): Filantropo
  }

  type Mutation {
    crearFilantropo(
      tipoDocumento: String!
      identificacion: String!
      nombre: String!
      celular: String!
      direccion: String!
      correo: String!
    ): Filantropo
  }
`
