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
    valorServicio: Int!
    representante: Representante!
  }

  type Query{
    serviciosTabla: [Servicios]
    servicio(_id: String) : Servicios
  }

  type Mutation {
    crearServicio(
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
      valorServicio: Int!
      representante: String!
    ): Servicios
  }

`
