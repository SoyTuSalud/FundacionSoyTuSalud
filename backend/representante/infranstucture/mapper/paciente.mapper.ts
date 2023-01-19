import {Paciente} from '../../domain/entity/representante.entity'
import RepresentanteValue from '../../domain/model/representante.value'


export const listModelToListEntity = <T extends Paciente>(
  pacientes: T[],
): Paciente[] => {
  return pacientes.map((paciente) => {
    return new RepresentanteValue(
      paciente.identificacion,
      paciente.nombre,
      paciente.apellidos,
      paciente.tipoDocumento,
      paciente.celular,
      paciente.correo,
      paciente.formularioTuHistoria,
      paciente.aplicaEnFundacion,
      paciente.matchService,
      paciente.foto,
      paciente.fechaNacimiento,
      paciente.direccion,
      paciente.municipio,
      paciente.departamento,
      paciente.EPS,
      paciente.tuHistoria,
      paciente.serviciosSolicitado,
      paciente.historiaClinica,
      paciente.sisben,
      paciente.autorizacionFoto,
      paciente.recopilacionDatos,
      paciente.fechaSolicitud,
      paciente.comunidad,
      paciente.genero,
      paciente.discapacitado,
      paciente.tipoDiscapacidad,
      paciente.victimaViolencia,
      paciente.identidadGenero,
      paciente.orientacionSexual,
      paciente.grupoPoblacional,
    )
  })
}

export const modelToEntity = <T extends Paciente>(paciente: T): Paciente => {
  return new RepresentanteValue(
    paciente.identificacion,
    paciente.nombre,
    paciente.apellidos,
    paciente.tipoDocumento,
    paciente.celular,
    paciente.correo,
    paciente.formularioTuHistoria,
    paciente.aplicaEnFundacion,
    paciente.matchService,
    paciente.foto,
    paciente.fechaNacimiento,
    paciente.direccion,
    paciente.municipio,
    paciente.departamento,
    paciente.EPS,
    paciente.tuHistoria,
    paciente.serviciosSolicitado,
    paciente.historiaClinica,
    paciente.sisben,
    paciente.autorizacionFoto,
    paciente.recopilacionDatos,
    paciente.fechaSolicitud,
    paciente.comunidad,
    paciente.genero,
    paciente.discapacitado,
    paciente.tipoDiscapacidad,
    paciente.victimaViolencia,
    paciente.identidadGenero,
    paciente.orientacionSexual,
    paciente.grupoPoblacional,
  )
}
