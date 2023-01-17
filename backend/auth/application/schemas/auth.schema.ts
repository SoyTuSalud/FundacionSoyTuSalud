import {z} from 'zod'
import {roleEnum} from '../../../common/enums/role.enum'

const passwordRuler = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

export const AuthDTOSchema = z.object({
  correo: z.string().email(),
  contrasena: z.string().regex(passwordRuler)
})

export const AuthSignInDTOSchema = z.object({

  role: z.enum([roleEnum.FILANTROPO, roleEnum.PACIENTE, roleEnum.REPRESENTANTE]),
  correo: z.string().email(),
  contrasena: z.string().regex(passwordRuler)

})
