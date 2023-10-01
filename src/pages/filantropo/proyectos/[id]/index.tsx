import pregnantWoman from '@/public/PregnantWoman.jpg'
import Image from 'next/image'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
import { getLayout } from '@/src/components/layouts/philanthropist/PhilanthropistLayout'

const Detail = () => {
  return (
    <div className="grid grid-cols-1 gap-9 max-lg:justify-items-center lg:grid-cols-3">
      <div className="min-w-[20rem] max-w-sm px-6 md:px-0">
        <div className="rounded-xl bg-white-ghost text-lg">
          <Image
            src={pregnantWoman}
            alt="pregnantWoman"
            className="h-72 rounded-t-xl bg-cover bg-center object-cover"
          />
          <div className="px-6 py-3">
            <h1 className="text-center font-semibold text-black">
              Paula Andrea Cáceres
            </h1>
            <ul className="mt-3 flex flex-col gap-1">
              <li className="flex items-center justify-between gap-3">
                <span className="text-left">Edad:</span>
                <span className="text-right">21 años</span>
              </li>
              <li className="flex items-center justify-between  gap-3">
                <span className="text-left">Meses de gestación:</span>
                <span className="text-right">5</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span className="text-left">Haz ayudado con:</span>
                <span className="text-right">$300.000</span>
              </li>
              <li className="flex items-center justify-between gap-3">
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
      <div className="flex flex-col items-center px-6 text-lg md:px-3 lg:col-span-2 lg:flex-col-reverse xl:px-0">
        <div>
          <div className="flex flex-col items-center gap-3 after:my-3 after:h-[1px] after:w-full after:bg-black">
            <div className="text-2xl text-black">
              <span className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#4224E9] p-6 font-black text-white">
                01
              </span>
              Mes
            </div>
            <p className="mt-1 text-center">
              Sed ud perspiciatis unde omnis ise natus error sit voluptatem
              accusantium
            </p>
            <div className="mt-3 flex">
              <div className="flex flex-col text-right text-black">
                <span>Septiembre 01 2022</span>
                <span>Octubre 06 2022</span>
              </div>
              <div className="mx-3 flex flex-col">
                <span className="h-full border-l border-black" />
              </div>
              <div className="flex flex-col text-left text-gray-600">
                <span>Exámenes de rutina</span>
                <span>Ecografía</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 after:my-3 after:h-[1px] after:w-full after:bg-black">
            <div className="text-2xl text-black">
              <span className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#4224E9] p-6 font-black text-white">
                02
              </span>
              Mes
            </div>
            <p className="mt-1 text-center">
              Sed ud perspiciatis unde omnis ise natus error sit voluptatem
              accusantium
            </p>
            <div className="mt-3 flex">
              <div className="flex flex-col text-right text-black">
                <span>Septiembre 01 2022</span>
                <span>Octubre 06 2022</span>
              </div>
              <div className="mx-3 flex flex-col">
                <span className="h-full border-l border-black" />
              </div>
              <div className="flex flex-col text-left text-gray-600">
                <span>Exámenes de rutina</span>
                <span>Ecografía</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 after:my-3 after:h-[1px] after:w-full">
            <div className="text-2xl text-black">
              <span className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#707070] p-6 font-black text-white">
                03
              </span>
              Mes
            </div>
          </div>
        </div>

        <div className="mb-9">
          <div className="relative items-center justify-center rounded-xl bg-white-ghost">
            <div className="flex flex-col items-center justify-center gap-y-3 p-6 text-black">
              <h1 className="font-bold">Última solicitud</h1>
              <div className="flex flex-col gap-y-3 text-left">
                <h2 className="font-semibold text-black">Descripción</h2>
                <p className="text-gray-500">
                  Sed ud perspiciatis unde omnis ise natus error sit voluptatem
                  accusantium
                </p>
                <span className="font-semibold text-black">
                  Valor: $250.000
                </span>
              </div>
              <SoyTuButton className="w-64">Apoyar</SoyTuButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Detail.getLayout = getLayout

export default Detail
