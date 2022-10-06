import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { registrarPaciente } from '../graphql-front/paciente/mutations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LayoutMain } from '../components/layouts/LayoutMain'

import useFormData from '../hooks/useFormData'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ResponseCodes } from '../backend/domain/commons/enums/responseCodesEnum'

const Registro = () => {
  const { t } = useTranslation()
  const [error, setMssgError] = useState('')

  const propsImage = {
    title: t('home:tituloHome'),
    title2: t('home:titulohome2'),
    image: '/promo_c1.png',
  }

  const router = useRouter()
  const [crearUsuario, { loading }] = useMutation(registrarPaciente)

  const { form, formData, updateFormData } = useFormData()

  const submitForm = async (e) => {
    e.preventDefault()
    console.log(formData)
    crearUsuario({ variables: formData })
      .then(({ data }) => {
        if (data.crearPaciente.status.code === ResponseCodes.SUCCESS) {
          router.push('/')
        } else{
          setMssgError(data.crearPaciente.status.description)
        }
      })
      .catch((error) => {

      })
  }

  return (
    <LayoutMain propsImage={propsImage} t={t}>
        <section className="section-container-register-page">
          <div className="section-container-form">
            <form
              ref={form}
              onChange={updateFormData}
              onSubmit={submitForm}
              className=""
              id="Form_RegistroPaciente"
            >
              <div className="pb-10">
                <h6 className="title-sign-in">{t('navbar:registro')}</h6>

                <div className="col-12">
                  <select
                    className="input-field-form"
                    defaultValue={t('registro:tipoDocumento')}
                    name="tipoDocumento"
                    id="tipoDocumento"
                  >
                    <option disabled>{t('registro:tipoDocumento')}</option>
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
                      placeholder={t('registro:nombreCompleto')}
                    />
                  </div>
                  <div className="container-fields">
                    <input
                      className="input-field-form"
                      type="text"
                      name="apellidos"
                      id="apellidos"
                      placeholder={t('registro:apellidoCompleto')}
                    />
                  </div>
                  <div className="container-fields">
                    <input
                      className="input-field-form"
                      type="text"
                      name="celular"
                      id="celular"
                      placeholder={t('footer:telefono')}
                    />
                  </div>
                  <div className="container-fields">
                    <input
                      className="input-field-form"
                      type="correo"
                      name="correo"
                      id="correo"
                      placeholder={t('login:email')}
                    />
                  </div>
                  <div className="container-fields">
                    <input
                      className="input-field-form"
                      type="password"
                      name="contrasena"
                      id="contrasena"
                      placeholder={t('login:constrasena')}
                      autoComplete="on"
                    />
                  </div>
                  <div className="container-fields">
                    <input
                      className="input-field-form"
                      type="password"
                      name=""
                      id=""
                      placeholder={t('registro:confirmarContra')}
                      autoComplete="on"
                    />
                  </div>
                </div>

                <div className="text-center mt-10 mb-5">
                  <button className="button button--primary" type="submit">
                    Registrar
                  </button>
                </div>
                <div className="col-12 text-center">
                  <Link href="/login" passHref>
                    <strong className="login-text">
                      <a className="login-text-underline">
                        {t('navbar:iniciarSesion')}
                      </a>{' '}
                      {t('registro:ifCuenta')}
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
        {error&& <h1 className='text-red-500'>{error}</h1>}
    </LayoutMain>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
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
