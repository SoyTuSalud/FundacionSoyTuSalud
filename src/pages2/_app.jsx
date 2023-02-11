import {useEffect, useState} from 'react'
import {ThemeProvider} from '@mui/material/styles'
import {lightTheme} from '../components/Ui/themes/lightTheme'
import {appWithTranslation} from 'next-i18next'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

import '../styles/globals.css'
import '../styles/SignInPage.css'
import '../styles/HistoriesPage.css'
import '../styles/TrazabilidadPage.css'
import '../styles/TuHistoria.css'
import '../styles/trabajaNosotros.css'
import '../components/Ui/loading/loading.css'
import '../components/Ui/popup/popup.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Provider as ReduxProvider, useDispatch} from 'react-redux'
import {store} from '../redux/store'

import {checkTokenThunk, logoutThunk} from '../redux/auth/thunks'
import {signInReducer} from '../redux/auth/authSlice'

import {decode} from 'jsonwebtoken'
import {useCookies} from "react-cookie";


const CheckingToken = ({ children }) => {

  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const dispatch = useDispatch()
  const checkToken = () => {

    const user = decode(cookies.token)
    if (user) {
      return dispatch(signInReducer(user))
    }

    if (!user) {
     return dispatch(logoutThunk())
    }

    return dispatch(checkTokenThunk(user))
  }

  useEffect(() => {
    checkToken()
  }, [])

  return children
}

function MyApp({ Component, pageProps }) {
  const [componentStatus, setComponentStatus] = useState({})

  const queryClient = new QueryClient()

  return (
    <ReduxProvider store={store}>
        <CheckingToken>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
                <ThemeProvider theme={lightTheme}>
                      <Component {...pageProps} />
                </ThemeProvider>
          </QueryClientProvider>
        </CheckingToken>
    </ReduxProvider>
  )
}

export default appWithTranslation(MyApp)
