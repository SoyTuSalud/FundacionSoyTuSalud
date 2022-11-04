import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useMutation } from '@apollo/client'
import { registrarFilantropo } from '../../graphql-front/filantropos/mutations'
import { auth } from '/firebase/initConfig'
import { useRouter } from 'next/router'
import { LayoutMain } from '/components/layouts/LayoutMain'

import Image from 'next/image'
import useFormData from '/hooks/useFormData'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import Head from 'next/head'

const Filatroposregistro = () => {
  const router = useRouter()
  const [crearFilantropo] = useMutation(registrarFilantropo)
  const { t } = useTranslation()

  const { form, formData, updateFormData } = useFormData()

  const submitForm = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(
      auth,
      formData.correo,
      formData.password,
    )
      .then((user) => {
        delete formData.password
        formData['uid'] = user.user.uid
        console.log(formData)
        crearFilantropo({ variables: formData })
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // <LayoutMain propsImage={propsImage} t={t}>
  return (
    <>
      <Head> <title>FundacionSoyTu | Registro Filantropos</title> </Head>
      <section className="section-container-register-page">
        <div className="section-container-form rounded-lg">
          <form
            ref={form}
            onChange={updateFormData}
            onSubmit={submitForm}
            id="Form_RegistroPaciente"
          >
            <div className="pb-10">
              <div className="flex justify-center">
                <div className="mt-10">
                  <Image
                    src="/logo_horizontal-black.png"
                    width={'250px'}
                    height={'70px'}
                    alt="logo"
                  />
                </div>
              </div>

              <h6 className="title-sign-in text-center mb-10">
                {t('navbar:SIGN_IN')} Filantropos
              </h6>

              <div className="col-12">
                <select
                  className="input-field-form"
                  defaultValue={t('registro:DOCUMENT_TYPE')}
                  name="tipoDocumento"
                  id="tipoDocumento"
                >
                  <option disabled>{t('registro:DOCUMENT_TYPE')}</option>
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
                </select>
                <div className="container-fields">
                  <input
                    className="input-field-form"
                    type="text"
                    name="identificacion"
                    id="identificacion"
                    placeholder="Documento"
                  />
                </div>
                <div className="container-fields">
                  <input
                    className="input-field-form"
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder={t('registro:FULL_NAME')}
                  />
                </div>
                <div className="container-fields">
                  <input
                    className="input-field-form"
                    type="text"
                    name="apellidos"
                    id="apellidos"
                    placeholder={t('registro:FULL_SURNAME')}
                  />
                </div>
                <div className="container-fields">
                  <input
                    className="input-field-form"
                    type="text"
                    name="celular"
                    id="celular"
                    placeholder={t('footer:PHONE')}
                  />
                </div>
                <div className="container-fields">
                  <input
                    className="input-field-form"
                    type="correo"
                    name="correo"
                    id="correo"
                    placeholder={t('login:EMAIL')}
                  />
                </div>
                <div className="container-fields">
                  <input
                    className="input-field-form"
                    type="password"
                    name="contrasena"
                    id="password"
                    placeholder={t('login:PASSWORD')}
                    autoComplete="on"
                  />
                </div>
                <div className="container-fields">
                  <input
                    className="input-field-form"
                    type="password"
                    name=""
                    id=""
                    placeholder={t('registro:CONFIRM_PASSWORD')}
                    autoComplete="on"
                  />
                </div>
              </div>

              <div className="text-center mt-10 mb-5">
                <button className="button button--primary" type="submit">
                  {t('common:REGISTER')}
                </button>
              </div>
              <div className="col-12 text-center">
                <Link href="/login" passHref>
                  <strong className="login-text">
                    <a className="login-text-underline">{t('navbar:LOG_IN')}</a>{' '}
                    {t('registro:HAVE_AN_ACCOUNT')}
                  </strong>
                </Link>
              </div>
            </div>
          </form>
          <button
            type="submit"
            id="showtoast"
            style={{ display: 'none' }}
          ></button>
          <button
            type="submit"
            id="showtoast2"
            style={{ display: 'none' }}
          ></button>
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

export default Filatroposregistro
