import { createSlice } from '@reduxjs/toolkit'

type UserState = 'checking' | 'authenticated' | 'not-authenticated'

interface InitialState {
  status: UserState
  user: Object | undefined
  token: string | undefined
  errorMessage: string | undefined
}

const initialState: InitialState = {
  status: 'checking',
  user: undefined,
  token: undefined,
  errorMessage: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkingReducer: (state) => {
      state.status = 'checking'
    },

    signInReducer: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
      state.token = payload.token
      state.errorMessage = undefined
    },

    logoutReducer: (state) => {
      state.status = 'not-authenticated'
      state.user = undefined
      state.token = undefined
      state.errorMessage = undefined
    },
  },
})

export const { checkingReducer, signInReducer, logoutReducer } =
  authSlice.actions
