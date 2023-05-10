import { ReactElement } from "react";
import { LayoutFilantropo, getLayout } from "@/src/components/layouts/filantropo/LayoutFilantropo";
import pregnantWoman from "@/public/PregnantWoman.jpg";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from '@mui/material/Select';
import ProjectCard from "@/src/components/filantropos/ProjectCard";
import SoyTuButton from "@/src/components/filantropos/SoyTuButton";

const Proyectos = () => {

  return (
    <div style={{ backgroundColor: "#FEFEFE" }}>
      <div className="container space-y-9">
        <div className="space-y-5 px-5">
          <h1 style={{ color: "#616AC5" }} className="font-bold text-3xl">
                Proyectos de maternidad
          </h1>
          <p>Los proyectos de maternidad son las madres de bajos recursos a las que la fundación busca apoyar a tráves de las donaciones, de manera que tengan un acompañamiento integral en salud y puedan llevar su embarazo a feliz término.</p>
        </div>
        <div className="px-5 flex flex-row items-center sm:space-x-1 md:space-x-3 lg:space-x-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Edad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Meses de gestación</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Valor mínimo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl><FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Valor máximo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <SoyTuButton className="w-auto">Filtrar</SoyTuButton>
        </div>
        <div 
            className="px-5 flex"
        >
          <div className="space-x-5 lg:space-x-20 inline-flex overflow-x-scroll scroll-smooth">
            <ProjectCard img={pregnantWoman} />
            <ProjectCard img={pregnantWoman} />
            <ProjectCard img={pregnantWoman} />
          </div>
        </div>
      </div>
    </div>
  )
}

Proyectos.getLayout = getLayout

export default Proyectos;