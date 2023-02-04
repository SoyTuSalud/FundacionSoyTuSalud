import { Box, Container } from '@mui/material'
import Head from 'next/head'
import NewPrivateLayout from '@/components/layouts/NewPrivateLayout/NewPrivateLayout'
import { PacientesToolbar } from '@/components/pacientes/PacientesToolbar'
import { PacientesTablas } from '@/components/pacientes/PacientesTablas'
import Alert from '@/components/Ui/alert/Alert'
import {useApi} from "@/hooks/useApi";



const PacientesPage = () => {

  const { pacientesQuery } = useApi()

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
          height:100
        }}
      >
        <Container maxWidth={false}>
          {pacientesQuery.data && (
            <>
              <PacientesToolbar tab={0} />
              <Box sx={{ mt: 3 }}>
                <PacientesTablas UsuariosTabla={pacientesQuery.data.body} customers={undefined} />
              </Box>
            </>
          )}
          {pacientesQuery.isLoading && <h1>Cargando</h1>}
          {pacientesQuery.isError && <Alert config={pacientesQuery.isError} />}
        </Container>
      </Box>

    </NewPrivateLayout>
  )
}


export default PacientesPage
