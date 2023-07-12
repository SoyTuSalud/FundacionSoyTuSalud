import {z} from 'zod'
import {roleEnum} from '@common/enums/role.enum'
import {TipoDocumentoEnum} from "@common/enums/tipoDocumento.enum";

const passwordRuler = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

export const AuthDTOSchema = z.object({
  correo: z.string().email(),
  contrasena: z.string()
})

export const AuthSignInDTOSchema = z.object({

  role: z.enum([roleEnum.FILANTROPO, roleEnum.PACIENTE, roleEnum.REPRESENTANTE]),
  correo: z.string().email(),
  contrasena: z.string().regex(passwordRuler),
  identificacion: z.string(),
  nombre: z.string().regex(/^[a-zA-ZÀ-ú]'?([a-zA-ZÀ-ú]|\.| |-)+$/),
  apellidos: z.string().regex(/^[a-zA-ZÀ-ú]'?([a-zA-ZÀ-ú]|\.| |-)+$/),
  tipoDocumento: z.enum([
    TipoDocumentoEnum.CEDULA_CIUDADANIA,
    TipoDocumentoEnum.CEDULA_EXTRANJERA,
    TipoDocumentoEnum.TARJETA_IDENTIDAD,
    TipoDocumentoEnum.PASAPORTE,
    TipoDocumentoEnum.REGISTO_CIVIL,
    TipoDocumentoEnum.CARNE_DIMPLOMATICO,
    TipoDocumentoEnum.SALVOCONDUCTO,
    TipoDocumentoEnum.CERTIFICADO_NACIDO_VIVO,
    TipoDocumentoEnum.ADULTO_SIN_IDENTIFICAR,
    TipoDocumentoEnum.MENOR_SIN_IDENTIFICAR,
    TipoDocumentoEnum.PERMISO_PROTECCION_TEMPORAL
  ]),
  celular: z.string()
})
