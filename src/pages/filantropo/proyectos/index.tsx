import { getLayout } from '@/src/components/layouts/filantropo/LayoutFilantropo'
import pregnantWoman from '@/public/PregnantWoman.jpg'
import { FormControl, InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select'
import ProjectCard from '@/src/components/filantropos/DetailedCard'
import SoyTuButton from '@/src/components/filantropos/SoyTuButton'
import Box from '@mui/material/Box'

const Proyectos = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9">
        <div className="space-y-5 px-5">
          <h1 style={{ color: '#616AC5' }} className="font-bold text-3xl">
            Proyectos de maternidad
          </h1>
          <p>
            Los proyectos de maternidad son las madres de bajos recursos a las
            que la fundación busca apoyar a tráves de las donaciones, de manera
            que tengan un acompañamiento integral en salud y puedan llevar su
            embarazo a feliz término.
          </p>
        </div>
        <div className="space-y-5 px-5">
          <div className="grid grid-cols-1 gap-5">
            <FormControl fullWidth>
              <InputLabel id="edad">Edad</InputLabel>
              <Select labelId="edad" id="simple-select">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="meses">Meses de gestación</InputLabel>
              <Select labelId="meses" id="simple-select">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <div className="grid grid-cols-2 gap-5">
              <FormControl fullWidth>
                <InputLabel id="minimo">Valor mínimo</InputLabel>
                <Select labelId="minimo" id="simple-select">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="maximo">Valor máximo</InputLabel>
                <Select labelId="maximo" id="simple-select">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <SoyTuButton className="w-auto">Filtrar</SoyTuButton>
          </div>
        </div>
        <div className="px-5 flex">
          <Box
            className="space-x-5 lg:space-x-20 inline-flex overflow-x-auto scroll-smooth px-5"
            sx={{
              WebkitOverflowScrolling: 'touch',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            <ProjectCard img={pregnantWoman} />
            <ProjectCard img={pregnantWoman} />
            <ProjectCard img={pregnantWoman} />
          </Box>
        </div>
      </div>
    </div>
  )
}

Proyectos.getLayout = getLayout

export default Proyectos
