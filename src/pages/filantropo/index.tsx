import {
  LayoutFilantropo,
  getLayout,
} from '@/src/components/layouts/filantropo/LayoutFilantropo'
import heart from '@/public/heart2.png'
import Image from 'next/image'
import RestoreIcon from '@mui/icons-material/Restore'
import FemaleIcon from '@mui/icons-material/Female'
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined'
import pregnantWoman from '@/public/PregnantWoman.jpg'
import { Card } from '../../components/filantropos/SimpleCard'
import { MiniCard } from '../../components/filantropos/MiniCard'
import { Box } from '@mui/material'
import SoyTuButton from '@/src/components/filantropos/SoyTuButton'

const Filantropo = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9">
        <div
          style={{ backgroundColor: '#EFF2FB' }}
          className="rounded-xl flex flex-col"
        >
          <div
            className="invisible md:visible absolute self-end -z-0"
            style={{ marginRight: '5%' }}
          >
            <Image src={heart} alt="heart" />
          </div>
          <div className="space-y-5 px-5 py-8 z-10">
            <h1 style={{ color: '#E26D83' }} className="font-bold text-4xl">
              Bienvenido, usuario
            </h1>
            <h2 style={{ color: '#E26D83' }} className="font-extrabold text-xl">
              Resumen de mi cuenta
            </h2>
            <div className="items-center flex flex-row space-x-5 md:pr-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full lg:w-3/4">
                <MiniCard title={'Madres que apoyo'} startAdornment={3} />
                <MiniCard title={'Tratamientos'} startAdornment={5} />
                <MiniCard
                  title={'Reportes nuevos de salud'}
                  startAdornment={2}
                />
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
          <h1 className="text-black font-semibold text-2xl ">
            Madres que apoyo
          </h1>
          <Box
            className="overflow-x-auto scroll-smooth px-5 md:px-0"
            sx={{
              WebkitOverflowScrolling: 'touch',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
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
              <Card
                img={pregnantWoman}
                title={'Paula Andrea Rojas'}
                sub={'21 años'}
              />
            </div>
          </Box>
          <SoyTuButton className="self-center w-1/2 sm:w-1/3 md:w-1/5">
            Cargar más
          </SoyTuButton>
        </div>
      </div>
    </div>
  )
}

Filantropo.getLayout = getLayout

export default Filantropo
