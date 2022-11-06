import { gql } from 'apollo-server-micro'

export const typesEnums = gql`
  enum GeneroEnum {
    MASCULINO
    FEMENINO
  }
  enum IdentidadGeneroEnum {
    MASCULINO
    FEMENINO
    TRAVESTI
    TRANSEXUAL
    TRANSGENERO
    NINGUNA
    NO_BINARIO
  }
  enum OrientacionSexualEnum {
    HETEROSEXUAL
    LESBIANA
    BISEXUAL
    GAY
    ASEXUAL
    NINGUNA
  }
  enum TipoDiscapacidadEnum {
    PERMANENTE
    TEMPORAL
    AUDITIVA
    COGNITIVA
    FISICA
    MENTAL
    VISUAL
    MULTIPLE
  }
  enum TipoDocumentoEnum {
    CC
    CE
    TI
    PA
    RC
    CD
    SC
    CN
    AS
    MS
    PT
    ERROR
  }
`
