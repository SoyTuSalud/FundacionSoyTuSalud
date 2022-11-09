import { gql } from 'apollo-server-micro'

export const serviciosTablaData = gql`
  query RepresentantesTabla {
    RepresentantesTabla {
      ... on ResponseRepresentanteList {
        body {
          _id
          foto
          identificacion
          nombreCompleto
          departamento
          habilitado
          municipio
          direccion
          servicios {
            tipoServicio
          }
        }
        status {
          code
          description
        }
      }
      ... on ResponseRepresentanteError {
        status {
          code
          description
        }
      }
    }
  }
`

export const servicioDetalle = gql`
  query Representante($_id: String!) {
    Representante(_id: $_id) {
      ... on ResponseRepresentante {
        body {
          celular
          aceptaCodigoEticaSoyTuSalud
          _id
          aceptaConvenio
          aceptaDocumentoSARLAFT
          aceptaTratamientoDatos
          convalidacionIcfes
          cuentaDeAhorros
          departamento
          direccion
          distintivoHabilitacion
          foto
          fotoLogoPublicidad
          habilitado
          hojaVida
          identificacion
          municipio
          paginaWeb
          nombreCompleto
          resumenCurriculum
          servicios {
            _id
            celularServicio
            dias
            especialidad
            direccionServicio
            horaFin
            horaInicio
            modalidad
            nombreResponsable
            tipoServicio
            valorServicio
            whatsAppServicio
          }
          tipoDocumento
        }
        status {
          code
          description
        }
      }
      ... on ResponseRepresentanteError {
        status {
          code
          description
        }
      }
    }
  }
`
