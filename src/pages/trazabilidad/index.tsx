import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LayoutMain } from '../../components/layouts/LayoutMain'
import { ReactElement } from 'react';
import { GetStaticProps } from 'next';

const Historia = () => {
  const { t } = useTranslation()


  return (
    <>
      <section className="container-page-trazabilidad">
        <div className="container-calendar-card">
          <div className="container-calendar">
            <span className="day-calendar">30</span>
            <span className="month-calendar">Oct, 19</span>
          </div>

          <div className="container-card-trazabilidad">
            <div className="">
              <h6 className="title-card pb-2">Paciente: Nombre Y Apellido </h6>

              <div className="">
                <p className="service-p">
                  <span className="service-span">Servicio:</span> ______________
                </p>
                <p className="service-p">
                  <span className="service-span">Profesional o Proveedor:</span>
                  ______________
                </p>
                <p className="service-p">
                  <span className="service-span">Valor:</span>
                  ______________
                </p>
                <p className="service-p">
                  <span className="service-span">Concato Paciente: </span>
                  321-111-1111 , soytusalud@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-calendar-card">
          <div className="container-calendar">
            <span className="day-calendar">21</span>
            <span className="month-calendar">Nov, 19</span>
          </div>

          <div className="container-card-trazabilidad">
            <div className="">
              <h6 className="title-card pb-3">Paciente: Nombre Y Apellido </h6>

              <div className="">
                <p className="service-p">
                  <span className="service-span">Servicio:</span> ______________
                </p>
                <p className="service-p">
                  <span className="service-span">Profesional o Proveedor:</span>
                  ______________
                </p>
                <p className="service-p">
                  <span className="service-span">Valor:</span>
                  ______________
                </p>
                <p className="service-p">
                  <span className="service-span">Concato Paciente: </span>
                  321-111-1111 , soytusalud@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      ...(await serverSideTranslations(locale || '', [
        'navbar',
        'home',
        'registro',
        'footer',
      ])),
    },
  }
}

export default Historia
