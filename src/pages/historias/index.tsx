import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import { LayoutMain } from '../../components/layouts/LayoutMain'
import { GetStaticProps } from 'next';

const Historia = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="container-histories-page">
        <div className="container-card">
          <div className="container-header-card">
            <p>img</p>
            <p className="together-link">TE ACOMPAÑO</p>
          </div>

          <div className="container-content-card">
            <h4 className="title-card">Paciente de prueba numero 1</h4>
            <p>esta es una historia de prueba</p>
            <button className="btn-search">
              Consulta Otorrinonaringologia
            </button>
            <p className="value-text">
              Valor: <span className="price-bold">$200.000</span>
            </p>
          </div>
        </div>

        <div className="container-card">
          <div className="container-header-card">
            <p>img</p>
            <p className="together-link">TE ACOMPAÑO</p>
          </div>

          <div className="container-content-card">
            <h4 className="title-card">Paciente de prueba numero 2</h4>
            <p>esta es una historia de prueba</p>
            <button className="btn-search">Consulta Ginecologia</button>
            <p className="value-text">
              Valor: <span className="price-bold">$250.000</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

Historia.getLayout = function getLayout(page:ReactElement , props: any) {
  
  return (

    <LayoutMain  _nextI18Next = {props._nextI18Next}>
      {page}
    </LayoutMain>


  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale||'', [
        'navbar',
        'home',
        'registro',
        'footer',
      ])),
    },
  }
}

export default Historia
