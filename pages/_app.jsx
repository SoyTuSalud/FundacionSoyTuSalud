import { useState } from 'react'
import { client } from '../graphql-front/initClientSide'
import { ApolloProvider } from '@apollo/client'
import { AuthContext } from '../context/useAuth'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '../components/Ui/themes/lightTheme'
import { appWithTranslation } from 'next-i18next'
import { ComponentContext } from '../context/useComponents'

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

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [authUser, setAuthUser] = useState()
  const [componentStatus, setComponentStatus] = useState({})

  const queryClient = new QueryClient()

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={client}>
          <PopupProvider>
            <ThemeProvider theme={lightTheme}>
              <AuthContext.Provider value={{ authUser, setAuthUser }}>
                <ComponentContext.Provider
                  value={{ componentStatus, setComponentStatus }}
                >
                  <Component {...pageProps} />
                </ComponentContext.Provider>
              </AuthContext.Provider>
            </ThemeProvider>
          </PopupProvider>
        </ApolloProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(MyApp)
