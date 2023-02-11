import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import { LayoutMain } from '../../components/layouts/LayoutMain'

const Aliados = () => {
  const { t } = useTranslation()

  const propsImage = {
    title: t('home:HOME_TITLE'),
    title2: t('home:HOME_TITLE_2'),
    image: '/promo_c1.png',
  }
  return (
    <LayoutMain propsImage={propsImage} t={t}>
      <main className="main">
        <section className="background-section ">
          <div className="container ">
            <div className="row margin-bottom pt-12">
              <div className="col-12">
                <div className="heading heading--primary heading--center">
                  <h2 className="heading__title no-margin-bottom">
                    <span>Empresas con Propósito Filantrópicos</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-14">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table
                      id="Tabla_EmpresasConPropositos"
                      className="min-w-full"
                    >
                      <thead className="border-b">
                        <tr>
                          <th
                            scope="col"
                            className="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                          >
                            Nombre
                          </th>
                          <th
                            scope="col"
                            className="text-lg font-medium text-gray-900 px-6 py-4 text-center"
                          >
                            Fecha
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border-r">
                            Empresa 1
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border-r">
                            2021-01-01
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border-r">
                            Empresa 2
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border-r">
                            2021-05-23
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border-r">
                            Empresa 3
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border-r">
                            2022-01-30
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutMain>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'home',
        'registro',
        'footer',
      ])),
    },
  }
}

export default Aliados
