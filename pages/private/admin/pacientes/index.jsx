import { Box, Container } from '@mui/material'
import Head from 'next/head'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { PacientesToolbar } from '../../../../components/pacientes/PacientesToolbar'
import { initClientSSR } from '../../../../graphql-front/initClientSSR'
import { pacientesTabla } from '../../../../graphql-front/paciente/queries'
import { PacientesTablas } from '../../../../components/pacientes/PacientesTablas'

const PacientesPage = ({ UsuariosTabla }) => {
  return (
    <NewPrivateLayout>
      <Head>
        <title>Pacientes</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <PacientesToolbar tab={0} />
          <Box sx={{ mt: 3 }}>
            <PacientesTablas UsuariosTabla={UsuariosTabla} />
          </Box>
        </Container>
      </Box>
    </NewPrivateLayout>
  )
}

export const getServerSideProps = async ({req, res}) => {

  const client = initClientSSR(req)
  
  const { data } = await client.query({
    query: pacientesTabla,
    variables: { rol: "PACIENTE" }
  })
  console.log(data)
  const { UsuariosTabla } = data
  return {
    props: {
      // UsuariosTabla: PacientesTabla,
    },
  }
}

export default PacientesPage
