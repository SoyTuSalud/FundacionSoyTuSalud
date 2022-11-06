import { gql } from 'apollo-server-micro'

export const typesUser = gql`
  union UnionUser = ResponseUser | ResponseUserError
  union UnionUserList = ResponseUserList | ResponseUserError
  union UnionToken = TokenResponse | ResponseUserError

  type User {
    _id: ID!
    correo: String!
    contrasena: String!
    role: String!
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
    verifyRoles: String
  }

  type Mutation {
    verifyAccount(token: String): ResponseUserError
  }
`
