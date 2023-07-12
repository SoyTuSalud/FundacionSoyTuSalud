import { useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

function LinkTab(props) {
  return <Tab component="a" {...props} />
}

export default function NavTabs({ tab }) {
  const [value, setValue] = useState(tab)

  return (
    <Box sx={{ width: '100%' }}>
      <div className="flex w-full justify-around">
        <Link href="/private/admin/pacientes" className="no-underline " passHref>
          Todos los Pacientes
        </Link>
        <Link href="/private/admin/pacientes/pacientesTuHistoria" className="no-underline" passHref>
          Pacientes con Formulario Completado
        </Link>
      </div>
    </Box>
  )
}
