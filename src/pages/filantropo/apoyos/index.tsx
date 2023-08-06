import { getLayout } from '@/src/components/layouts/filantropo/LayoutFilantropo'
import pregnantWoman from '@/public/PregnantWoman.jpg'
import { Card } from '@/src/components/filantropos/SimpleCard'
import SoyTuButton from '@/src/components/filantropos/SoyTuButton'

const Historial = () => {
  return (
    <>
      <div className="space-y-5 px-5">
        <h1 className="font-bold text-3xl text-primary">Historial de apoyos</h1>
        <p>
          Aquí podras ver los proyectos de maternidad que estás apoyando, o que
          apoyaste y ya llegaron a feliz término, dentro de cada uno verás la
          información del estado de salud de la madre, si tiene algún
          requerimiento vigente y el histórico de su acompañamiento a la salud.
        </p>
      </div>
      <div className="space-y-5 px-5">
        <h2 className="font-bold text-xl text-pink-bright">
          ¿Qué deseas hacer hoy?
        </h2>
      </div>
      <div className="space-y-5 px-5 text-sm ">
        <h1 className="font-bold text-2xl text-primary">
          Apoyos a proyectos activos
        </h1>
        <div className="relative w-full flex gap-6 lg:gap-9 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3">
          <div className="hidden shrink-0 w-5 [@media(pointer:coarse)]:block" />
          <Card
            img={pregnantWoman}
            title={'Paula Andrea Rojas'}
            sub={'21 años'}
          />
          <Card
            img={pregnantWoman}
            title={'Paula Andrea Rojas'}
            sub={'21 años'}
          />
          <Card
            img={pregnantWoman}
            title={'Paula Andrea Rojas'}
            sub={'21 años'}
          />
          <Card
            img={pregnantWoman}
            title={'Paula Andrea Rojas'}
            sub={'21 años'}
          />
          <div className="hidden shrink-0 w-5 [@media(pointer:coarse)]:block" />
        </div>
        <div className="flex w-full justify-center">
          <SoyTuButton className="w-64">Cargar más</SoyTuButton>
        </div>
      </div>
      <div className="space-y-5 px-5 text-sm ">
        <h1 className="font-bold text-2xl text-primary">Apoyos finalizados</h1>
        <div className="relative w-full flex gap-6 lg:gap-9 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3">
          <div className="hidden shrink-0 w-5 [@media(pointer:coarse)]:block" />
          <Card
            img={pregnantWoman}
            title={'Paula Andrea Rojas'}
            sub={'21 años'}
          />
          <Card
            img={pregnantWoman}
            title={'Paula Andrea Rojas'}
            sub={'21 años'}
          />
          <Card
            img={pregnantWoman}
            title={'Paula Andrea Rojas'}
            sub={'21 años'}
          />
          <Card
            img={pregnantWoman}
            title={'Paula Andrea Rojas'}
            sub={'21 años'}
          />
          <div className="hidden shrink-0 w-5 [@media(pointer:coarse)]:block" />
        </div>
        <div className="flex w-full justify-center">
          <SoyTuButton className="w-64">Cargar más</SoyTuButton>
        </div>
      </div>
    </>
  )
}

Historial.getLayout = getLayout

export default Historial
