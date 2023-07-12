import {z} from 'zod'

import {TipoDocumentoEnum} from '@common/enums/tipoDocumento.enum'

export const PacienteSchema = z.object({
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
  celular: z.string(),
  correo: z.string().email(),
})

export const PacienteUpdateSchema = z.object({
    identificacion: z.string(),
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
