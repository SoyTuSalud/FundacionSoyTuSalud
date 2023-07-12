export class UpdatePacienteDTO {
  identificacion: string
  formularioTuHistoria: boolean
  foto: string
  fechaNacimiento: string
  direccion: string
  municipio: string
  departamento: string
  EPS: string
  tuHistoria: string
  serviciosSolicitado: [string]
  historiaClinica: string
  sisben: string
  autorizacionFoto: boolean
  recopilacionDatos: boolean
  fechaSolicitud: string
  constructor(
    identificacion: string,
    foto: string,
    fechaNacimiento: string,
    direccion: string,
    municipio: string,
    departamento: string,
    EPS: string,
    tuHistoria: string,
    serviciosSolicitado: [string],
    historiaClinica: string,
    sisben: string,
    autorizacionFoto: boolean,
    recopilacionDatos: boolean
  ) {
    this.identificacion = identificacion
    this.formularioTuHistoria = true
    this.foto = foto
    this.fechaNacimiento = fechaNacimiento
    this.direccion = direccion
    this.municipio = municipio
    this.departamento = departamento
    this.EPS = EPS
    this.tuHistoria = tuHistoria
    this.serviciosSolicitado = serviciosSolicitado
    this.historiaClinica = historiaClinica
    this.sisben = sisben
    this.autorizacionFoto = autorizacionFoto
    this.recopilacionDatos = recopilacionDatos
    this.fechaSolicitud = new Date().toISOString().split('T')[0]
  }
}
