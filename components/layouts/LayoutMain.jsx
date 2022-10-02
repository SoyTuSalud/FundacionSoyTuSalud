import { useEffect } from 'react'
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'
import { auth } from '../../firebase/initConfig'
import { useAuth } from '../../context/useAuth'
import { client } from '../../graphql-front/initClientSide'
import { authUser } from '../../graphql-front/paciente/queries'
import { Navbar, ImageBackground, MenuFooter } from '../Ui/public'
import { Box } from '@mui/material'
import { useCookies } from 'react-cookie'
import { decode} from 'jsonwebtoken'

export const LayoutMain = ({ children, propsImage, t }) => {
  const { setAuthUser } = useAuth()
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    const user = decode(cookies.token)

    console.log(user)
  }, [])

  // useEffect(() => {
  //   const login = localStorage.getItem('login')
  //   if (!login) {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         localStorage.setItem('login', true)
  //         localStorage.setItem('userUid', user.uid)
  //       }
  //     })
  //   }
  // }, [])

  return (
    <Box sx={{ backgroundColor: '#F9F7F6' }}>
      {/* <Navbar t={t}></Navbar> */}
      <ImageBackground propsImage={propsImage} />
      {children}
      <MenuFooter t={t}></MenuFooter>
    </Box>
  )
}
