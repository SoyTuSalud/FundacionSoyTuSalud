import {ImageBackground, MenuFooter, Navbar} from '../Ui/public'
import {Box} from '@mui/material'


export const LayoutMain = ({ children, propsImage, t }) => {


  return (
    <Box sx={{ backgroundColor: '#F9F7F6' }}>
      <Navbar t={t}></Navbar>
      <ImageBackground propsImage={propsImage} />
      {children}
      <MenuFooter t={t}></MenuFooter>
      {/* <Loading/> */}
    </Box>
  )
}
