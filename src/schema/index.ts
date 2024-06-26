import * as yup from 'yup'

const nameRuler = /^[a-zA-ZÀ-ú]'?([a-zA-ZÀ-ú]|\.| |-)+$/
const passwordRuler = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

export const basicSchema = yup.object().shape({
  correo: yup.string().email('Ingrese un correo valido').required('Requerido'),
  identificacion: yup.string().min(5).required('Requerido'),
  nombre: yup.string().matches(nameRuler,"Ingresa un nombre valido").required('Requerido'),
  apellidos: yup.string().matches(nameRuler,"Ingresa una apellido valido").required('Requerido'),
  celular: yup
    .string()
    .test('len', 'Ingresa un numero valido', val  => val?.length === 10)
    .required('Requerido'),
  contrasena: yup
    .string()
    .min(8, "La contraseña debe tener minimo 8 caracteres")
    .matches(passwordRuler, {
      message:
        'La contraseña debe tener minimo 8 caracteres, una letra mayuscula, una letra minuscula y un numero',
    })
    .required('Requerido'),
  confirmContrasena: yup
    .string()
    .oneOf([yup.ref('contrasena'), null], 'Las contraseñas deben Coincidir')
    .required('Requerido'),
  role: yup.string().required('Requerido'),
  tipoDocumento: yup.string().required('Requerido')
})
