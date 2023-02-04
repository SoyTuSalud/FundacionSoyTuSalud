import { useEffect, useState } from 'react'
import { client } from '../graphql-front/initClientSide'
import { ApolloProvider } from '@apollo/client'
import { AuthContext } from '../context/useAuth'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '../components/Ui/themes/lightTheme'
import { appWithTranslation } from 'next-i18next'
import { ComponentContext } from '../context/useComponents'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

import '../styles/globals.css'
import '../styles/SignInPage.css'
import '../styles/HistoriesPage.css'
import '../styles/TrazabilidadPage.css'
import '../styles/TuHistoria.css'
import '../styles/trabajaNosotros.css'
import '../components/Ui/loading/loading.css'
import '../components/Ui/popup/popup.css'
import { PopupProvider } from '../context/popup'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { Provider as ReduxProvider, useDispatch } from 'react-redux'
import { store } from '../redux/store'

import { checkTokenThunk, logoutThunk } from '../redux/auth/thunks'
import { checkingReducer } from '../redux/auth/authSlice'


/*
const CheckingToken = ({ children }) => {
  const dispatch = useDispatch()
  const checkToken = () => {
    dispatch(checkingReducer())
    const token = localStorage.getItem('token')

    if (!token) {
      dispatch(logoutThunk())
    }

    dispatch(checkTokenThunk(token))
  }

  useEffect(() => {
    checkToken()
  }, [])

  return children
}
 */



function MyApp({ Component, pageProps }) {
  const [authUser, setAuthUser] = useState()
  const [componentStatus, setComponentStatus] = useState({})

  const queryClient = new QueryClient()

  return (
    <ReduxProvider store={store}>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            <ApolloProvider client={client}>
              <PopupProvider>
                <ThemeProvider theme={lightTheme}>
                    <ComponentContext.Provider
                      value={{ componentStatus, setComponentStatus }}
                    >
                      <Component {...pageProps} />
                    </ComponentContext.Provider>
                </ThemeProvider>
              </PopupProvider>
            </ApolloProvider>
          </QueryClientProvider>
        </SessionProvider>
    </ReduxProvider>
  )
}

export default appWithTranslation(MyApp)
