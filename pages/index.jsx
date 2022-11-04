import { Box, Container, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { LayoutMain } from '../components/layouts/LayoutMain'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useContext, useState } from 'react'
import { Loading } from '../components/Ui/loading/Loading'
import { PopUp } from '../components/Ui/popup/PopUp'
import { PopupContext } from '../context/popup'

export default function Home({ locale }) {
  const { t } = useTranslation()

  const [loading, setLoading] = useState(false)

  const { openPopup } = useContext(PopupContext)

  const propsImage = {
    title: t('home:HOME_TITLE'),
    title2: t('home:HOME_TITLE_2'),
    image: '/promo_c1.png',
  }

  if (loading) return <Loading />

  return (
    <>
      <LayoutMain t={t} propsImage={propsImage}>
        <Head> <title>FundacionSoyTu | Home</title> </Head>
        <section className="">
          <div className="container mt-12">
            <div className="row align-items-center mt-4">
              <div className="col-lg-6">
                <div className="heading">
                  <span className="heading__pre-title" data-lang="nostros">
                    {t('home:ABOUT_US')}
                  </span>
                  <h2 className="heading__title">
                    <span className="title-main-home">
                      {t('common:FOUNDATION')}
                    </span>{' '}
                    Soy Tú Salud
                  </h2>
                </div>
                <p>
                  {t('home:FIRST_TEXT')}{' '}
                  <a href="https://www.fundacionsoytusalud.org">
                    {t('common:FOUNDATION')} Soy Tú Salud
                  </a>{' '}
                  {t('home:SECOND_TEXT')}.
                </p>
                <p className="pb-8">
                  {' '}
                  {t('home:ON_THE')}{' '}
                  <a href="https://www.fundacionsoytusalud.org/">
                    {t('common:FOUNDATION')} Soy Tú Salud
                  </a>{' '}
                  {t('home:THIRD_TEXT')} :{' '}
                </p>
                <div className="row">
                  <div className="col-md-6 col-lg-12">
                    <ul className="unordered-list">
                      <li>{t('home:LIST_1')}</li>
                      <li>{t('home:LIST_2')}</li>
                      <li>{t('home:LIST_3')}</li>
                      <li>{t('home:LIST_4')}</li>
                      <li>{t('home:LIST_5')}</li>
                    </ul>
                  </div>
                </div>
                <a className="button button--primary" href="#">
                  {t('home:MORE_ABOUT_US')}
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
                    {t('common:SERVICES')}
                  </span>
                  <h2 className="heading__title">
                    <span>{t('home:WE_MAKE')}</span>{' '}
                    <span>{t('home:PEOPLE')}</span>{' '}
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
                        width={150}
                        height={150}
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
                    <p>{t('home:MEDICAL_HELP')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutMain>

      {/* <PopUp mssgError="Usuario o contraseña incorrecto" /> */}
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
        'footer',
        'navbar',
      ])),
    },
  }
}
