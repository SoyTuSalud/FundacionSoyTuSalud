import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import { ServiciosToolbar } from '../../../../components/servicios/ServiciosToolbar'
import { serviciosTablaData } from '../../../../graphqlBack-front/servicios/queries'
import { client } from '../../../../graphqlBack-front/initClientSide'
import { ServiciosTablas } from '../../../../components/servicios/ServiciosTablas'
import {useQuery} from "@tanstack/react-query";
import {ResponseEntity} from "../../../../backend/common/models/response.value";
import {Paciente} from "../../../../backend/paciente/domain/entity/paciente.entity";
import {getPacientes} from "../../../../services/pacientes.api";

const ServiciosPage = ({ serviciosData }) => {

  return (
    <NewPrivateLayout>
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
    </NewPrivateLayout>
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
