import { gql } from '@apollo/client'

export const registrarFilantropo = gql`
  mutation Mutation(
    $tipoDocumento: String!
    $identificacion: String!
    $nombre: String!
    $apellidos: String!
    $celular: String!
    $correo: String!
    $contrasena: String!
  ) {
    crearFilantropo(
      tipoDocumento: $tipoDocumento
      identificacion: $identificacion
      nombre: $nombre
      apellidos: $apellidos
      celular: $celular
      correo: $correo
      contrasena: $contrasena
    ) {
      ... on ResponseFilantropo {
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
