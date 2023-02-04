import {Filantropo} from '@filantropo/domain/entity/filantropo.entity'
import FilantropoValue from '@filantropo/domain/model/filantropo.value'


export const listModelToListEntity = <T extends Filantropo>(filantropos: T[],): Filantropo[] => {
  return filantropos.map((filantropo) => {
    return new FilantropoValue(
      filantropo.apellidos,
      filantropo.celular,
      filantropo.correo,
      filantropo.identificacion,
      filantropo.nombre,
      filantropo.numeroDonaciones,
      filantropo.pacientesApoyados,
      filantropo.profileType,
      filantropo.tipoDocumento,
      filantropo.totalDonado,
    )
  })
}

export const modelToEntity = <T extends Filantropo>(filantropo: T): Filantropo => {
  return new FilantropoValue(
    filantropo.apellidos,
    filantropo.celular,
    filantropo.correo,
    filantropo.identificacion,
    filantropo.nombre,
    filantropo.numeroDonaciones,
    filantropo.pacientesApoyados,
    filantropo.profileType,
    filantropo.tipoDocumento,
    filantropo.totalDonado,
  )
}
