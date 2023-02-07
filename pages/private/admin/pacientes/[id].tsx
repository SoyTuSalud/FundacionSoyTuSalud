import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { FC } from 'react'

import { ParsedUrlQuery } from 'querystring'
import { Box, Container, Grid } from '@mui/material'

import { ResponseEntity } from '@common/models/response.value'
import { Paciente } from '@paciente/domain/entity/paciente.entity'

import { getPacienteInfo, getPacienteSSR } from '@/services/pacientes.api'
import { useQuery } from '@tanstack/react-query'

import { AccountProfileDetails } from '@/components/detallePacientes/account-profile-details'
import NewPrivateLayout from '@/components/layouts/NewPrivateLayout/NewPrivateLayout'
import Alert from '@/components/Ui/alert/Alert';



interface errorResponse {
  response: {
    data: ResponseEntity<Paciente | null>
  }
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps<{paciente: ResponseEntity<Paciente>}, IParams> = 
async ({req , params}) => {

  const id = params?.id || ''

  const paciente = await getPacienteSSR(req, id)
  return {
    props: {
      paciente,
    },
  }
}

const DetallePaciente: FC<{paciente: ResponseEntity<Paciente>}> = ({paciente}) => {

  const router = useRouter()
  const { id } = router.query

  const pacienteInfo = useQuery<ResponseEntity<Paciente | null>,errorResponse>({
  queryKey: ['pacienteInfo'],
  queryFn: () => getPacienteInfo(id),
  initialData: paciente,
})
 
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
        {pacienteInfo.data.body && (
            <Container maxWidth="xl">
            <Grid container>
              <Grid item width={'100%'}>
                <AccountProfileDetails user={pacienteInfo.data.body} />
              </Grid>
            </Grid>
          </Container>
          )
        }
        {pacienteInfo.isError && (
            <Alert
              config={{
                message:
                pacienteInfo?.error?.response?.data.status
                    .description,
                type: 'error',
              }}
            />
          )}
      </Box>
    </NewPrivateLayout>
  )
}



export default DetallePaciente
