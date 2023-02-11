import { Dispatch } from '@reduxjs/toolkit'
import { checkingReducer, logoutReducer, signInReducer } from './authSlice'
import { checkTokenService } from '../../services/auth'

export const logoutThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(checkingReducer())

    localStorage.removeItem('token')
    dispatch(logoutReducer())
  }
}

export const checkTokenThunk = (token: string) => {
  return async (dispatch: any) => {
    dispatch(checkingReducer())
    console.log('checkTokenThunk')

    checkTokenService(token)
      .then(({ data }) => {
        if (!token) return dispatch(logoutThunk())

        console.log('data en checkTokenThunk: ', data)
        if (data.user) {
          // localStorage.setItem('token', data.token);
          // return dispatch( signInReducer( data ) );
        }

        // const { response: { statusCode, message } } = data;

        // if (statusCode !== 200) {
        //     dispatch( addErrorReducer( message ) );
        //     localStorage.removeItem('token');
        // }
      })
      .catch((error) => {
        try {
          // console.log(error.response.data.message);
          // dispatch( addErrorReducer(error.response.data.message) );
          // localStorage.removeItem('token');
        } catch (error) {
          console.error(error)
        }
      })
  }
}
