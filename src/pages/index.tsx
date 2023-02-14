
import Head from 'next/head'
import Image from 'next/image'
import {LayoutMain} from '@/src/components/layouts'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import {GetServerSideProps} from "next";
import {ReactElement} from "react";

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
        <Head> <title>FundacionSoyTu | Home</title> </Head>
        <section className="">
          <div className="container mt-12">
            <div className="row align-items-center mt-4">
              <div className="col-lg-6">
                <div className="heading">
                  <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                      <input name="merchantId"      type="hidden"  value="508029" />
                      <input name="accountId"       type="hidden"  value="512321" />
                      <input name="description"     type="hidden"  value="Test PAYU"/>
                      <input name="referenceCode"   type="hidden"  value="SX86A0djNEPMlGLvUhC3lrPRG1UtbDdqwnqXqXpJ" />
                      <input name="amount"          type="hidden"  value="20000"   />
                      <input name="tax"             type="hidden"  value="3193"  />
                      <input name="taxReturnBase"   type="hidden"  value="16806" />
                      <input name="currency"        type="hidden"  value="COP" />
                      <input name="signature"       type="hidden"  value="98ccb49e0370ee1736d0ff1975e6dbb0"/>
                      <input name="test"            type="hidden"  value="0"/>
                      <input name="buyerEmail"      type="hidden"  value="test@test.com"/>
                      <input name="responseUrl"     type="hidden"  value="http://www.test.com/response"/>
                      <input name="confirmationUrl" type="hidden"  value="http://www.test.com/confirmation"/>
                      <input name="Submit"          type="submit"  value="Enviar"/>
                  </form>
                  <span className="heading__pre-title" data-lang="nosotros">
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
                <a className="button button--primary" href="src/pages2#">
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
                <div className="icon-item flex flex-col w-full">
                    <div className="icon icon-item__icon icon--red absolute self-center ">
                      <Image
                        src="/Logo_servicios1.png"
                        alt="img"
                        width={150}
                        height={150}
                      />
                    </div>

                    <div className="self-center">
                      <Image
                        src="/icon_1-1.png"
                        alt="img"
                        width={200}
                        height={200}
                      />
                    </div>
                  <div className="icon-item__text">
                    <p>{t('home:MEDICAL_HELP')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* <PopUp mssgError="Usuario o contraseña incorrecto" /> */}
    </>
  )
}

Home.getLayout = function getLayout(page:ReactElement , props: any) {
  
  return (

    <LayoutMain  _nextI18Next = {props._nextI18Next}>
      {page}
    </LayoutMain>


  )
}

export const getStaticProps:GetServerSideProps = async ({ locale }) => {

  const propsImage = {
    title: 'home:HOME_TITLE',
    title2: 'home:HOME_TITLE_2',
    image: '/promo_c1.png',
  }

  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'common',
        'home',
        'footer',
        'navbar',
      ])),
      propsImage
    },
  }
}
