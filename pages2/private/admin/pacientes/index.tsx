import { FC } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { Box, Container } from '@mui/material'

import { ResponseEntity } from '@common/models/response.value'
import { Paciente } from '@paciente/domain/entity/paciente.entity'

import { useApiPacientes } from '@/hooks/useApi'
import { getPacientesSSR } from '@/services/pacientes.api'

import NewPrivateLayout from '@/components/layouts/NewPrivateLayout/NewPrivateLayout'
import { PacientesToolbar } from '@/components/pacientes/PacientesToolbar'
import { PacientesTablas } from '@/components/pacientes/PacientesTablas'
import Alert from '@/components/Ui/alert/Alert'

const PacientesPage: FC<{ pacientes: ResponseEntity<Paciente[]> }> = ({
  pacientes,
}) => {
  const { pacientesQuery } = useApiPacientes(pacientes)

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
          height: 100,
        }}
      >
        <Container maxWidth={false}>
          {pacientesQuery.data.body && (
            <>
              <PacientesToolbar tab={0} />
              <Box sx={{ mt: 3 }}>
                <PacientesTablas
                  UsuariosTabla={pacientesQuery.data.body}
                />
              </Box>
            </>
          )}
          {pacientesQuery.isError && (
            <Alert
              config={{
                message:
                  pacientesQuery?.error?.response?.data?.status?.description,
                type: 'error',
              }}
            />
          )}
        </Container>
      </Box>
    </NewPrivateLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const pacientes = await getPacientesSSR(req)
  return {
    props: {
      pacientes,
    },
  }
}

export default PacientesPage
