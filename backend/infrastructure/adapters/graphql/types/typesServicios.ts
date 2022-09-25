import { gql } from 'apollo-server-micro'

export const typesServicios = gql`

  union UnionServicios = ResponseServicios | ResponseServiciosError
  union UnionServiciosList = ResponseServiciosList | ResponseServiciosError

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

  type ResponseServicios{
      body: Servicios
    status: StatusServicios
  }
  type ResponseServiciosList{
      body: [Servicios]
      status: StatusServicios
  }
  type ResponseServiciosError{
      status: StatusServicios
  }
    type StatusServicios{
    code: String!
    description: String!
  }

  type Query{
    serviciosTabla: UnionServiciosList
    servicio(_id: String) : UnionServicios
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
    ): UnionServicios
  }

`
