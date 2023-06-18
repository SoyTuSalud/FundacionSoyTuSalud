import pregnantWoman from '@/public/PregnantWoman.jpg'
import { getLayout } from '@/src/components/layouts/filantropo/LayoutFilantropo'
import Image from 'next/image'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import SoyTuButton from '@/src/components/filantropos/SoyTuButton'

const Detail = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-6 text-lg">
        <div
          style={{ backgroundColor: '#EFF2FB' }}
          className="rounded-xl relative box-border block mx-6"
        >
          <Image
            src={pregnantWoman}
            alt="pregnantWoman"
            className="block bg-cover bg-center object-cover h-48 rounded-t-xl"
          />
          <div className="p-3 pt-1 block">
            <h1 className="text-black font-semibold text-center">
              Paula Andrea Cáceres
            </h1>
            <ul className="flex flex-col">
              <li className="flex justify-between">
                <span>Edad:</span>21 años
              </li>
              <li className="flex justify-between">
                <span>Meses de gestación:</span>5
              </li>
              <li className="flex justify-between">
                <span>Haz ayudado con:</span>$300.000
              </li>
              <li className="flex justify-between">
                <span>Riesgo:</span>Medio
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center px-6">
          <div className="flex flex-col items-center space-y-3">
            <div className="text-2xl text-black">
              <span
                className="inline-flex items-center justify-center font-black text-white p-6 rounded-full w-9 h-9 mr-3"
                style={{ backgroundColor: '#4224E9' }}
              >
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

          <span className="my-3 border-t w-full h-1 border-black" />

          <div className="flex flex-col items-center space-y-3">
            <div className="text-2xl text-black">
              <span
                className="inline-flex items-center justify-center font-black text-white p-6 rounded-full w-9 h-9 mr-3"
                style={{ backgroundColor: '#4224E9' }}
              >
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

          <span className="my-3 border-t w-full h-1 border-black" />

          <div className="flex flex-col items-center space-y-3">
            <div className="text-2xl text-black">
              <span
                className="inline-flex items-center justify-center font-black text-white p-6 rounded-full w-9 h-9 mr-3"
                style={{ backgroundColor: '#707070' }}
              >
                03
              </span>
              Mes
            </div>
            <div
              style={{ backgroundColor: '#EFF2FB' }}
              className="items-center justify-center rounded-xl relative box-border block"
            >
              <div className="px-6 py-3 flex flex-col justify-center items-center text-black">
                <h3 className=" font-bold">Última solicitud</h3>
                <div className="my-3 space-y-2">
                  <h6 className=" text-black font-semibold">Descripción</h6>
                  <p className="text-gray-500">
                    Sed ud perspiciatis unde omnis ise natus error sit
                    voluptatem accusantium
                  </p>
                  <h6 className=" text-black font-semibold">Valor: $250.000</h6>
                </div>
                <SoyTuButton className="w-1/2">Apoyar</SoyTuButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Detail.getLayout = getLayout

export default Detail
