import { useState } from 'react'
import '../styles/globals.css'
import { client } from '../graphql-front/initClientSide'
import { ApolloProvider } from '@apollo/client'
import { AuthContext } from '../context/useAuth'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '../components/Ui/themes/lightTheme'
import { appWithTranslation } from 'next-i18next'
import { ComponentContext } from '../context/useComponents'

function MyApp({ Component, pageProps }) {
  const [authUser, setAuthUser] = useState({})
  const [componentStatus, setComponentStatus] = useState({})
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={lightTheme}>
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
          <ComponentContext.Provider
            value={{ componentStatus, setComponentStatus }}
          >
            <Component {...pageProps} />
          </ComponentContext.Provider>
        </AuthContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default appWithTranslation(MyApp)
