import { getLayout } from '@/src/components/layouts/filantropo/LayoutFilantropo'
import pregnantWoman from '@/public/PregnantWoman.jpg'
import { Card } from '@/src/components/filantropos/SimpleCard'
import SoyTuButton from '@/src/components/filantropos/SoyTuButton'

const Historial = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 style={{ color: '#616AC5' }} className="font-bold text-3xl">
            Historial de apoyos
          </h1>
          <p>
            Aquí podras ver los proyectos de maternidad que estás apoyando, o
            que apoyaste y ya llegaron a feliz término, dentro de cada uno verás
            la información del estado de salud de la madre, si tiene algún
            requerimiento vigente y el histórico de su acompañamiento a la
            salud.
          </p>
        </div>
        <h2 style={{ color: '#E26D83' }} className="font-bold text-xl">
          ¿Qué deseas hacer hoy?
        </h2>
        <div className="space-y-5 px-5 text-sm ">
          <h1 style={{ color: '#616AC5' }} className="font-bold text-2xl">
            Apoyos a proyectos activos
          </h1>
          <div className="overflow-x-auto scroll-smooth px-5">
            <div className="flex flex-nowrap gap-5">
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
            </div>
          </div>
          <div className="flex w-full justify-center">
            <SoyTuButton className="w-1/2">Cargar más</SoyTuButton>
          </div>
        </div>
        <div className="space-y-5 px-5 text-sm ">
          <h1 style={{ color: '#616AC5' }} className="font-bold text-2xl">
            Apoyos finalizados
          </h1>
          <div className="overflow-x-auto scroll-smooth px-5">
            <div className="flex flex-nowrap gap-5">
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
            </div>
          </div>
          <div className="flex w-full justify-center">
            <SoyTuButton className="w-1/2">Cargar más</SoyTuButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Historial.getLayout = getLayout

export default Historial
