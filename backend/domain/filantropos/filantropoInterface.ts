import { Schema } from 'mongoose'
import { ProfileTypeEnum } from '../commons/enums/profileTypeEnum'
import { TipoDocumentoEnum } from '../commons/enums/tipoDocumentoEnum'

export interface Filantropo {
  tipoDocumento: string
  identificacion: TipoDocumentoEnum
  nombre: string
  celular: string
  direccion: string
  correo: string
  numeroDonaciones: number
  totalDonado: number
  pacientesApoyados: [Schema.Types.ObjectId]
  profileType: ProfileTypeEnum
}
