export const validateUser = async (token) => {

  var myHeaders = new Headers()
  myHeaders.append(
    'Authorization',
    token,
  )
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append(
    'Cookie',
    `token=${token}`,
  )

  const httpLink = process.env.ENV_API_GRAPHQL || process.env.NEXT_PUBLIC_API_GRAPHQL


  var graphql = JSON.stringify({
    query: 'query Query {\n  verifyAdmin\n}',
    variables: {},
  })
  var requestOptions = {
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
