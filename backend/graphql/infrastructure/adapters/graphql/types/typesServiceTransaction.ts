import { gql } from 'apollo-server-micro'

export const typesServiceTransaction = gql`
  union UnionServiceTransaction =
      ResponseServiceTransaction
    | ResponseServiceTransactionError
  union UnionServiceTransactionList =
      ResponseServiceTransactionList
    | ResponseServiceTransactionError

  type ServiceTransaction {
    _id: ID!
    pacienteId: Paciente
    filantropoId: Filantropo
    representanteId: Representante
    servicioSolicitado: Servicios
    fechaCreacion: String
    fechaCita: String
    fechaFin: String
    precio: String
    status: String
    nroPago: String
  }

  type ResponseServiceTransaction {
    body: ServiceTransaction
    status: StatusServiceTransaction
  }
  type ResponseServiceTransactionList {
    body: [ServiceTransaction]
    status: StatusServiceTransaction
  }
  type ResponseServiceTransactionError {
    status: StatusServiceTransaction
  }
  type StatusServiceTransaction {
    code: String!
    description: String!
  }

  type Query {
    ServiceTransactionTabla: UnionServiceTransactionList
    ServiceTransaction(_id: String): UnionServiceTransaction
  }

  type Mutation {
    CreateServiceTransaction(
      pacienteId: String
      filantropoId: String
      representanteId: String
      servicioSolicitado: String
      fechaCreacion: String
      fechaCita: String
      fechaFin: String
      precio: String
      status: String
      nroPago: String
    ): UnionServiceTransaction
  }
`
