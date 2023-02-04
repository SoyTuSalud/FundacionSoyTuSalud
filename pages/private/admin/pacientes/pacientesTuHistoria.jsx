import { Box, Container } from '@mui/material'
import Head from 'next/head'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { PacientesToolbar } from '../../../../components/pacientes/PacientesToolbar'
import { pacientesTablaTuHistoria } from '../../../../graphql-front/paciente/queries'
import { PacientesTablasTuHistoria } from '../../../../components/pacientes/PacientesTablasTuHistoria'
import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import Alert from '../../../../components/Ui/alert/Alert'
import {ResponseCodes} from "../../../../backend/common/enums/responseCodes.Enum";

const PacientesTuHistoria = () => {
  
  const [error, setError] = useState({
    type: '',
    message: '',
  })
  const [data, setData] = useState([])

  const [getPacientes] = useLazyQuery(pacientesTablaTuHistoria)

  useEffect(() => {
    getPacientes()
      .then(({ data }) => {
        const request = data.PacientesTablaTuHistoria
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
        }}
      >
        <Container maxWidth={false}>
          <PacientesToolbar tab={1} />
          <Box sx={{ mt: 3 }}>
            <PacientesTablasTuHistoria
              UsuariosTablaTuHistoria={data}
            />
          </Box>
        </Container>
      </Box>
      {error && <Alert config={error} />}
    </NewPrivateLayout>
  )
}

export default PacientesTuHistoria
