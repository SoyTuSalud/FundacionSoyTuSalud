import Head from 'next/head'
import { useAuth } from '../context/useAuth'
import { authUser } from '@/graphqlBack-front/paciente/queries'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import { Box, Container, Typography } from '@mui/material'
import { LayoutMain } from '@/components/layouts'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { loginService } from '@/services/auth'
import { signInReducer } from '@/redux/auth/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
  const { t } = useTranslation()
  const [mssgError, setMssgError] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()

  const propsImage = {
    title: t('home:HOME_TITLE'),
    title2: t('home:HOME_TITLE_2'),
    image: '/promo_c1.png',
  }

  const mutation = useMutation({
    mutationFn: (payload) => {
      return loginService(payload)
    },
    onSuccess: ({ data }, variables, context) => {
      const payload = {
        user: {
          correo: data.body.correo,
          role: data.body.role,
          statusAccount: data.statusAccount,
        },
        token: data.body.token,
      }
      dispatch(signInReducer(payload))
      localStorage.setItem('token', data.body.token)

      router.push('/')
    },
    onError: (data, variables, context) => {
      console.log({ data, variables, context })
    },
  })

  const handleSubmit = async (variables) => {
    mutation.mutate(variables)
  }

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
            <Formik
              initialValues={{ correo: '', contrasena: '' }}
              validate={(values) => {
                const errors = {}
                if (!values.correo) {
                  errors.correo = 'Requerido'
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.correo,
                  )
                ) {
                  errors.correo = 'Dirección de correo inválida'
                }
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  handleSubmit(values)
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <Box sx={{ my: 3 }}>
                    <Typography color="textPrimary" variant="h4">
                      {t('navbar:LOG_IN')}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      {t('login:SUB_TITLE')}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      pb: 1,
                      pt: 3,
                    }}
                  />
                  <input
                    type="email"
                    name="correo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.correo}
                    placeholder="Correo Electronico"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <span className="text-red-500">
                    {mssgError && mssgError}
                    {errors.correo && touched.correo && errors.correo}
                  </span>
                  <input
                    type="password"
                    name="contrasena"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contrasena}
                    placeholder="Contraseña"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <span className="text-red-500">
                    {errors.contrasena &&
                      touched.contrasena &&
                      errors.contrasena}
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </Container>
        </Box>
      </LayoutMain>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
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
