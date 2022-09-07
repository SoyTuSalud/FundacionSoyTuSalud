import { gql } from 'apollo-server-micro'


export const typesResponse = gql`
    type Response{
      body: body
      status: Status
  }
  type ResponseList{
      body: [body]
      status: Status
  }
    type Status{
      code: String!
      description: String!
  }

  type Mutation{
    crearResponse: (data: body): Response
  }

  union body = Representante | Servicios
`