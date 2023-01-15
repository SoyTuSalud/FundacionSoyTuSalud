import { Paciente } from "../entity/paciente.entity"
import { GeneroEnum } from "../enum/genero.enum"
import { IdentidadGeneroEnum } from "../enum/identidadGenero.enum"
import { OrientacionSexualEnum } from "../enum/orientacionSexual.enum"
import { TipoDiscapacidadEnum } from "../enum/tipoDiscapacida.enum"
import { TipoDocumentoEnum } from "../enum/tipoDocumento.enum"

class PacienteValue implements Paciente {
  identificacion: string
  nombre: string
  apellidos: string
  tipoDocumento: TipoDocumentoEnum
  celular: string
  correo: string
  formularioTuHistoria: boolean | undefined  = false
  aplicaEnFundacion: boolean | undefined
  matchService: boolean | undefined
  foto: string | undefined
  fechaNacimiento: string | undefined
  direccion: string | undefined
  municipio: string | undefined
  departamento: string | undefined
  EPS: string | undefined
  tuHistoria: string | undefined
  serviciosSolicitado: [string] | undefined
  historiaClinica: string | undefined
  sisben: string | undefined
  autorizacionFoto: boolean | undefined
  recopilacionDatos: boolean | undefined
  fechaSolicitud: string | undefined
  comunidad: string | undefined
  genero: GeneroEnum | undefined
  discapacitado: boolean | undefined
  tipoDiscapacidad: TipoDiscapacidadEnum | undefined
  victimaViolencia: boolean | undefined
  identidadGenero: IdentidadGeneroEnum | undefined
  orientacionSexual: OrientacionSexualEnum | undefined
  grupoPoblacional: string | undefined

  constructor(
    identificacion: string,
    nombre: string,
    apellidos: string,
    tipoDocumento: TipoDocumentoEnum,
    celular: string,
    correo: string,
    formularioTuHistoria?: boolean,
    aplicaEnFundacion?: boolean,
    matchService?: boolean,
    foto?: string,
    fechaNacimiento?: string,
    direccion?: string,
    municipio?: string,
    departamento?: string,
    EPS?: string,
    tuHistoria?: string,
    serviciosSolicitado?: [string],
    historiaClinica?: string,
    sisben?: string,
    autorizacionFoto?: boolean,
    recopilacionDatos?: boolean,
    fechaSolicitud?: string,
    comunidad?: string,
    genero?: GeneroEnum,
    discapacitado?: boolean,
    tipoDiscapacidad?: TipoDiscapacidadEnum,
    victimaViolencia?: boolean,
    identidadGenero?: IdentidadGeneroEnum,
    orientacionSexual?: OrientacionSexualEnum,
    grupoPoblacional?: string,
  ) {
    this.identificacion = identificacion
    this.nombre = nombre
    this.apellidos = apellidos
    this.tipoDocumento = tipoDocumento
    this.celular = celular
    this.correo = correo
    this.formularioTuHistoria = formularioTuHistoria
    this.aplicaEnFundacion = aplicaEnFundacion
    this.matchService = matchService
    this.foto = foto
    this.genero = genero
    this.fechaNacimiento = fechaNacimiento
    this.direccion = direccion
    this.discapacitado = discapacitado
    this.tipoDiscapacidad = tipoDiscapacidad
    this.victimaViolencia = victimaViolencia
    this.identidadGenero = identidadGenero
    this.orientacionSexual = orientacionSexual
    this.grupoPoblacional = grupoPoblacional
    this.municipio = municipio
    this.departamento = departamento
    this.EPS = EPS
    this.tuHistoria = tuHistoria
    this.serviciosSolicitado = serviciosSolicitado
    this.historiaClinica = historiaClinica
    this.sisben = sisben
    this.autorizacionFoto = autorizacionFoto
    this.recopilacionDatos = recopilacionDatos
    this.comunidad = comunidad
    this.fechaSolicitud = fechaSolicitud
  }
}

export default PacienteValue
