import { getLayout } from '@/src/components/layouts/filantropo/LayoutFilantropo'
import pregnantWoman from '@/public/PregnantWoman.jpg'
import { FormControl, InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select'
import ProjectCard from '@/src/components/filantropos/DetailedCard'
import SoyTuButton from '@/src/components/filantropos/SoyTuButton'

const Proyectos = () => {
  return (
    <>
      <div className="space-y-5 px-5">
        <h1 className="font-bold text-3xl text-[#616AC5]">
          Proyectos de maternidad
        </h1>
        <p>
          Los proyectos de maternidad son las madres de bajos recursos a las que
          la fundación busca apoyar a tráves de las donaciones, de manera que
          tengan un acompañamiento integral en salud y puedan llevar su embarazo
          a feliz término.
        </p>
      </div>
      <div className="space-y-5 px-5">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">
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
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
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
      <div className="space-y-5 px-5 text-sm">
        <div className="relative">
          <div className="">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9">
              <ProjectCard img={pregnantWoman} />
              <ProjectCard img={pregnantWoman} />
              <ProjectCard img={pregnantWoman} />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <SoyTuButton className="self-center w-1/2 sm:w-1/3 md:w-1/5">
            Cargar más
          </SoyTuButton>
        </div>
      </div>
    </>
  )
}

Proyectos.getLayout = getLayout

export default Proyectos
