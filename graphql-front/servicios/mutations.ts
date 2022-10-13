import { gql } from '@apollo/client'

export const crearServicios = gql`
  mutation Mutation(
    $identificacion: String!
    $foto: String!
    $nombreCompleto: String!
    $tipoDocumento: String!
    $celular: String!
    $departamento: String!
    $municipio: String!
    $direccion: String!
    $servicios: [ServiciosCreate]!
    $cuentaDeAhorros: String!
    $distintivoHabilitacion: String!
    $fotoLogoPublicidad: String!
    $hojaVida: String!
    $resumenCurriculum: String!
    $aceptaConvenio: String!
    $aceptaTratamientoDatos: String!
    $aceptaDocumentoSARLAFT: String!
    $aceptaCodigoEticaSoyTuSalud: String!
    $paginaWeb: String
    $convalidacionIcfes: String
  ) {
    CrearRepresentante(
      identificacion: $identificacion
      foto: $foto
      nombreCompleto: $nombreCompleto
      tipoDocumento: $tipoDocumento
      celular: $celular
      departamento: $departamento
      municipio: $municipio
      direccion: $direccion
      servicios: $servicios
      cuentaDeAhorros: $cuentaDeAhorros
      distintivoHabilitacion: $distintivoHabilitacion
      fotoLogoPublicidad: $fotoLogoPublicidad
      hojaVida: $hojaVida
      resumenCurriculum: $resumenCurriculum
      aceptaConvenio: $aceptaConvenio
      aceptaTratamientoDatos: $aceptaTratamientoDatos
      aceptaDocumentoSARLAFT: $aceptaDocumentoSARLAFT
      aceptaCodigoEticaSoyTuSalud: $aceptaCodigoEticaSoyTuSalud
      paginaWeb: $paginaWeb
      convalidacionIcfes: $convalidacionIcfes
    ) {
      ... on ResponseRepresentante {
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

export const ActualizarEstadoServicio = gql`
  mutation Mutation($habilitado: Boolean!, $identificacion: String!) {
    actualizarEstadoServicio(
      habilitado: $habilitado
      identificacion: $identificacion
    ) {
      nombreCompleto
    }
  }
`
