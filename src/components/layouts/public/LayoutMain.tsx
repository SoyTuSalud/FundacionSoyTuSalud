import {ImageBackground, MenuFooter, Navbar} from './components'
import {Box} from '@mui/material'
import {SSRConfig, useTranslation} from 'next-i18next'
import {FC} from 'react'
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

interface propsLayout{ 
  _nextI18Next:SSRConfig
  children: ReactJSXElement
}


export const LayoutMain:FC<propsLayout> =({children, _nextI18Next}) => {


  const { t } = useTranslation()
  return (
    <Box sx={{ backgroundColor: '#F9F7F6' }}>
        <Navbar t={t}></Navbar>
        <ImageBackground />

      {children}
        <MenuFooter t={t}></MenuFooter>
    </Box>
  )
}
