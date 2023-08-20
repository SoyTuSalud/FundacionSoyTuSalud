import heart from '@/public/heart2.png'
import Image from 'next/image'
import RestoreIcon from '@mui/icons-material/Restore'
import FemaleIcon from '@mui/icons-material/Female'
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined'
import { MiniCard } from '../../components/philanthropists/MiniCard'
import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'

const Supplier = () => {
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
              <MiniCard
                title={'Tratamientos realizados este mes'}
                startAdornment={25}
              />
              <MiniCard
                title={'Ordenes de servicio generadas'}
                startAdornment={10}
              />
              <MiniCard
                title={'Facturas pagadas este mes'}
                startAdornment={20}
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
              href="/"
              title={'Mis servicios'}
              startAdornment={<FemaleIcon fontSize="inherit" />}
            />
            <MiniCard
              href="/proveedor/historial"
              title={'Historial de servicios prestados'}
              startAdornment={<RestoreIcon fontSize="inherit" />}
            />
            <MiniCard
              href="/proveedor/servicios"
              title={'Solicitudes en curso'}
              startAdornment={
                <SimCardDownloadOutlinedIcon fontSize="inherit" />
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}

Supplier.getLayout = getLayout

export default Supplier
