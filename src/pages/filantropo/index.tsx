import { getLayout } from '@/src/components/layouts/philanthropist/PhilanthropistLayout'
import heart from '@/public/heart2.png'
import Image from 'next/image'
import RestoreIcon from '@mui/icons-material/Restore'
import FemaleIcon from '@mui/icons-material/Female'
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined'
import pregnantWoman from '@/public/PregnantWoman.jpg'
import { Card } from '../../components/philanthropists/SimpleCard'
import { MiniCard } from '../../components/philanthropists/MiniCard'
import SoyTuButton from '@/src/components/philanthropists/SoyTuButton'

const Philanthropist = () => {
  return (
    <>
      <div className="rounded-xl flex flex-col bg-white-ghost">
        <div className="invisible md:visible absolute self-end -z-0 mr-[5%]">
          <Image src={heart} alt="heart" />
        </div>
        <div className="space-y-5 px-5 py-8 z-10">
          <h1 className="font-bold text-4xl text-pink-bright">
            Bienvenido, $Usuario
          </h1>
          <h2 className="font-extrabold text-xl text-pink-bright">
            Resumen de mi cuenta
          </h2>
          <div className="items-center flex flex-row space-x-5 md:pr-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full lg:w-3/4">
              <MiniCard title={'Madres que apoyo'} startAdornment={3} />
              <MiniCard title={'Tratamientos'} startAdornment={5} />
              <MiniCard title={'Reportes nuevos de salud'} startAdornment={2} />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5 px-5 text-sm">
        <h1 className="text-black font-semibold text-2xl ">
          ¿Qué deseas hacer hoy?
        </h1>
        <div className="items-center flex flex-row space-x-5 md:pr-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full lg:w-3/4">
            <MiniCard
              title={'Ver madres que necesitan apoyo'}
              startAdornment={<FemaleIcon fontSize="inherit" />}
            />
            <MiniCard
              title={'Historial de apoyos de la cuenta'}
              startAdornment={<RestoreIcon fontSize="inherit" />}
            />
            <MiniCard
              title={'Descargar certificado de donación'}
              startAdornment={
                <SimCardDownloadOutlinedIcon fontSize="inherit" />
              }
            />
          </div>
        </div>
      </div>
      <div className="space-y-5 px-5 text-sm flex flex-col">
        <h1 className="text-black font-semibold text-2xl ">Madres que apoyo</h1>
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
        <SoyTuButton className="self-center w-1/2 sm:w-1/3 md:w-1/5">
          Cargar más
        </SoyTuButton>
      </div>
    </>
  )
}

Philanthropist.getLayout = getLayout

export default Philanthropist
