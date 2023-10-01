import { getLayout } from '@/src/components/layouts/philanthropist/PhilanthropistLayout'
import pregnantWoman from '@/public/PregnantWoman.jpg'
import ProjectCard from '@/src/components/philanthropists/DetailedCard'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
import SoyTuSelect from '@/src/components/soytu/SoyTuSelect'
import SoyTuInput from '@/src/components/soytu/SoyTuInput'

const Proyectos = () => {
  return (
    <>
      <div className="space-y-5 px-5">
        <h1 className="text-3xl font-bold text-[#616AC5]">
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
          <SoyTuSelect>
            <option selected>Edad</option>
            <option>Ten</option>
            <option>Twenty</option>
            <option>Thirty</option>
          </SoyTuSelect>
          <SoyTuSelect>
            <option selected>Meses de gestación</option>
            <option>Ten</option>
            <option>Twenty</option>
            <option>Thirty</option>
          </SoyTuSelect>
          <div className="grid grid-cols-2 gap-3 lg:col-span-2">
            <SoyTuInput type="number" placeholder="Valor mínimo" />
            <SoyTuInput type="number" placeholder="Valor máximo" />
          </div>
          <SoyTuButton className="w-auto">Filtrar</SoyTuButton>
        </div>
      </div>
      <div className="space-y-5 px-5 text-sm">
        <div className="relative">
          <div className="">
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
              <ProjectCard img={pregnantWoman} />
              <ProjectCard img={pregnantWoman} />
              <ProjectCard img={pregnantWoman} />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <SoyTuButton className="w-64">Cargar más</SoyTuButton>
        </div>
      </div>
    </>
  )
}

Proyectos.getLayout = getLayout

export default Proyectos
