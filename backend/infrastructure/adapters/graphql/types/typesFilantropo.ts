import { gql } from 'apollo-server-micro'

export const typesFilantropo = gql`

  union UnionFilantropo = ResponseFilantropo | ResponseFilantropoError
  union UnionFilantropoList = ResponseFilantropoList | ResponseFilantropoError

  type Filantropo {
    _id: ID!
    user: User!
    tipoDocumento: String!
    identificacion: String!
    nombre: String!
    celular: String!
    direccion: String!
    correo: String!
  }

  type ResponseFilantropo{
      body: Filantropo
      status: StatusFilantropo
  }
  type ResponseFilantropoList{
      body: [Filantropo]
      status: StatusFilantropo
  }
  type ResponseFilantropoError{
      status: StatusFilantropo
  }
    type StatusFilantropo{
      code: String!
      description: String!
  }

  type Query {
    Filantropos: UnionFilantropoList
    Filantropo(_id: String!): UnionFilantropo
  }

  type Mutation {
    crearFilantropo(
      tipoDocumento: String!
      user: String!
      identificacion: String!
      nombre: String!
      celular: String!
      direccion: String!
      correo: String!
    ): UnionFilantropo
  }
`
