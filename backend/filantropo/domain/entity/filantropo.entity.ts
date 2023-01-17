import {TipoDocumentoEnum} from "../enum/tipoDocumento.enum";
import {ProfileTypeEnum} from "../enum/profileTypeEnum";



export interface Filantropo {
  tipoDocumento: TipoDocumentoEnum
  identificacion: string
  nombre: string
  apellidos: string
  celular: string
  direccion: string
  correo: string
  numeroDonaciones: number
  totalDonado: number
  pacientesApoyados: string[]
  profileType: ProfileTypeEnum
}

