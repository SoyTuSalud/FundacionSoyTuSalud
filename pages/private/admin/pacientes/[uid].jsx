import Head from 'next/head'
import { initClientSSR } from '../../../../graphql-front/initClientSSR'
import { userData } from '../../../../graphql-front/paciente/queries'
import { AccountProfileDetails } from '../../../../components/detallePacientes/account-profile-details'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { Box, Container, Grid } from '@mui/material'

const DetallePaciente = ({ Paciente }) => {
 
  return (
    <NewPrivateLayout>
      <Head>
        <title>Paciente</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item width={'100%'}>
              <AccountProfileDetails user={Paciente.body} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </NewPrivateLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async ({ params, req }) => {
  const { uid } = params

  const clientSSR = initClientSSR(req)

  const { data } = await clientSSR.query({
    query: userData,
    variables: { _id: uid },
    fetchPolicy:'no-cache'
  })

  const { Paciente } = data
  return {
    props: {
      Paciente,
    },
  }
}

export default DetallePaciente
