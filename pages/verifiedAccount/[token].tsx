import React from 'react'
import { GetServerSideProps } from 'next'
import { initClientSSRNoToken } from '../../graphql-front/initClientSSR'
import { verifyAccount } from '../../graphql-front/users/mutationUser'
import { ResponseCodes } from '../../backend/domain/commons/enums/responseCodesEnum'

const VerificarElToken = ({ response }: any) => {
  console.log('response', response)

  return (
    <>
      <h1>{response}</h1>
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
