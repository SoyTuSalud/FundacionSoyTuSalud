import {z} from 'zod'

import { TipoDocumentoEnum } from '@common/enums/tipoDocumento.enum';

import {ProfileTypeEnum} from "@filantropo/domain/enum/profileTypeEnum";


export const FilantropoDTOSchema = z.object({
  identificacion: z.string(),
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
  celular: z.string(),
  correo: z.string().email(),
  profileType: z.enum([
    ProfileTypeEnum.PRIVATE,
    ProfileTypeEnum.PUBLIC
  ])
})

export const filntropoUpdateSchema = z.object({
    identificacion:z.string(),
    foto: z.string(),
    fechaNacimiento: z.string(),
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
