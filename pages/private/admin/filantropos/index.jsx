import { useState, useEffect } from 'react'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { client } from '../../../../graphqlBack-front/initClientSide'
import { filantropos } from '../../../../graphqlBack-front/filantropos/queries'
import Head from 'next/head'
import { useLazyQuery } from '@apollo/client'
import { Box } from '@mui/system'
import { Container } from '@mui/material'
import Alert from '../../../../components/Ui/alert/Alert'
import { ResponseCodes } from '../../../../backend/domain/commons/enums/responseCodesEnum'
import { PacientesTablas } from '../../../../components/pacientes/PacientesTablas'

const FilantroposPage = () => {
  const [error, setError] = useState({
    type: '',
    message: '',
  })
  const [data, setData] = useState()

  const [getPacientes] = useLazyQuery(filantropos)

  useEffect(() => {
    getPacientes()
      .then(({ data }) => {
        console.log(data)
        const request = data.Filantropos
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
        <title>Filantropos</title>
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
          {data && (
            <>
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

// export const getServerSideProps = async (ctx) => {
//   const { data } = await client.query({
//     query: filantropos,
//   })
//   return {
//     props: {
//       data,
//     },
//   }
// }

export default FilantroposPage
