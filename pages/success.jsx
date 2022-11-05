import { Box } from '@mui/material'
import Head from 'next/head'
import { MenuFooter } from '../components/Ui/public/MenuFooter'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Link from 'next/link'

const Success = () => {
  const { t } = useTranslation()
  return (
    <Box height="100vh" display="flex" flexDirection="column" className="">
      <Head>
        <title>FundacionSoyTu | Success</title>
      </Head>
      <div className="flex justify-center items-center h-screen flex-col section-container-form ">
        <div className="flex flex-col items-center bg-white p-10 rounded-xl max-w-xl shadow-2xl lg:rounded-3xl shadow-slate-400  ">
          <CheckCircleIcon className="text-green-500 w-32 h-32" />
          <div className="mt-10">
            <h1 className="text-black text-2xl font-semibold text-center">
              Dirección de correo confirmado con éxito
            </h1>
            <p className="mt-5 text-">
              Hemos confirmado tu dirección de correo electrónico, pulsa en el
              botón para ir al inicio.{' '}
            </p>
          </div>
          <Link replace href={'/'}>
            <a className=" lg:mt-18 mt-10 button button--primary">Inicio</a>
          </Link>
        </div>
      </div>
      <MenuFooter t={t} visible="false" />
    </Box>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'footer',
        'navbar',
        'home',
        'registro',
        'login',
      ])),
    },
  }
}

export default Success
