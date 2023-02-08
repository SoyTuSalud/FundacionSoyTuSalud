import { gql } from 'apollo-server-micro'

export const typesFilantropo = gql`
  union UnionFilantropo = ResponseFilantropo | ResponseFilantropoError
  union UnionFilantropoList = ResponseFilantropoList | ResponseFilantropoError

  type Filantropo {
    _id: ID!
    tipoDocumento: String!
    identificacion: String!
    nombre: String!
    apellidos: String!
    celular: String!
    correo: String!
    numeroDonaciones: String!
    totalDonado: String
    pacientesApoyados: [Paciente]
    profileType: String!
  }

  type ResponseFilantropo {
    body: Filantropo
    status: StatusFilantropo
  }
  type ResponseFilantropoList {
    body: [Filantropo]
    status: StatusFilantropo
  }
  type ResponseFilantropoError {
    status: StatusFilantropo
  }
  type StatusFilantropo {
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
      identificacion: String!
      nombre: String!
      apellidos: String!
      celular: String!
      correo: String!
      contrasena: String!
    ): UnionFilantropo
  }
`
