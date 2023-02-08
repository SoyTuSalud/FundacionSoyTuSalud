
import RepresentanteValue from '../../domain/model/representante.value'
import {IRepresentante} from "@representante/domain/entity/representante.entity";


export const listModelToListEntity = <T extends IRepresentante>(
  representantes: T[],
): IRepresentante[] => {
  return representantes.map((representante) => {
    return new RepresentanteValue(
      representante.aceptaCodigoEticaSoyTuSalud,
      representante.aceptaConvenio,
      representante.aceptaDocumentoSARLAFT,
      representante.aceptaTratamientoDatos,
      representante.celular,
      representante.convalidacionIcfes || '',
      representante.cuentaDeAhorros,
      representante.departamento,
      representante.direccion,
      representante.distintivoHabilitacion,
      representante.foto,
      representante.fotoLogoPublicidad,
      representante.habilitado || false,
      representante.hojaVida,
      representante.identificacion,
      representante.municipio,
      representante.nombreCompleto,
      representante.paginaWeb || '',
      representante.resumenCurriculum,
      representante.tipoDocumento,
    )
  })
}

export const modelToEntity = <T extends IRepresentante>(representante: T): IRepresentante => {
  return new RepresentanteValue(
    representante.aceptaCodigoEticaSoyTuSalud,
    representante.aceptaConvenio,
    representante.aceptaDocumentoSARLAFT,
    representante.aceptaTratamientoDatos,
    representante.celular,
    representante.convalidacionIcfes || '',
    representante.cuentaDeAhorros,
    representante.departamento,
    representante.direccion,
    representante.distintivoHabilitacion,
    representante.foto,
    representante.fotoLogoPublicidad,
    representante.habilitado || false,
    representante.hojaVida,
    representante.identificacion,
    representante.municipio,
    representante.nombreCompleto,
    representante.paginaWeb || '',
    representante.resumenCurriculum,
    representante.tipoDocumento,
  )
}
