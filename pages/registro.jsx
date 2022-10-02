import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth'
import { useMutation } from '@apollo/client'
import { registrarUsuario } from '../graphql-front/paciente/mutations'
import Link from 'next/link'
import { auth } from '../firebase/initConfig'
import { useRouter } from 'next/router'
import { LayoutMain } from '../components/layouts/LayoutMain'

import useFormData from '../hooks/useFormData'
import PrivatePages from '../components/PrivatePages'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ResponseCodes } from '../backend/domain/commons/enums/responseCodesEnum'

const Registro = () => {
  const { t } = useTranslation()

  const propsImage = {
    title: t('home:tituloHome'),
    title2: t('home:titulohome2'),
    image: '/promo_c1.png',
  }

  const router = useRouter()
  const [crearUsuario, { loading }] = useMutation(registrarUsuario)

  const { form, formData, updateFormData } = useFormData()

  const submitForm = async (e) => {
    e.preventDefault()

    crearUsuario({ variables: formData })
      .then(({ data }) => {
        if (data.crearUsuario.status.code === ResponseCodes.ERROR) {
          deleteUser()
        }
      })
      .catch((error) => {})

    await createUserWithEmailAndPassword(
      auth,
      formData.correo,
      formData.password,
    )
      .then((user) => {
        delete formData.password
        formData['uid'] = user.user.uid
        console.log(formData)

        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <LayoutMain propsImage={propsImage} t={t}>
      <PrivatePages login={false}>
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
                      name="password"
                      id="password"
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
      </PrivatePages>
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
