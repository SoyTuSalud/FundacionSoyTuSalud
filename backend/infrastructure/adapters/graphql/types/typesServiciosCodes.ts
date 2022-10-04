import { gql } from 'apollo-server-micro'

export const typesServiciosCodes = gql`

  union UnionServicesCodes = ResponseServicesCodes | ResponseServicesCodesError
  union UnionServicesCodesList = ResponseServicesCodesList | ResponseServicesCodesError

  type ServicesCodes {
    DESCRIPCION_SERVICIO: String!
    CODIGO: String!
    COBERTURA: String!
    TIPO_DE_SERVICIO: String!
  }

  type ResponseServicesCodes{
      body: ServicesCodes
      status: StatusServicesCodes
  }
  type ResponseServicesCodesList{
      body: [ServicesCodes]
      status: StatusServicesCodes
  }
  type ResponseServicesCodesError{
      status: StatusServicesCodes
  }
    type StatusServicesCodes{
      code: String!
      description: String!
  }

  type Query {
    CodeService(
      TIPO_DE_SERVICIO: String!
      DESCRIPCION_SERVICIO: String!
    ): UnionServicesCodesList
  }
`
