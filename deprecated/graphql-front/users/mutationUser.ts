import { gql } from '@apollo/client'

export const verifyAccount = gql`
  mutation VerifyAccount($token: String) {
    verifyAccount(token: $token) {
      status {
        code
        description
      }
    }
  }
`
