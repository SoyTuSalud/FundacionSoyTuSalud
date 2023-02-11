import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import { client } from '../graphqlBack-front/initClientSide'
import { storage } from '../firebase/initConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useMutation } from '@apollo/client'
import { CodeServices } from '../graphqlBack-front/servicesCodes/queries'
import { departamentos } from '../utils/deparamentos'
import { municipios } from '../utils/municipios'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { crearServicios } from '../graphqlBack-front/servicios/mutations'
import useFormData from '../hooks/useFormData'
import { LayoutMain } from '../components/layouts/LayoutMain'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const valuesEspacialiad = [
  'especialidad',
  'modalidad',
  'horaInicio',
  'horaFin',
  'valorServicio',
  'tipoServicio',
  'nombreResponsable',
  'celularServicio',
  'whatsAppServicio',
  'direccionServicio',
]

let filtrosCode = {
  TIPO_DE_SERVICIO: '',
  DESCRIPCION_SERVICIO: '',
}

const TrabajaNosotros = () => {
  const { t } = useTranslation()

  const propsImage = {
    title: t('home:HOME_TITLE'),
    title2: t('home:HOME_TITLE_2'),
    image: '/promo_c1.png',
  }

  const router = useRouter()
  const [crearServicio] = useMutation(crearServicios)
  const [filterMunicipios, setFilterMunicipios] = useState([])
  const [photo, setPhoto] = useState('/Foto.png')
  const { form, formData, updateFormData } = useFormData()
  const [servicios, setServicios] = useState([0])
  const [securities, setSecurities] = useState(true)
  const [serviciosLista, setServiciosLista] = useState([])
  let municipiosFiltrado = []
  const regex = /(\d+)/g

  const handleSubmit = async (e) => {
    formData.servicios = []
    e.preventDefault()
    if (securities) {
      const foto = ref(storage, `servicios/${formData.identificacion}/foto.jpg`)
      const distintivoHabilitacion = ref(
        storage,
        `servicios/${formData.identificacion}/distintivoHabilitacion.pdf`,
      )
      const convalidacionIcfes = ref(
        storage,
        `servicios/${formData.identificacion}/convalidacionIcfes.pdf`,
      )
      const fotoLogoPublicidad = ref(
        storage,
        `servicios/${formData.identificacion}/fotoLogoPublicidad.jpg`,
      )
      const hojaVida = ref(
        storage,
        `servicios/${formData.identificacion}/hojaVida.pdf`,
      )

      await uploadBytes(foto, formData.foto)
      await uploadBytes(distintivoHabilitacion, formData.distintivoHabilitacion)
      await uploadBytes(convalidacionIcfes, formData.convalidacionIcfes)
      await uploadBytes(fotoLogoPublicidad, formData.fotoLogoPublicidad)
      await uploadBytes(hojaVida, formData.hojaVida)

      await getDownloadURL(foto).then((url) => {
        formData.foto = url
      })
      await getDownloadURL(distintivoHabilitacion).then((url) => {
        formData.distintivoHabilitacion = url
      })
      await getDownloadURL(convalidacionIcfes).then((url) => {
        formData.convalidacionIcfes = url
      })
      await getDownloadURL(fotoLogoPublicidad).then((url) => {
        formData.fotoLogoPublicidad = url
      })
      await getDownloadURL(hojaVida).then((url) => {
        formData.hojaVida = url
      })
      console.log(formData)

      const listaKeys = Object.keys(formData)

      valuesEspacialiad.forEach((special) => {
        const listaFiltrada = listaKeys.filter((value) =>
          value.includes(`${special}`),
        )
        listaFiltrada.forEach((value) => {
          const position = value.match(regex)[0]
          serviciosLista[position][`${special}`] =
            formData[`${special}${position}`]
          formData.servicios = serviciosLista
        })
      })
      console.log(formData)
      crearServicio({ variables: formData })
        .then((res) => {
          // router.push('/')
        })
        .catch((err) => console.error(err))
    } else {
      console.error('error')
    }
  }

  const handlePhoto = async (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e) => {
        setPhoto(e.target.result)
      }
    }
  }

  const handleCheckBox = (e, index) => {
    const filter = serviciosLista.filter((value) => value.dias)
    if (e.currentTarget.checked) {
      if (!Object.keys(filter).includes(index.toString())) {
        setServiciosLista((value) => [...value, { dias: [e.target.value] }])
      } else {
        let { dias } = serviciosLista[index]
        dias.push(e.target.value)
      }
    } else {
      let { dias } = serviciosLista[index]
      dias.splice(dias.indexOf(e.target.value), 1)
    }
    setSecurities(true)
  }

  Array.prototype.equals = function (getArray) {
    if (this.length != getArray.length) return false

    for (var i = 0; i < getArray.length; i++) {
      if (this[i] instanceof Array && getArray[i] instanceof Array) {
        if (!this[i].equals(getArray[i])) return false
      } else if (this[i] != getArray[i]) {
        return false
      }
    }
    return true
  }

  const handleDpto = (e) => {
    console.log(e.target.value)
    municipiosFiltrado = municipios.filter(
      (municipio) => municipio.codigodepartamento === e.target.value,
    )
    setFilterMunicipios(municipiosFiltrado)
  }

  return (
    <LayoutMain propsImage={propsImage} t={t}>
      <section className="container-general-page">
        <div className="col-xl-12">
          <form
            className="form message-form"
            ref={form}
            onChange={updateFormData}
            onSubmit={handleSubmit}
            id="Form_TrabajaConNostros"
          >
            <div className="row mt-10">
              <h6 className="general-titles">
                {t('trabajaConNosotros:FILL_FORM')}
              </h6>
              <label className="control-label mb-1">
                {t('trabajaConNosotros:PLEASE_CHECK_REQUIRED_FIELDS')} (*){' '}
              </label>
            </div>

            <div className="contenedor-picture">
              <h6 className="general-titles text-center">
                {t('common:PHOTO')}
              </h6>

              <div className="FotoHistoria">
                <Image
                  style={{ cursor: 'pointer' }}
                  alt="defaultPhoto"
                  className="profile-pic"
                  id="perfil"
                  name="perfil"
                  src={photo}
                  height="150"
                  width="180"
                />
                <input
                  type="file"
                  onChange={handlePhoto}
                  id="foto"
                  name="foto"
                  accept="image/*"
                  // className="custom-file-input "
                  required
                />
                <label className="upload-photo" htmlFor="logo">
                  <p className="upload-photo">{t('common:UPLOAD_PHOTO')}</p>
                </label>
              </div>
            </div>

            <div className="col-12 mt-12">
              <h6 className="general-titles">
                {t('common:PERSONAL_INFORMATION')}
              </h6>
            </div>
            <div className="container-inputs-general-work">
              <div className="container-input">
                <label>
                  {t('trabajaConNosotros:FULL_NAMES_OR_COMPANY_NAME')} *
                </label>
                <input
                  className="input-work"
                  type="text"
                  name="nombreCompleto"
                  id="nombreCompleto"
                  required
                />
              </div>

              <div className="container-input">
                <label>{t('registro:DOCUMENT_TYPE')} *</label>
                <select
                  className="select-work"
                  name="tipoDocumento"
                  id="tipoDocumento required"
                >
                  <option value="">{t('registro:DOCUMENT_TYPE')}</option>
                  <option>CC</option>
                  <option>NIT</option>
                  <option>CE</option>
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
              <div className="container-input">
                <label>{t('trabajaConNosotros:DOCUMENT_NUMBER')} *</label>
                <input
                  className="input-work"
                  type="text"
                  name="identificacion"
                  id="identificacion"
                  required
                />
              </div>
              <div className="container-input">
                <label>{t('trabajaConNosotros:CELL_PHONE_NUMBER')} *</label>
                <input
                  className="input-work"
                  type="number"
                  name="celular"
                  id="celular"
                  required
                />
              </div>
            </div>

            <div className="container-inputs-general-work">
              <div className="container-input">
                <label>{t('common:DEPARTMENT')} *</label>
                <select
                  onChange={handleDpto}
                  name="departamento"
                  className="select-work"
                  aria-required="true"
                  aria-invalid="false"
                  required
                >
                  <option value="">Departamento *</option>
                  {departamentos.map((depatamento) => (
                    <option value={depatamento.codigo} key={depatamento.codigo}>
                      {depatamento.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="container-input">
                <label>{t('common:MUNICIPALITY')} *</label>
                <select
                  name="municipio"
                  className="select-work"
                  aria-required="true"
                  aria-invalid="false"
                  required
                >
                  <option value="">Municipio *</option>
                  {filterMunicipios.map((municipio, index) => (
                    <option key={index}>{municipio.nombre}</option>
                  ))}
                </select>
              </div>
              <div className="container-input">
                <label>{t('common:FULL_BUSINESS_ADDRESS')} *</label>
                <input
                  className="input-work"
                  type="text"
                  name="direccion"
                  id="direccion"
                  required
                />
              </div>
              <div className="container-input">
                <label>{t('common:WEBPAGE')}</label>
                <input
                  className="input-work"
                  type="url"
                  name="paginaWeb"
                  id="paginaWeb"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-12">
                <h6 className="general-titles">
                  {t('trabajaConNosotros:APPLICATION_INFORMATION')}
                </h6>
              </div>
            </div>

            {servicios.map((servicio, index) => {
              return (
                <ListServices
                  key={index}
                  index={index}
                  t={t}
                  handleCheckBox={handleCheckBox}
                />
              )
            })}

            {Object.keys(serviciosLista).equals(servicios) ? (
              <div className="row">
                <div className="col-lg-4 mt-3 ">
                  <button
                    type="button"
                    onClick={() => {
                      setServicios([...servicios, servicios.length])
                      setSecurities(false)
                    }}
                  >
                    <AddBoxIcon color="success" />
                    <span className="">
                      {t('trabajaConNosotros:ADD_NEW_SERVICE')}
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-4 mt-3 ">
                  <button type="button" disabled>
                    <AddBoxIcon color="" />
                    <span className="">
                      {t('trabajaConNosotros:ADD_NEW_SERVICE')}
                    </span>
                  </button>
                </div>
              </div>
            )}
            <div>
              <div className="mt-7">
                <div className="container-input">
                  <label>
                    {t('trabajaConNosotros:BANCOLOMBIA_SAVINGS_ACCOUNT')} *
                  </label>
                  <input
                    type="number"
                    className="input-work"
                    name="cuentaDeAhorros"
                    id="cuentaDeAhorros"
                    required
                  />
                </div>
              </div>
              <div className="mt-12 mb-3">
                <h6>{t('trabajaConNosotros:ATTACH_DOCUMENTS')}</h6>
              </div>
              <div className=" mt-6 max-w-xs">
                <div className="">
                  <label className="">
                    {t('trabajaConNosotros:DISCTINCTIVE_ENABLING')} *
                  </label>
                  <input
                    type="file"
                    name="distintivoHabilitacion"
                    id="distintivoHabilitacion"
                    className="inputfile inputfile-1"
                    accept=".pdf"
                    required
                  />
                  <label className="space-x-2" htmlFor="distintivoHabilitacion">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="iborrainputfile"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                    >
                      <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span className="iborrainputfile">
                      {t('common:SELECT_FILE')}
                    </span>
                  </label>
                </div>
                <div className="">
                  <label className="">
                    {t('trabajaConNosotros:ICFES_VALIDATION')} *
                  </label>
                  <input
                    type="file"
                    name="convalidacionIcfes"
                    id="convalidacionIcfes"
                    className="inputfile inputfile-1"
                    accept=".pdf"
                  />
                  <label className="space-x-2" htmlFor="convalidacionIcfes">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="iborrainputfile"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                    >
                      <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span className="iborrainputfile">
                      {t('common:SELECT_FILE')}
                    </span>
                  </label>
                </div>
                <div className="">
                  <label className="">
                    {t('trabajaConNosotros:ADVERTISING_IMAGES')} *
                  </label>
                  <input
                    type="file"
                    name="fotoLogoPublicidad"
                    id="fotoLogoPublicidad"
                    className="inputfile inputfile-1"
                    accept="image/*"
                  />
                  <label className="space-x-2" htmlFor="fotoLogoPublicidad">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="iborrainputfile"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                    >
                      <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span className="iborrainputfile">
                      {t('common:SELECT_FILE')}
                    </span>
                  </label>
                </div>
                <div className="">
                  <label className="">
                    {t('trabajaConNosotros:CURRICULUM')} *
                  </label>
                  <input
                    type="file"
                    name="hojaVida"
                    id="hojaVida"
                    className="inputfile inputfile-1"
                    accept=".pdf"
                    required
                  />
                  <label className="space-x-2" htmlFor="hojaVida">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="iborrainputfile"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                    >
                      <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span className="iborrainputfile">
                      {t('common:SELECT_FILE')} *
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-12">
              <div className="col-lg-12">
                <h6>{t('trabajaConNosotros:RESUME_SUMMARY')}</h6>
                <textarea
                  required
                  className="textarea-input-work"
                  name="resumenCurriculum"
                  id="resumenCurriculum"
                  placeholder=""
                ></textarea>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col ml-3 mt-12">
                <label className="form__checkbox-label">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="aceptaConvenio"
                    id="aceptaConvenio"
                    value="true"
                  />
                  <span
                    name="aceptaConvenio"
                    id="aceptaConvenio"
                    className="label-checkbox"
                  >
                    {t('common:ACCEPT')}{' '}
                    <a
                      href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FContrato%20de%20acceso%20a%20la%20Plataforma%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud%20Profesionales.pdf?alt=media&token=6de426d2-45a9-4edd-9b1c-bab313aaca60"
                      target="_blank"
                      required
                      rel="noreferrer"
                    >
                      {t('trabajaConNosotros:PROFESSIONAL_AGREEMENT')}
                    </a>
                  </span>
                  <span className="form__checkbox-mask"></span>
                </label>
                {/* <label className="form__checkbox-label"><span name="convenioProveedores" id="convenioProveedores" className="form__label-text">Acepta <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FContrato%20de%20acceso%20a%20la%20Plataforma%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud-Proveedores.pdf?alt=media&token=df28ca97-f067-44a2-8645-09eff342cdac" target='_blank' required rel="noreferrer">Convenio Proveedores</a></span>
																<input className="form__input-checkbox" type="checkbox" name="aceptaTratamientoDatos" id="aceptaTratamientoDatos" value="on"/>
																<span className="form__checkbox-mask"></span>
															</label> */}
                <label className="form__checkbox-label">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="aceptaTratamientoDatos"
                    id="aceptaTratamientoDatos"
                    value="true"
                  />
                  <span
                    name="politicaDatos"
                    id="aceptaTratamientoDatos"
                    className="label-checkbox"
                  >
                    {t('common:ACCEPT')} {t('trabajaConNosotros:POLITICS_OF')}{' '}
                    <a
                      href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FPol%C3%ADtica%20de%20tratamiento%20de%20datos%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud.pdf?alt=media&token=5b6dc7da-566a-4bff-8b19-87ceaafed660"
                      target="_blank"
                      required
                      rel="noreferrer"
                    >
                      {t('trabajaConNosotros:PROCESSING_OF_PERSONAL_DATA')}
                    </a>
                  </span>
                  <span className="form__checkbox-mask"></span>
                </label>
                <label className="form__checkbox-label">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="aceptaDocumentoSARLAFT"
                    id="aceptaDocumentoSARLAFT"
                    value="true"
                  />
                  <span
                    name="docSarlaft"
                    id="docSarlaft"
                    className="label-checkbox"
                  >
                    {t('trabajaConNosotros:ACCEPT_DOCUMENT')}{' '}
                    <a
                      href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FPol%C3%ADticas%20para%20el%20Sistema%20de%20Administraci%C3%B3n%20de%20Riesgos%20de%20Lavado%20de%20Activos%20y%20Financiaci%C3%B3n%20del%20terrorismo%20Fundaci%C3%B3n%20Mi%20Salud%20PLUS.pdf?alt=media&token=07652efc-1eda-484e-b5f4-fec8bc9e3bcc"
                      target="_blank"
                      required
                      rel="noreferrer"
                    >
                      SARLAFT{' '}
                    </a>
                    {t('trabajaConNosotros:OF_FOUNDATION')} Soy Tú Salud
                  </span>
                  <span className="form__checkbox-mask"></span>
                </label>
                <label className="form__checkbox-label">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="aceptaCodigoEticaSoyTuSalud"
                    id="aceptaCodigoEticaSoyTuSalud"
                    value="true"
                  />
                  <span
                    name="codigoEtica"
                    id="codigoEtica"
                    className="label-checkbox"
                  >
                    {t('common:ACCEPT')}{' '}
                    <a
                      href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FC%C3%B3digo%20de%20%C3%89tica%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud.pdf?alt=media&token=4684b7f7-afc9-47eb-97fd-a71ac11b0ee9"
                      target="_blank"
                      required
                      rel="noreferrer"
                    >
                      {t('trabajaConNosotros:CODE_OF_ETHICS')}
                    </a>{' '}
                    {t('trabajaConNosotros:OF_FOUNDATION')} Soy Tú Salud
                  </span>
                  <span className="form__checkbox-mask"></span>
                </label>
              </div>
            </div>
            <div className="row mt-24 mb-8">
              <button
                type="submit"
                className="button-submit m-auto py-2 px-8 text-white"
              >
                {t('common:SEND_FORM')}
              </button>
            </div>
          </form>
          <br />
        </div>
      </section>
    </LayoutMain>
  )
}

const ListServices = ({ index, handleCheckBox, t }) => {
  const [codigoServicios, setCodigoServicios] = useState([])

  const handleCodeSelector = (e) => {
    filtrosCode.TIPO_DE_SERVICIO = e.target.value
  }

  const handleSearch = async () => {
    const { data } = await client.query({
      query: CodeServices,
      variables: {
        tipoDeServicio: filtrosCode.TIPO_DE_SERVICIO,
        descripcionServicio: filtrosCode.DESCRIPCION_SERVICIO,
      },
    })
    setCodigoServicios(data.CodeService.body)
  }

  return (
    <div>
      <div className="row">
        <div className="col-12 mt-12 mb-4">
          <h6 className="general-titles">{`Servicio ${index + 1}`}</h6>
        </div>
      </div>
      <div className="container-inputs-general-work">
        <div className="container-service">
          <div className="container-label-input">
            <label className="mt-3">{t('common:SERVICE_TYPE')} *</label>
            <select
              className="select-work"
              onChange={handleCodeSelector}
              name={`tipoServicio${index}`}
              id="especialidad"
              required
            >
              <option value="">Tipo de servicio</option>
              <option>Consulta Medica General</option>
              <option>Consulta Medica Especializada</option>
              <option>Otros Profesionales de la salud</option>
              <option>Ayudas diagnosticas</option>
              <option>Medicamentos</option>
              <option>Examenes de Laboratorio</option>
              <option>Rayos X</option>
              <option>Terapias</option>
              <option>Cirugia Ambulatoria y Otros Servicios</option>
            </select>
          </div>
        </div>
        <div className="container-service">
          <div className="container-label-input">
            <label className="mt-3">{t('common:SERVICE_NAME')} *</label>
            <input
              onChange={(e) =>
                (filtrosCode.DESCRIPCION_SERVICIO = e.target.value)
              }
              className="input-work"
              type="text"
            />
          </div>
        </div>
        <div className="mt-7">
          <label className="mt-3"> </label>
          {/* <div className='cursor-pointer bg-blue-500 text-white rounded-lg flex justify-center py-1 ' onClick={handleSearch}>Buscar</div> */}
          <input onClick={handleSearch} className="inputfile inputfile-1" />
          <button
            className="btn-search-work"
            onClick={() => handleSearch(index)}
          >
            {t('common:SEARCH')}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {codigoServicios.length > 0 ? (
            <>
              <laber>{t('common:RESULTS')}</laber>
              <select
                className="select-work"
                name={`especialidad${index}`}
                id="especialidad"
                required
              >
                <option value="">Tipo Especialidad</option>
                {codigoServicios &&
                  codigoServicios.map((codigo, index) => (
                    <option key={index} value={codigo.DESCRIPCION_SERVICIO}>
                      {codigo.DESCRIPCION_SERVICIO} REF:{codigo.CODIGO}
                    </option>
                  ))}
              </select>
              <div className="row">
                <div className="col-lg-4">
                  <label className="mt-3">
                    {t('trabajaConNosotros:CARE_MODALITY')} *
                  </label>
                  <select
                    className="select-work"
                    name={`modalidad${index}`}
                    id="modalidad"
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option>Domiciliaria</option>
                    <option>Presencial</option>
                    <option>Telemedicina</option>
                  </select>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-6 text-sm font-bold">
          <span>{t('trabajaConNosotros:TIME_AVAILABILITY')}</span>
        </div>
      </div>
      <div className="container-dates">
        <div className="container-date-one">
          <label className="mt-3"> {t('common:START_TIME')} *</label>
          <input
            type="time"
            className="select-work"
            name={`horaInicio${index}`}
            id="disponibilidadHoraria"
          />
        </div>
        <div className="container-date-one">
          <label className="mt-3"> {t('common:END_TIME')} *</label>
          <input
            type="time"
            className="select-work"
            name={`horaFin${index}`}
            id="disponibilidadHoraria"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-5">
          <label className="">{t('common:AVAILABLE_DAYS')}*</label>
          <div className=" space-x-6">
            <div className="flex flex-col justify-between md:flex-row">
              <label className="form__checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  value={`lunes`}
                  onChange={(e) => handleCheckBox(e, index)}
                />
                <span className="label-checkbox">{t('common:MONDAY')}</span>
                <span className="form__checkbox-mask"></span>
              </label>
              <label className="form__checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  value={`martes`}
                  onChange={(e) => handleCheckBox(e, index)}
                />
                <span className="label-checkbox">{t('common:TUESDAY')}</span>
                <span className="form__checkbox-mask"></span>
              </label>
              <label className="form__checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e) => handleCheckBox(e, index)}
                  value={`miercoles`}
                />
                <span className="label-checkbox">{t('common:WEDNESDAY')}</span>
                <span className="form__checkbox-mask"></span>
              </label>
              <label className="form__checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e) => handleCheckBox(e, index)}
                  value={`jueves`}
                />
                <span className="label-checkbox">{t('common:THURSDAY')}</span>
                <span className="form__checkbox-mask"></span>
              </label>
              <label className="form__checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  value={`viernes`}
                  onChange={(e) => handleCheckBox(e, index)}
                />
                <span className="label-checkbox">{t('common:FRIDAY')}</span>
                <span className="form__checkbox-mask"></span>
              </label>
              <label className="form__checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e) => handleCheckBox(e, index)}
                  value={`sabado`}
                />
                <span className="label-checkbox">{t('common:SATURDAY')}</span>
                <span className="form__checkbox-mask"></span>
              </label>
              <label className="form__checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e) => handleCheckBox(e, index)}
                  value={`domingo`}
                />
                <span className="label-checkbox">{t('common:SUNDAY')}</span>
                <span className="form__checkbox-mask"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="container-inputs-general-work mt-5">
        <div className="container-input">
          <label className="">{t('trabajaConNosotros:SERVICE_VALUE')} *</label>
          <input
            type="number"
            className="input-work"
            name={`valorServicio${index}`}
            id="valorServicio"
            required
          ></input>
        </div>
        <div className="container-input">
          <label className="">
            {t('trabajaConNosotros:SERVICE_PROVIDER')} *
          </label>
          <input
            type="text"
            className="input-work"
            name={`nombreResponsable${index}`}
            required
          ></input>
        </div>
        <div className="container-input">
          <label>{t('trabajaConNosotros:RESPONSIBLE_CONTACT')} *</label>
          <input
            className="input-work"
            type="text"
            name={`celularServicio${index}`}
            required
          />
        </div>
        <div className="container-input">
          <label>{t('trabajaConNosotros:WHATSAPP_LINE')} *</label>
          <input
            className="input-work"
            type="number"
            name={`whatsAppServicio${index}`}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mt-5">
          <label className="">
            {t('trabajaConNosotros:ADDRESS_SERVICE_PROVIDED')} *
          </label>
          <input
            type="text"
            className="input-work"
            name={`direccionServicio${index}`}
            required
          ></input>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'navbar',
        'home',
        'footer',
        'registro',
        'trabajaConNosotros',
      ])),
    },
  }
}

export default TrabajaNosotros
