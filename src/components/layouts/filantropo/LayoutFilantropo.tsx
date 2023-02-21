import {Box} from '@mui/material'
import {SSRConfig, useTranslation} from 'next-i18next'
import {FC} from 'react'
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import Navbar from "@/src/components/layouts/filantropo/components/Navbar";

interface propsLayout{ 
  _nextI18Next:SSRConfig
  children: ReactJSXElement
}


export const LayoutFilantropo:FC<propsLayout> =({children, _nextI18Next}) => {

  const { t } = useTranslation()
  return (
    <Box sx={{ backgroundColor: '#FEFEFE' }} className="space-y-14 h-screen">
      <Navbar/>
      {children}
    </Box>
  )
}
