import {FC, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {useMutation} from "@tanstack/react-query";
import {Field, Form, Formik} from 'formik'
import {useTranslation} from 'next-i18next'
import CloseIcon from '@mui/icons-material/Close'
import {Box} from '@mui/material'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'


import {basicSchema} from '@/src/schema'
import {IAuthSignInDTO} from "@auth/domain/dtos/authSignIn.dto";
import {ResponseEntity} from "@common/models/response.value";
import {soyTuApi} from "@/src/services/axios.config";
import {GetStaticProps} from "next";


const signingService = async( authDataSignIn: IAuthSignInDTO ): Promise<ResponseEntity<null>> => {
  const {data} = await soyTuApi.post<ResponseEntity<null>>("/auth/signing", authDataSignIn)
  return data
}
const SignIn:FC = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const [success, setSuccess] = useState<boolean>(false)
  const [email, setEmail] = useState('')
  const [mssagError, setMssgError] = useState('')

  const mutation = useMutation({
    mutationFn: (payload: IAuthSignInDTO) => {
      return signingService(payload)
    },
    onSuccess: () => {
      setSuccess(true)
    },
    onError: (data, variables, context) => {
      console.log({ data, variables, context })
      setMssgError('error')
    },
  })

  return (
    <Box height="100vh" display="flex" flexDirection="column" className="">
      <Head>
        <title>FundacionSoyTu | Registro</title>
      </Head>
      {!success ? (
        <section className="section-container-register-page">
          <div className="section-container-form  lg:rounded-3xl">
            <div className="shadow-2xl lg:rounded-3xl shadow-slate-400">
              <Formik
                validationSchema={basicSchema}
                initialValues={{
                  tipoDocumento: '',
                  role: '',
                  correo: '',
                  identificacion: '',
                  nombre: '',
                  apellidos: '',
                  celular: '',
                  contrasena: '',
                  confirmContrasena: '',
                }}
                onSubmit={(values, actions) => {
                  mutation.mutate(values as IAuthSignInDTO)
                }}
              >
                {({ errors, touched
                    ,isSubmitting,
                    submitForm,
                  isValid, dirty, values}) => (
                  <Form>
                    <CloseIcon
                      className="mt-4 ml-4 text-black cursor-pointer"
                      onClick={() => router.back()}
                    />
                    <div className="pb-10">
                      <div className="">
                        <div className="flex  lg:ml-0 pt-10 lg:pt-3 justify-center">
                          <Image
                            src="/logo_horizontal-black.png"
                            width={200}
                            height={53}
                            alt="logo"
                            quality={100}
                          />
                        </div>
                      </div>

                      <h6 className=" text-lg font-semibold mt-20 ml-7 lg:text-3xl lg:mt-4 lg:text-center mb-5 text-black">
                        {t('navbar:SIGN_IN')}
                      </h6>

                      <div className="col-12">
                        <Field
                          className="input-field-form"
                          name="role"
                          as="select"
                        >
                          <option value="">Tipo de Usuario *</option>
                          <option>PACIENTE</option>
                          <option>FILANTROPO</option>
                        </Field>
                        {errors.role && touched.role ? (
                          <span className="ml-4 text-red-500">
                            {errors.role}
                          </span>
                        ) : null}
                        <Field
                          className="input-field-form"
                          name="tipoDocumento"
                          as="select"
                        >
                          <option value="">{`${t(
                            'registro:DOCUMENT_TYPE',
                          )} *`}</option>
                          <option>CC</option>
                          <option>CE</option>
                          <option>TI</option>
                          <option>PA</option>
                          <option>RC</option>
                          <option>CD</option>
                          <option>PT</option>
                          <option>MS</option>
                          <option>AS</option>
                          <option>CN</option>
                          <option>SC</option>
                        </Field>
                        {errors.tipoDocumento && touched.tipoDocumento ? (
                          <span className="ml-4 text-red-500">
                            {errors.tipoDocumento}
                          </span>
                        ) : null}
                        <div className="container-fields">
                          <Field
                            className="input-field-form"
                            type="text"
                            name="identificacion"
                            placeholder="Documento *"
                          />
                          {errors.identificacion && touched.identificacion ? (
                            <span className="ml-4 text-red-500">
                              {errors.identificacion}
                            </span>
                          ) : null}
                        </div>
                        <div className="container-fields">
                          <Field
                            className="input-field-form"
                            type="text"
                            name="nombre"
                            placeholder={`${t('registro:FULL_NAME')} *`}
                          />
                          {errors.nombre && touched.nombre ? (
                            <span className="ml-4 text-red-500">
                              {errors.nombre}
                            </span>
                          ) : null}
                        </div>
                        <div className="container-fields">
                          <Field
                            className="input-field-form"
                            type="text"
                            name="apellidos"
                            id="apellidos"
                            placeholder={`${t('registro:FULL_SURNAME')} *`}
                          />
                          {errors.apellidos && touched.apellidos ? (
                            <span className="ml-4 text-red-500">
                              {errors.apellidos}
                            </span>) : null}
                        </div>
                        <div className="container-fields">
                          <Field
                            className="input-field-form"
                            name="celular"
                            type="text"
                            placeholder="Numero Celular *"
                          />
                          {errors.celular && touched.celular ? (
                            <span className="ml-4 text-red-500">
                              {errors.celular}
                            </span>
                          ) : null}
                        </div>
                        <div className="container-fields">
                          <Field
                            className="input-field-form"
                            name="correo"
                            id="correo"
                            placeholder={`${t('login:EMAIL')} *`}
                          />
                          {errors.correo && touched.correo ? (
                            <span className="ml-4 text-red-500">
                              {errors.correo}
                            </span>
                          ) : null}
                        </div>
                        <div className="container-fields">
                          <Field
                            className="input-field-form"
                            type="password"
                            name="contrasena"
                            placeholder={`${t('login:PASSWORD')} *`}
                          />
                          {errors.contrasena && touched.contrasena ? (
                            <span className="ml-4 text-red-500">
                              {errors.contrasena}
                            </span>
                          ) : null}
                        </div>
                        <div className="container-fields">
                          <Field
                            className="input-field-form"
                            type="password"
                            name="confirmContrasena"
                            id=""
                            placeholder={`${t('registro:CONFIRM_PASSWORD')} *`}
                          />
                          {errors.confirmContrasena &&
                          touched.confirmContrasena ? (
                            <span className="ml-4 text-red-500">
                              {errors.confirmContrasena}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      {mssagError ? (
                        <span className="ml-4 text-center text-red-500">
                          {mssagError}
                        </span>
                      ) : null}

                      <div className="text-center mt-10 mb-5">
                        <button
                          className="button button--primary"
                          type="submit"
                          disabled={!isValid || !dirty || isSubmitting}
                          onClick={submitForm}
                        >
                          {t('common:REGISTER')}
                        </button>
                      </div>
                      <div className="col-12 text-center">
                        <Link href="/src/pages2/login" passHref>
                          <strong className="login-text login-text-underline">
                            {t('navbar:LOG_IN')} {t('registro:HAVE_AN_ACCOUNT')}
                          </strong>
                        </Link>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      ) : (
        <Success email={email} />
      )}
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", [
        'common',
        'footer',
        'navbar',
        'home',
        'registro',
        'login',
      ])),
    },
  }
}

const Success:FC<{email: string}> = ({ email }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col section-container-form ">
      <div className="flex flex-col items-center bg-white p-10 rounded-xl max-w-xl shadow-2xl lg:rounded-3xl shadow-slate-400  ">
        <Image
          width={150}
          height={150}
          src={'/email-logo.png'}
          alt="email-iamge"
          quality={100}
        />
        <div className="mt-10">
          <h1 className="text-black text-4xl font-semibold text-center">
            Confirma tu correo electronico
          </h1>
          <p className="mt-5 text-">
            Hemos enviado un mensaje a {email} para verificar tu direccion de
            correo electronico y activar tu cuenta. El enlace tiene un tiempo de
            expiracion de 8 horas.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
