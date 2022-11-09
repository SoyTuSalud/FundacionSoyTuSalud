import { gql } from '@apollo/client'

export const filantropos = gql`
  query Filantropos {
    Filantropos {
      ... on ResponseFilantropoList {
        body {
          _id
          apellidos
          celular
          correo
          identificacion
          nombre
          tipoDocumento
        }
        status {
          code
          description
        }
      }
      ... on ResponseFilantropoError {
        status {
          code
          description
        }
      }
    }
  }
`
export const authUser = gql`
  query AuthUser($uid: String!) {
    Filantropo(uid: $uid) {
      uid
      tipoDocumento
      identificacion
      nombre
      celular
      direccion
      correo
    }
  }
`
