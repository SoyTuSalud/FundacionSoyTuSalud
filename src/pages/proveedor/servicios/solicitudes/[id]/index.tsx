import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
import SoyTuSelect from '@/src/components/soytu/SoyTuSelect'

const Request = () => {
  return (
    <div className="bg-[#FEFEFE]">
      <div className="container space-y-9 text-center text-base md:text-left">
        <div className="flex flex-col gap-y-6 px-5">
          <h1 className="text-2xl font-black text-primary sm:text-3xl">
            Solicitud Nº 5646231
          </h1>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-col gap-y-3 rounded-xl bg-white-ghost p-6 lg:w-full">
              <h2 className="font-black text-black">Ecografía</h2>
              <div className="text-left">
                <h3 className="font-semibold text-black">Descripción</h3>
                <p>
                  Sed ud perspiciatis unde omnis ise natus error sit voluptatem
                  accusantium.
                </p>
              </div>
              <hr className="border-primary lg:mt-6" />
              <div className="text-left font-semibold text-black">
                <h3>Valor: $250.000</h3>
                <h3>Paciente: Paula Andrea Cáceres</h3>
                <h3>Riesgo del paciente: Alto</h3>
              </div>
            </div>
            <div className="flex max-w-xl flex-col gap-y-3 rounded-xl bg-white-ghost p-6 lg:w-2/5">
              <h2 className="font-black text-black">Datos de contacto</h2>
              <ul>
                <li>Paula Andrea Cáceres</li>
                <li>Dirección: Calle 11e #45-98</li>
                <li>Teléfono: 604 231 25 96</li>
                <li>Celular: 321 456 84 78</li>
              </ul>
              <div className="text-left text-sm">
                <span>Estado de la solicitud</span>
                <SoyTuSelect className="mt-1">
                  <option selected>Estado</option>
                  <option>Aprobado - sin confirmar</option>
                  <option>Rechazado</option>
                  <option>Confirmado</option>
                  <option>Realizado</option>
                </SoyTuSelect>
              </div>
            </div>
          </div>
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

Request.getLayout = getLayout

export default Request
