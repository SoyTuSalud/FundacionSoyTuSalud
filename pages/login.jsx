import Head from 'next/head'
import { useAuth } from '../context/useAuth'
import { authUser } from '../graphql-front/paciente/queries'
import { client } from '../graphql-front/initClientSide'
import useFormData from '../hooks/useFormData'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import { LayoutMain } from '../components/layouts'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'


const Login = () => {
  const { t } = useTranslation()

  const propsImage = {
    title: t('home:tituloHome'),
    title2: t('home:titulohome2'),
    image: '/promo_c1.png',
  }

  // const { setAuthUser } = useAuth()
  const { form, formData, updateFormData } = useFormData()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await client
    .query({
      query: authUser,

      variables:{
        correo: formData.email,
        contrasena: formData.password,
      },
    })
    
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Debe ser un email valido')
        .max(255)
        .required('El email es requerido'),
      password: Yup.string().max(255).required('Contraseña requerida'),
    }),
    onSubmit: () => {
      router.push('/')
    },
  })

  return (
    <>
      <Head>
        <title>Login | Soy Tu Salud</title>
      </Head>
      <LayoutMain propsImage={propsImage} t={t}>
        <Box
          component="main"
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
          }}
        >
          <Container maxWidth="md" className="mb-5">
            <form ref={form} onChange={updateFormData} onSubmit={handleSubmit}>
              <Box sx={{ my: 3 }}>
                <Typography color="textPrimary" variant="h4">
                  {t('navbar:iniciarSesion')}
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  {t('login:subTitle')}
                </Typography>
              </Box>
              <Box
                sx={{
                  pb: 1,
                  pt: 3,
                }}
              ></Box>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label={t('login:email')}
                margin="normal"
                name="correo"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(
                  formik.touched.password && formik.errors.password,
                )}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label={t('login:contrasena')}
                margin="normal"
                name="contrasena"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                variant="outlined"
              />
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="outlined"
                >
                  {t('navbar:iniciarSesion')}
                </Button>
              </Box>
              <Typography color="textSecondary" variant="body2">
                {t('login:noCuenta')}?{' '}
                  <Link href="/registro" >
                    <a className='text-violet-800 cursor-pointer'>{t('navbar:registro')}</a>
                  </Link>
              </Typography>
            </form>
          </Container>
        </Box>
      </LayoutMain>
    </>
  )
}

export const getStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'login',
        'footer',
        'navbar',
        'home',
      ])),
    },
  }
}

export default Login
