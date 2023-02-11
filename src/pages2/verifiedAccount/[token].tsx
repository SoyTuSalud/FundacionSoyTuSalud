import React from 'react'
import { GetServerSideProps } from 'next'
import { initClientSSRNoToken } from '../../graphqlBack-front/initClientSSR'
import { verifyAccount } from '../../graphqlBack-front/users/mutationUser'
import { ResponseCodes } from '../../backend/domain/commons/enums/responseCodesEnum'
import Link from 'next/link'

const VerificarElToken = ({ response }: any) => {
  console.log('response', response)

  return (
    <>
      <h1>Bienvenido, su cuenta ha sido verificada.</h1>
      <Link href="/" replace>
        Ir al home
      </Link>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const token = params?.token!

  const clientSSR = initClientSSRNoToken()

  const response = await clientSSR
    .mutate({
      mutation: verifyAccount,
      variables: {
        token,
      },
    })
    .then(({ data }) => {
      return data.verifyAccount.status.code
    })
    .catch((error) => {
      console.log(error.message)
      return ResponseCodes.ERROR_AUTH
    })

  return {
    props: {
      response,
    },
  }
}

export default VerificarElToken
