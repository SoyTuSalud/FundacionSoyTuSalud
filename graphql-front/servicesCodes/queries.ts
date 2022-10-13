import { gql } from 'apollo-server-micro'

export const CodeServices = gql`
query Query($tipoDeServicio: String!, $descripcionServicio: String!) {
  CodeService(TIPO_DE_SERVICIO: $tipoDeServicio, DESCRIPCION_SERVICIO: $descripcionServicio) {
    ... on ResponseServicesCodesList {
      body {
        DESCRIPCION_SERVICIO
        CODIGO
        TIPO_DE_SERVICIO
      }
      status {
        code
        description
      }
    }
    ... on ResponseServicesCodesError {
      status {
        code
        description
      }
    }
  }
}
`
