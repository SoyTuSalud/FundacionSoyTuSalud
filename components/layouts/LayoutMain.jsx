import { useEffect } from 'react'
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'
import { auth } from '../../firebase/initConfig'
import { useAuth } from '../../context/useAuth'
import { client } from '../../graphql-front/initClientSide'
import { authUser } from '../../graphql-front/user/queries'
import { Navbar, ImageBackground, MenuFooter } from '../Ui/public'
import { Box } from '@mui/material'

export const LayoutMain = ({ children, propsImage, t }) => {
  // const { setAuthUser } = useAuth()

  // useEffect(() => {
  //   let uid = localStorage.getItem('userUid')
  //   if (!uid) {
  //     uid = ''
  //   }
  // client
  //   .query({
  //     query: authUser,

  //     variables: {
  //       uid,
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response.data.Usuario.status.code)

  //     if (response.data.Usuario.status.code === 'S_02') {
  //       setAuthUser(null)
  //     } else {
  //       setAuthUser(response.data.Usuario)
  //     }
  //   })
  // }, [])

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
      <Navbar t={t}></Navbar>
      <ImageBackground propsImage={propsImage} />
      {children}
      <MenuFooter t={t}></MenuFooter>
    </Box>
  )
}
