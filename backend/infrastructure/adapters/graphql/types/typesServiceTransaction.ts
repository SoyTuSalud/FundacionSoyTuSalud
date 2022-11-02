import { gql } from 'apollo-server-micro'

export const typesServicios = gql`

  union UnionServicios = ResponseServicios | ResponseServiciosError
  union UnionServiciosList = ResponseServiciosList | ResponseServiciosError

  type Servicios {
    _id: ID!
    pacienteId: Paciente
    filantropoId: Filantropo
    representanteId: Representante
    servicioSolicitado: Servicios
    fechaCreacion: String
    fechaCita:String
    fechaFin: String
    precio: String
    status: String
    nroPago: String
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
      valorServicio: String!
      representante: String!
    ): UnionServicios
  }

`
