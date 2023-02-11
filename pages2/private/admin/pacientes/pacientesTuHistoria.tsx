import { FC } from 'react'
import { GetServerSideProps } from 'next';
import Head from 'next/head'

import { Box, Container } from '@mui/material'

import { ResponseEntity } from '@common/models/response.value'
import { Paciente } from '@paciente/domain/entity/paciente.entity'

import { useApiPacientes } from '@/hooks/useApi'
import { getPacientesHistoriaSSR } from '@/services/pacientes.api'

import NewPrivateLayout from '@/components/layouts/NewPrivateLayout/NewPrivateLayout'
import { PacientesToolbar } from '@/components/pacientes/PacientesToolbar'
import { PacientesTablasTuHistoria } from '@/components/pacientes/PacientesTablasTuHistoria'
import Alert from '@/components/Ui/alert/Alert'
import { ParsedUrlQuery } from 'querystring'

const PacientesTuHistoria: FC<{ pacientes: ResponseEntity<Paciente[]> }> = ({
  pacientes,
}) => {
  const { pacientesHistoriaQuery } = useApiPacientes(pacientes)

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
          {pacientesHistoriaQuery.data.body && (
            <>
              <PacientesToolbar tab={1} />
              <Box sx={{ mt: 3 }}>
                <PacientesTablasTuHistoria
                  UsuariosTablaTuHistoria={pacientesHistoriaQuery.data.body}
                />
              </Box>
            </>
          )}
          {pacientesHistoriaQuery.isError && (
            <Alert
              config={{
                message:
                  pacientesHistoriaQuery?.error?.response?.data.status
                    .description,
                type: 'error',
              }}
            />
          )}
        </Container>
      </Box>
    </NewPrivateLayout>
  )
}

interface Params extends ParsedUrlQuery {
  pid: string;
}

export const getServerSideProps: GetServerSideProps<{pacientes: ResponseEntity<Paciente[]>}> = async ({req}) => {
  const pacientes = await getPacientesHistoriaSSR(req)
  return {
    props: {
      pacientes,
    },
  }
}

export default PacientesTuHistoria
