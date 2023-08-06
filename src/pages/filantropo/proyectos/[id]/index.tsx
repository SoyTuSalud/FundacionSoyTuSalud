import pregnantWoman from '@/public/PregnantWoman.jpg'
import { getLayout } from '@/src/components/layouts/filantropo/LayoutFilantropo'
import Image from 'next/image'
import SoyTuButton from '@/src/components/filantropos/SoyTuButton'

const Detail = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 max-lg:justify-items-center">
      <div className="min-w-[20rem] max-w-sm px-6 md:px-0">
        <div className="rounded-xl bg-white-ghost text-lg">
          <Image
            src={pregnantWoman}
            alt="pregnantWoman"
            className="bg-cover bg-center object-cover h-72 rounded-t-xl"
          />
          <div className="px-6 py-3">
            <h1 className="text-black font-semibold text-center">
              Paula Andrea Cáceres
            </h1>
            <ul className="flex flex-col gap-1 mt-3">
              <li className="flex justify-between items-center gap-3">
                <span className="text-left">Edad:</span>
                <span className="text-right">21 años</span>
              </li>
              <li className="flex justify-between items-center  gap-3">
                <span className="text-left">Meses de gestación:</span>
                <span className="text-right">5</span>
              </li>
              <li className="flex justify-between items-center gap-3">
                <span className="text-left">Haz ayudado con:</span>
                <span className="text-right">$300.000</span>
              </li>
              <li className="flex justify-between items-center gap-3">
                <span className="text-left">Riesgo:</span>
                <span className="text-right">Medio</span>
              </li>
            </ul>
            <div className="p-6">
              <SoyTuButton variant="outlined" className="self-center">
                Atrás
              </SoyTuButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-6 md:px-3 xl:px-0 text-lg lg:col-span-2">
        <div className="flex flex-col items-center gap-3 after:my-3 after:w-full after:h-[1px] after:bg-black">
          <div className="text-2xl text-black">
            <span className="inline-flex items-center justify-center font-black text-white p-6 rounded-full w-9 h-9 mr-3 bg-[#4224E9]">
              01
            </span>
            Mes
          </div>
          <p className="mt-1 text-center">
            Sed ud perspiciatis unde omnis ise natus error sit voluptatem
            accusantium
          </p>
          <div className="flex mt-3">
            <div className="flex flex-col text-right text-black">
              <span>Septiembre 01 2022</span>
              <span>Octubre 06 2022</span>
            </div>
            <div className="flex flex-col mx-3">
              <span className="border-l h-full border-black" />
            </div>
            <div className="flex flex-col text-left text-gray-600">
              <span>Exámenes de rutina</span>
              <span>Ecografía</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 after:my-3 after:w-full after:h-[1px] after:bg-black">
          <div className="text-2xl text-black">
            <span className="inline-flex items-center justify-center font-black text-white p-6 rounded-full w-9 h-9 mr-3 bg-[#4224E9]">
              02
            </span>
            Mes
          </div>
          <p className="mt-1 text-center">
            Sed ud perspiciatis unde omnis ise natus error sit voluptatem
            accusantium
          </p>
          <div className="flex mt-3">
            <div className="flex flex-col text-right text-black">
              <span>Septiembre 01 2022</span>
              <span>Octubre 06 2022</span>
            </div>
            <div className="flex flex-col mx-3">
              <span className="border-l h-full border-black" />
            </div>
            <div className="flex flex-col text-left text-gray-600">
              <span>Exámenes de rutina</span>
              <span>Ecografía</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="text-2xl text-black">
            <span className="inline-flex items-center justify-center font-black text-white p-6 rounded-full w-9 h-9 mr-3 bg-[#707070]">
              03
            </span>
            Mes
          </div>
          <div className="items-center justify-center rounded-xl relative bg-white-ghost">
            <div className="px-6 py-3 flex flex-col justify-center items-center text-black">
              <h3 className=" font-bold">Última solicitud</h3>
              <div className="my-3 space-y-2">
                <h6 className=" text-black font-semibold">Descripción</h6>
                <p className="text-gray-500">
                  Sed ud perspiciatis unde omnis ise natus error sit voluptatem
                  accusantium
                </p>
                <h6 className=" text-black font-semibold">Valor: $250.000</h6>
              </div>
              <SoyTuButton className="w-1/2">Apoyar</SoyTuButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Detail.getLayout = getLayout

export default Detail
