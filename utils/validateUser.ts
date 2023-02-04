export const validateUser = async (token: string) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Cookie', `token=${token}`)

  const httpLink =
    process.env.ENV_FRONT_CALL || process.env.NEXT_PUBLIC_FRONT_CALL || ''

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return await fetch(`${httpLink}/api/v1/auth/checkToken`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result
    })
    .catch((error) => console.log('error', error))

}
