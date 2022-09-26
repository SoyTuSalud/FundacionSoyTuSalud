export const validateUser = async () => {
  var myHeaders = new Headers()
  myHeaders.append(
    'Authorization',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMwY2MzNGFkODFkN2E5Y2Y3OTRhMWUiLCJyb2xlIjoiQURNSU4iLCJpZGVudGlmaWNhY2lvbiI6IjEwMzc2NDUyMzQiLCJub21icmUiOiJTZWJhc3RpYW4iLCJhcGVsbGlkb3MiOiJDYWJyZXJhIiwidGlwb0RvY3VtZW50byI6IkNDIiwiY2VsdWxhciI6IjMxMzU2MzU1NjkiLCJjb3JyZW8iOiJqc2Nyb2phczI1MUBnbWFpbC5jb20iLCJfX3YiOjAsImlkIjoiNjMzMGNjMzRhZDgxZDdhOWNmNzk0YTFlIiwiaWF0IjoxNjY0MTUxNjAyLCJleHAiOjE2NjQxNTUyMDJ9.BMMlrqyWlNPbEqfra1MjsmVGNeULeAszwg1HGBvfqpM1',
  )
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append(
    'Cookie',
    'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjc3ODAzOWNmMTdkYzg3ZjAzNjhjNGIiLCJlbWFpbCI6ImRhdmlkQGdtYWlsLmNvbSIsImlhdCI6MTY1MjAyOTY3NiwiZXhwIjoxNjU0NjIxNjc2fQ.1XGwfqH68Ep7MNi1sYj7EGOtC4czDxzZ4jf_v_sjfaI',
  )

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

  return await fetch('http://localhost:3000/api/graphql', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result
    })
    .catch((error) => console.log('error', error))
}
