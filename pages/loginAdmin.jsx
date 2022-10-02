import { LockClosedIcon } from '@heroicons/react/solid'
import { client } from '../graphql-front/initClientSide'
import { loginUserAdmin } from '../graphql-front/paciente/queries'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Formik } from 'formik'
import { ResponseCodes } from '../backend/domain/commons/enums/responseCodesEnum'
import { useState } from 'react'


const LoginAdmin = () => {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (variables) => {
    await client
      .query({
        query: loginUserAdmin,

        variables,
      })
      .then(({ data }) => {
        if (data.loginAdmin.status.code === ResponseCodes.ERROR_AUTH) {
          return setError(data.loginAdmin.status.description)
        }
        router.push('/private/admin')
      })
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="text-center">
              <Image
                src="/logo_horizontal-black.png"
                width={'230px'}
                height={'63px'}
                alt="logo"
              />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Fundacion
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>

          <span className="text-red-500">{error}</span>

          <Formik
            initialValues={{ correo: '', contrasena: '' }}
            validate={(values) => {
              const errors = {
                correo: {},
              }
              if (!values.correo) {
                errors.correo = 'Requerido'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
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
                  {errors.contrasena && touched.contrasena && errors.contrasena}
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
        </div>
      </div>
    </>
  )
}

export default LoginAdmin
