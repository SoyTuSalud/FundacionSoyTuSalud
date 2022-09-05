import { gql } from 'apollo-server-micro'

export const typesServicios = gql`
  type Servicios {
    _id: ID!
    tipoServicio: String!
    especialidad: String!
    modalidad: String!
    horaInicio: String!
    horaFin: String!
    celularServicio: String!
    whatsAppServicio: String!
    nombreResponsable: String!
    direccionServicio: String!
    dias: [String]!
    valorServicio: String!
    representante: Representante!
  }

  type Query {
  }

  type Mutation {
    crearServicio(
    _id: ID!
    tipoServicio: String!
    especialidad: String!
    modalidad: String!
    horaInicio: String!
    horaFin: String!
    celularServicio: String!
    whatsAppServicio: String!
    nombreResponsable: String!
    direccionServicio: String!
    dias: [String]!
    valorServicio: String!
    representante: Representante!
    ) : Servicio
  }
`
