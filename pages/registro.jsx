import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { registrarPaciente } from '../graphql-front/paciente/mutations'
import { registrarFilantropo } from '../graphql-front/filantropos/mutations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LayoutMain } from '../components/layouts/LayoutMain'
import CloseIcon from '@mui/icons-material/Close'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ResponseCodes } from '../backend/domain/commons/enums/responseCodesEnum'
import Image from 'next/image'
import Head from 'next/head'
import { Field, Form, Formik } from 'formik'
import { basicSchema } from '../schema'

const Registro = () => {
  const { t } = useTranslation()
  const [agregarPaciente, resultPaciente] = useMutation(registrarPaciente)
  const [agregarFilantropo, resultFiltrantropo] = useMutation(registrarFilantropo)
  const [mssagError, setMssgError] = useState('')

  const router = useRouter()

  const submit = (variables) => {
    if (variables.tipoUsuario === 'PACIENTE') {
      agregarPaciente({ variables }).then(({ data }) => {
        if (data.crearPaciente.status.code === ResponseCodes.SUCCESS) {
          router.push('/')
        } else {
          setMssgError(data.crearPaciente.status.description)
        }
      })
    } else {
      agregarFilantropo({ variables }).then(({ data }) => {
        if (data.crearFilantropo.status.code === ResponseCodes.SUCCESS) {
          router.push('/')
        } else {
          setMssgError(data.crearFilantropo.status.description)
        }
      })
    }
  }

  return (
    <>
      <Head>
        <title>FundacionSoyTu | Registro Pacientes</title>
      </Head>
      <section className="section-container-register-page">
        <div className="section-container-form rounded-3xl">
          <div className="shadow-2xl shadow-slate-400">
            <Formik
              validationSchema={basicSchema}
              initialValues={{
                tipoDocumento: '',
                tipoUsuario: '',
                correo: '',
                identificacion: '',
                nombre: '',
                apellidos: '',
                celular: '',
                contrasena: '',
                confirmContrasena: '',
              }}
              onSubmit={(values, actions) => {
                submit(values)
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <CloseIcon
                    className="mt-4 ml-4 text-black cursor-pointer"
                    onClick={() => router.back()}
                  />
                  <div className="pb-10">
                    <div className="flex justify-center">
                      <div className="mt-10">
                        <Image
                          src="/logo_horizontal-black.png"
                          width={'200px'}
                          height={'53px'}
                          alt="logo"
                          quality={100}
                        />
                      </div>
                    </div>

                    <h6 className=" text-3xl mt-4 text-center mb-5 text-black">
                      {t('navbar:SIGN_IN')}
                    </h6>

                    <div className="col-12">
                      <Field
                        className="input-field-form"
                        name="tipoUsuario"
                        as="select"
                      >
                        <option value="">Tipo de Usuario *</option>
                        <option>PACIENTE</option>
                        <option>FILANTROPO</option>
                      </Field>
                      {errors.tipoUsuario && touched.tipoUsuario ? (
                        <span className="ml-4 text-red-500">
                          {errors.tipoUsuario}
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
                          </span>
                        ) : null}
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
                      <span className="ml-4 text-center text-red-500">{mssagError}</span>
                    ) : null}

                    <div className="text-center mt-10 mb-5">
                      <button className="button button--primary" type="submit">
                        {t('common:REGISTER')}
                      </button>
                    </div>
                    <div className="col-12 text-center">
                      <Link href="/login" passHref>
                        <strong className="login-text">
                          <a className="login-text-underline">
                            {t('navbar:LOG_IN')}
                          </a>{' '}
                          {t('registro:HAVE_AN_ACCOUNT')}
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
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
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

export default Registro
