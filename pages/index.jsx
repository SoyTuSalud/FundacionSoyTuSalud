import { Box, Container, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { LayoutMain } from '../components/layouts/LayoutMain'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { Loading } from '../components/Ui/loading/Loading'

export default function Home({ locale }) {
  const { t } = useTranslation()

  const [loading, setLoading] = useState(true)

  const propsImage = {
    title: t('home:tituloHome'),
    title2: t('home:titulohome2'),
    image: '/promo_c1.png',
  }

  if (loading) return <Loading />

  return (
    <LayoutMain t={t} propsImage={propsImage}>
      <section className="">
        <div className="container mt-12">
          <div className="row align-items-center mt-4">
            <div className="col-lg-6">
              <div className="heading">
                <span className="heading__pre-title" data-lang="nostros">
                  {t('home:sobreNotros')}
                </span>
                <h2 className="heading__title">
                  <span className="title-main-home">{t('home:fundacion')}</span>{' '}
                  Soy Tú Salud
                </h2>
              </div>
              <p>
                {t('home:primerTexto')}{' '}
                <a href="https://www.fundacionsoytusalud.org">
                  {t('home:fundacion')} Soy Tú Salud
                </a>{' '}
                {t('home:segundoTexto')}.
              </p>
              <p className="pb-8">
                {' '}
                {t('home:EnLa')}{' '}
                <a href="https://www.fundacionsoytusalud.org/">
                  {t('home:fundacion')} Soy Tú Salud
                </a>{' '}
                {t('home:tercerTexto')} :{' '}
              </p>
              <div className="row">
                <div className="col-md-6 col-lg-12">
                  <ul className="unordered-list">
                    <li>{t('home:lista1')}</li>
                    <li>{t('home:lista2')}</li>
                    <li>{t('home:lista3')}</li>
                    <li>{t('home:lista4')}</li>
                    <li>{t('home:lista5')}</li>
                  </ul>
                </div>
              </div>
              <a className="button button--primary" href="#">
                {t('home:masSobre')}
              </a>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="info-box flex items-center">
                <div className="absolute">
                  <Image
                    src="/about_layout.png"
                    alt="img"
                    width={700}
                    height={700}
                  />
                </div>
                <div className="relative box-content m-auto">
                  <Image
                    src="/gallery_2.png"
                    alt="img"
                    width={350}
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section icons-section pt-0">
        <div className="container">
          <div className="row margin-bottom">
            <div className="col-12">
              <div className="heading heading--center">
                <span className="heading__pre-title">
                  {t('home:servicios')}
                </span>
                <h2 className="heading__title">
                  <span>{t('home:hacemos')}</span>{' '}
                  <span>{t('home:personas')}</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="icon-item">
                <div className="icon-item__img">
                  <div className="icon icon-item__icon icon--red">
                    <Image
                      src="/Logo_servicios1.png"
                      alt="img"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="img--layout">
                    <Image
                      src="/icon_1-1.png"
                      alt="img"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <div className="icon-item__text">
                  <p>{t('home:ayudaMedica')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutMain>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer', 'navbar'])),
    },
  }
}
