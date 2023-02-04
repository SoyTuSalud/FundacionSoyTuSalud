import {TipoDocumentoEnum} from "@common/enums/tipoDocumento.enum";

import {ProfileTypeEnum} from "@filantropo/domain/enum/profileTypeEnum";



export interface Filantropo {
  tipoDocumento: TipoDocumentoEnum
  identificacion: string
  nombre: string
  apellidos: string
  celular: string
  correo: string
  numeroDonaciones: number
  totalDonado: number
  pacientesApoyados: string[]
  profileType: ProfileTypeEnum
}

