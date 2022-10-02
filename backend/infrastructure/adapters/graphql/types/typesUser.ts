import { gql } from 'apollo-server-micro'

export const typesUser = gql`
  union UnionUser = ResponseUser | ResponseUserError
  union UnionUserList = ResponseUserList | ResponseUserError
  union UnionToken = TokenResponse | ResponseUserError

  type User {
    _id: ID!
    identificacion: String!
    nombre: String!
    apellidos: String!
    tipoDocumento: String!
    celular: String!
    correo: String!
    contrasena: String!
    role: String!
    paciente: Paciente
    filantropo: Filantropo
    representante: Representante
    token: String
  }

  type Token {
    token: String!
  }

  type TokenResponse {
    body: Token
    status: StatusUser
  }

  type ResponseUser {
    body: User
    status: StatusUser
  }
  type ResponseUserList {
    body: [User]
    status: StatusUser
  }
  type ResponseUserError {
    status: StatusUser
  }
  type StatusUser {
    code: String!
    description: String!
  }

  type Query {
    login(correo: String!, contrasena: String!): UnionUser
    loginAdmin(correo: String!, contrasena: String!): UnionUser
    usersTablaByRol: UnionUserList
    verifyRoles: String
  }

  type Mutation {
    registro(
      identificacion: String!
      nombre: String!
      apellidos: String!
      tipoDocumento: String!
      celular: String!
      correo: String!
      contrasena: String!
      role: String!
      token: String
    ): UnionUser
  }
`
