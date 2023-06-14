  export const verifyAccount = async (token: string) => {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const httpLink =
    process.env.ENV_API_GRAPHQL || process.env.NEXT_PUBLIC_API_GRAPHQL || ''

  var graphql = JSON.stringify({
    query:
      'mutation VerifyAccount($token: String) {\n  verifyAccount(token: $token) {\n    status {\n      code\n      description\n    }\n  }\n}\n',
    variables: { token },
  })
  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
    redirect: 'follow',
  }

  return await fetch(httpLink, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result
    })
    .catch((error) => console.log('error', error))
}
