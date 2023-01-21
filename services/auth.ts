import axios from 'axios'

export const loginService = async (payload: any) => {
  console.log('payload: ', payload)
  return await axios.post('/api/v1/auth/login', payload)
}
