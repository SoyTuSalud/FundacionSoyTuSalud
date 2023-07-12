import axios from 'axios'
import {AuthSignInDTO, IAuthSignInDTO} from "@auth/domain/dtos/authSignIn.dto";




export const loginService = async (payload: any) => {
  // console.log('payload: ', payload)
  return await axios.post('/api/v1/auth/login', payload)
}

export const registerUser = async (payload: IAuthSignInDTO) => {
  // console.log('payload: ', payload)
  return await axios.post<IAuthSignInDTO>('/api/v1/auth/signing', payload)
}

export const checkTokenService = async (token: string) => {
  // console.log('payload: ', payload)
  return await axios.get('/api/v1/auth/checkToken', {
    // headers: {
    //   'x-token': token,
    // },
    headers: {
      Cookie: `token=${token}`,
    },
  })
}
