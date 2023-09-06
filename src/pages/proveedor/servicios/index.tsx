import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
import {
  EyeIcon,
  HeartIcon as HeartIconOutline,
  TrashIcon
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'

const Services = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 className="text-2xl font-black text-primary sm:text-3xl">
            Servicios que ofrezco
          </h1>
          <p className="font-bold text-[#3B3B3B]">
            Aquí puedes agregar o quitar los servicios que ofreces, de manera
            que podamos mantener nuestra base de datos actualizada
          </p>
        </div>
        <div className="space-y-5 px-5">
          <div className="flex w-full overflow-x-auto lg:justify-center">
            <table className="mb-3 w-full min-w-[42rem] max-w-screen-lg overflow-hidden rounded-t-lg text-sm">
              <thead className="bg-primary text-white [&>tr>th]:px-4 [&>tr>th]:py-3">
                <tr className="text-left [&>th]:h-12">
                  <th scope="col">Tipo de servicio</th>
                  <th scope="col">Nombre del servicio</th>
                  <th scope="col" className="max-lg:hidden">
                    Valoración
                  </th>
                  <th scope="col">Detalle</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-black [&>tr>td]:p-4">
                <tr className="text-left odd:bg-white even:bg-white-ghost [&>td]:h-16">
                  <td>Ecografía</td>
                  <td>Antioquia</td>
                  <td className="max-lg:hidden">
                    <div className="flex flex-row [&>svg]:w-5 [&>svg]:text-[#4525F2]">
                      <HeartIconSolid />
                      <HeartIconSolid />
                      <HeartIconSolid />
                      <HeartIconSolid />
                      <HeartIconSolid />
                      <HeartIconOutline />
                    </div>
                  </td>
                  <td>
                    <button className="flex w-fit flex-col items-center justify-center text-primary">
                      <EyeIcon className="w-5" />
                      Detalle
                    </button>
                  </td>
                  <td>
                    <button className="flex w-fit flex-col items-center justify-center text-primary">
                      <TrashIcon className="w-5" />
                      Eliminar
                    </button>
                  </td>
                </tr>
                <tr className="text-left odd:bg-white even:bg-white-ghost [&>td]:h-16">
                  <td>Ecografía</td>
                  <td>Antioquia</td>
                  <td className="max-lg:hidden">
                    <div className="flex flex-row [&>svg]:w-5 [&>svg]:text-[#4525F2]">
                      <HeartIconSolid />
                      <HeartIconSolid />
                      <HeartIconSolid />
                      <HeartIconSolid />
                      <HeartIconSolid />
                      <HeartIconOutline />
                    </div>
                  </td>
                  <td>
                    <button className="flex w-fit flex-col items-center justify-center text-primary">
                      <EyeIcon className="w-5" />
                      Detalle
                    </button>
                  </td>
                  <td>
                    <button className="flex w-fit flex-col items-center justify-center text-primary">
                      <TrashIcon className="w-5" />
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <SoyTuButton color="secondary" className="w-40">
              Añadir servicio
            </SoyTuButton>
            <SoyTuButton variant="outlined" color="secondary" className="w-40">
              Carga masiva
            </SoyTuButton>
          </div>
        </div>
        <div className="space-y-5 px-5">
          <div className="flex items-center justify-center gap-x-6 gap-y-4 max-md:flex-col">
            <SoyTuButton className="w-40">Guardar</SoyTuButton>
            <SoyTuButton variant="outlined" className="w-40">
              Atrás
            </SoyTuButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Services.getLayout = getLayout

export default Services
