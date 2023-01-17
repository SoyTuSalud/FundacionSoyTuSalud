import {z} from 'zod'
import {TipoDocumentoEnum} from '../../domain/enum/tipoDocumento.enum'
import {ProfileTypeEnum} from "../../domain/enum/profileTypeEnum";


export const FilantropoDTOSchema = z.object({
  identificacion: z.number().positive().gte(10000).lte(9999999999),
  nombre: z.string().regex(/^[a-zA-ZÀ-ú]'?([a-zA-ZÀ-ú]|\.| |-)+$/),
  apellidos: z.string().regex(/^[a-zA-ZÀ-ú]'?([a-zA-ZÀ-ú]|\.| |-)+$/),
  TipoDocumento: z.enum([
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
    TipoDocumentoEnum.PERMISO_PROTECCION_TEMPORAL,
  ]),
  celular: z.number().positive().gte(3000000000).lte(9999999999),
  correo: z.string().email(),
  direccion: z.string(),
  profileType: z.enum([
    ProfileTypeEnum.PRIVATE,
    ProfileTypeEnum.PUBLIC
  ])
})

export const filntropoUpdateSchema = z.object({
    identificacion: z.number().positive().gte(10000).lte(9999999999),
    foto: z.string(),
    fechaNacimiento: z.string(),
    direccion: z.string(),
    municipio: z.string(),
    departamento: z.string(),
    EPS: z.string(),
    tuHistoria: z.string(),
    serviciosSolicitado: z.string().array(),
    historiaClinica: z.string(),
    sisben: z.string(),
    autorizacionFoto: z.boolean(),
    recopilacionDatos: z.boolean()
})
