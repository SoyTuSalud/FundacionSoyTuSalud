import { Box, Container } from '@mui/material'
import Head from 'next/head'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { PacientesToolbar } from '../../../../components/pacientes/PacientesToolbar'
import { pacientesTabla } from '../../../../graphql-front/paciente/queries'
import { PacientesTablas } from '../../../../components/pacientes/PacientesTablas'
import { useLazyQuery } from '@apollo/client'
import { ResponseCodes } from '../../../../backend/domain/commons/enums/responseCodesEnum'
import { useEffect, useState } from 'react'
import Alert from '../../../../components/Ui/alert/Alert'

const PacientesPage = () => {
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
      }).catch(() => {
        setError({
          message: 'Error en el Server, contacte el administrador',
          type: 'error',
        })
      })
  }, [])

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
          {data && (
            <>
              <PacientesToolbar tab={0} />
              <Box sx={{ mt: 3 }}>
                <PacientesTablas UsuariosTabla={data} />
              </Box>
            </>
          )}
          {error && <Alert config={error} />}
        </Container>
      </Box>
    </NewPrivateLayout>
  )
}


export default PacientesPage
