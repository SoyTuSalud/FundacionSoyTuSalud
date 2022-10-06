import { useEffect, useState } from 'react'
import Head from 'next/head'
import { client } from '../../../../graphql-front/initClientSide'
import { userData } from '../../../../graphql-front/user/queries'
import { AccountProfileDetails } from '../../../../components/detallePacientes/account-profile-details'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { Box, Container, Grid } from '@mui/material'
import { useLazyQuery } from '@apollo/client'

const DetallePaciente = ({ Usuario }) => {
  const [error, setError] = useState({
    type: '',
    message: '',
  })
  const [data, setData] = useState()

  const [getPacientes] = useLazyQuery(pacientesTabla)

  useEffect(() => {
    getPacientes()
      .then(({ data }) => {
        const request = data.PacientesTabla
        if (request.status.code === ResponseCodes.SUCCESS) {
          setData(request.body)
        } else {
          setError({ message: request.status.description, type: 'info' })
        }
      })
      .catch(() => {
        setError({
          message: 'Error en el Server, contacte el administrador',
          type: 'error',
        })
      })
  }, [])

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
              <AccountProfileDetails user={user} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </NewPrivateLayout>
  )
}

export default DetallePaciente
