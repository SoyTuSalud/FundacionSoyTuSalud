import { Box, Container } from '@mui/material'
import Head from 'next/head'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { PacientesToolbar } from '../../../../components/pacientes/PacientesToolbar'
import { client } from '../../../../graphql-front/initClientSide'
import { usuariosTablas } from '../../../../graphql-front/user/queries'
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

export const getServerSideProps = async (ctx) => {
  const { data } = await client.query({
    query: usuariosTablas,
  })
  const { UsuariosTabla } = data
  return {
    props: {
      UsuariosTabla,
    },
  }
}

export default PacientesPage
