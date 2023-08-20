import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuButton from '@/src/components/philanthropists/SoyTuButton'

const Services = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 className="font-black text-2xl sm:text-3xl text-primary">
            Servicios que ofrezco
          </h1>
          <p className="font-bold text-[#3B3B3B]">
            Aquí puedes agregar o quitar los servicios que ofreces, de manera
            que podamos mantener nuestra base de datos actualizada
          </p>
        </div>
        <div className="space-y-5 px-5">
          <div className="flex w-full lg:justify-center overflow-x-auto">
            <table className="min-w-[42rem] max-w-screen-lg w-full mb-3">
              <thead className="[&>tr>th]:p-4 bg-primary text-white">
                <tr className="text-left [&>th]:h-12">
                  <th scope="col">Tipo de servicio</th>
                  <th scope="col">Nombre del servicio</th>
                  <th scope="col">Detalle</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody className="[&>tr>td]:p-4 text-black">
                <tr className="text-left [&>td]:h-16 odd:bg-white even:bg-white-ghost">
                  <td>Ecografia</td>
                  <td>Antioquia</td>
                  <td>Detalle</td>
                  <td>Eliminar</td>
                </tr>
                <tr className="text-left [&>td]:h-16 odd:bg-white even:bg-white-ghost">
                  <td>Ecografia</td>
                  <td>Antioquia</td>
                  <td>Detalle</td>
                  <td>Eliminar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <SoyTuButton color="secondary">Añadir servicio</SoyTuButton>
            <SoyTuButton variant="outlined" color="secondary">
              Carga masiva
            </SoyTuButton>
          </div>
        </div>
        <div className="space-y-5 px-5">
          <div className="flex max-md:flex-col justify-center items-center gap-6">
            <SoyTuButton>Guardar</SoyTuButton>
            <SoyTuButton variant="outlined">Atrás</SoyTuButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Services.getLayout = getLayout

export default Services
