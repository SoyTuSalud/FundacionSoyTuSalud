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
      {/* <PrivatePages login={false}> */}
      <main className="main">
        {/* <!-- section start--> */}
        <section className="section background--brown">
          <div className="container">
            <div className="row offset-margin">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-2 margin-bottom"></div>
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-6 margin-bottom">
                <form
                  ref={form}
                  onChange={updateFormData}
                  onSubmit={submitForm}
                  className="form account-form sign-up-form"
                  id="Form_RegistroPaciente"
                >
                  <div className="form__fieldset">
                    <h6 className="form__title">{t('navbar:registro')}</h6>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <select
                            className="form__field"
                            defaultValue={t('registro:tipoDocumento')}
                            name="tipoDocumento"
                            id="tipoDocumento"
                          >
                            <option disabled>
                              {t('registro:tipoDocumento')}
                            </option>
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
                        </div>
                        <div className="row">
                          <input
                            className="form__field"
                            type="text"
                            name="identificacion"
                            id="identificacion"
                            placeholder="Documento"
                          />
                        </div>
                        <div className="row">
                          <input
                            className="form__field"
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder={t('registro:nombreCompleto')}
                          />
                        </div>
                        <div className="row">
                          <input
                            className="form__field"
                            type="text"
                            name="apellidos"
                            id="apellidos"
                            placeholder={t('registro:apellidoCompleto')}
                          />
                        </div>
                        <div className="row">
                          <input
                            className="form__field"
                            type="text"
                            name="celular"
                            id="celular"
                            placeholder={t('footer:telefono')}
                          />
                        </div>
                        <div className="row">
                          <input
                            className="form__field"
                            type="correo"
                            name="correo"
                            id="correo"
                            placeholder={t('login:email')}
                          />
                        </div>
                        <div className="row">
                          <input
                            className="form__field"
                            type="password"
                            name="password"
                            id="password"
                            placeholder={t('login:constrasena')}
                            autoComplete="on"
                          />
                        </div>
                        <div className="row">
                          <input
                            className="form__field"
                            type="password"
                            name=""
                            id=""
                            placeholder={t('registro:confirmarContra')}
                            autoComplete="on"
                          />
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <button className="form__submit" type="submit">
                          Registrar
                        </button>
                      </div>
                      <div className="col-12 text-center">
                        <Link href="/login" passHref>
                          <strong className="cursor-pointer">
                            <a className="form__link btn_IniciarUsaurio2">
                              {t('navbar:iniciarSesion')}
                            </a>{' '}
                            {t('registro:ifCuenta')}
                          </strong>
                        </Link>
                      </div>
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
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-2 margin-bottom"></div>
            </div>
          </div>
        </section>
      </main>
      {/* </PrivatePages> */}
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
