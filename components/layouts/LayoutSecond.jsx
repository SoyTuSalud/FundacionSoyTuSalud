import { useEffect } from 'react'
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'
import { auth } from '../../firebase/initConfig'
import { useAuth } from '../../context/useAuth'
import { client } from '../../graphql-front/initClientSide'
import { authUser } from '../../graphql-front/paciente/queries'
import { Navbar, ImageBackground, MenuFooter } from '../Ui/public'
import { Box } from '@mui/material'
import { useCookies } from 'react-cookie'
import { decode } from 'jsonwebtoken'
import { NavbarSolid } from '../Ui/public/NavbarSolid'

export const LayoutSecond = ({ children, propsImage, t }) => {
  const { setAuthUser } = useAuth()
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  useEffect(() => {
    const user = decode(cookies.token)
    if (user) {
      setAuthUser(user)
    }
  }, [])

  return (
    <Box sx={{ backgroundColor: '#F9F7F6' }}>
      <NavbarSolid t={t}></NavbarSolid>
      {children}
      <MenuFooter t={t}></MenuFooter>
    </Box>
  )
}
