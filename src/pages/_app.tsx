import {FC, ReactElement, ReactNode, useState} from 'react'
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

import {NextPage} from "next";
import {AppProps} from "next/app";



export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement , propsLayout:{}) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  
    const getLayout = Component.getLayout || ((page) => page)

    const queryClient = new QueryClient()

    return(
        <ReduxProvider store={store}>
              <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools/>
                    <ThemeProvider theme={lightTheme}>
                      {getLayout(<Component {...pageProps}/>, pageProps )}
                    </ThemeProvider>
              </QueryClientProvider>
        </ReduxProvider>)
}



export default appWithTranslation(MyApp as FC)
