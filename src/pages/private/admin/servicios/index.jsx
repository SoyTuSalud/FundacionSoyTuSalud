import PrivateLayout from '../../../../components/layouts/private/PrivateLayout'
import Head from 'next/head'
import {Box, Container} from '@mui/material'
import {ServiciosToolbar} from '../../../../components/servicios/ServiciosToolbar'
import {ServiciosTablas} from '../../../../components/servicios/ServiciosTablas'

const ServiciosPage = ({ serviciosData }) => {

  return (
    <PrivateLayout>
      <Head>
        <title>Servicios</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ServiciosToolbar />
          <Box sx={{ mt: 3 }}>
            <ServiciosTablas serviciosData={serviciosData.body} />
          </Box>
        </Container>
      </Box>
    </PrivateLayout>
  )
}

export const getServerSideProps = async (ctx) => {
  const { data } = await client.query({
    query: serviciosTablaData,
  })
  const { RepresentantesTabla } = data
  return {
    props: {
      serviciosData: RepresentantesTabla,
    },
  }
}

export default ServiciosPage
