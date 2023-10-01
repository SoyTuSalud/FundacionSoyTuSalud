import { getLayout } from '@/src/components/layouts/philanthropist/PhilanthropistLayout'
import heart from '@/public/heart2.png'
import Image from 'next/image'
import RestoreIcon from '@mui/icons-material/Restore'
import FemaleIcon from '@mui/icons-material/Female'
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined'
import pregnantWoman from '@/public/PregnantWoman.jpg'
import { Card } from '../../components/philanthropists/SimpleCard'
import { MiniCard } from '../../components/philanthropists/MiniCard'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'

const Philanthropist = () => {
  return (
    <>
      <div className="flex flex-col rounded-xl bg-white-ghost">
        <div className="invisible absolute -z-0 mr-[5%] self-end md:visible">
          <Image src={heart} alt="heart" />
        </div>
        <div className="z-10 space-y-5 px-5 py-8">
          <h1 className="text-4xl font-bold text-pink-bright">
            Bienvenido, $Usuario
          </h1>
          <h2 className="text-xl font-extrabold text-pink-bright">
            Resumen de mi cuenta
          </h2>
          <div className="flex flex-row items-center space-x-5 md:pr-16">
            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 lg:w-3/4">
              <MiniCard title={'Madres que apoyo'} startAdornment={3} />
              <MiniCard title={'Tratamientos'} startAdornment={5} />
              <MiniCard title={'Reportes nuevos de salud'} startAdornment={2} />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5 px-5 text-sm">
        <h1 className="text-2xl font-semibold text-black ">
          ¿Qué deseas hacer hoy?
        </h1>
        <div className="flex flex-row items-center space-x-5 md:pr-16">
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 lg:w-3/4">
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
      <div className="flex flex-col space-y-5 px-5 text-sm">
        <h1 className="text-2xl font-semibold text-black ">Madres que apoyo</h1>
        <div className="relative flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 lg:gap-9">
          <div className="hidden w-5 shrink-0 [@media(pointer:coarse)]:block" />
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
          <div className="hidden w-5 shrink-0 [@media(pointer:coarse)]:block" />
        </div>
        <div className="flex w-full justify-center">
          <SoyTuButton className="w-64">Cargar más</SoyTuButton>
        </div>
      </div>
    </>
  )
}

Philanthropist.getLayout = getLayout

export default Philanthropist
