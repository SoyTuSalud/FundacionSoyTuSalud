import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuInput from '@/src/components/soytu/SoyTuInput'
import { EyeIcon, SearchIcon } from '@heroicons/react/outline'
import { history } from './history.data'

type HistoryData = {
  ref: number
  service: string
  date: string
  value: string
  state: string
}

const History = () => {
  return (
    <div className="bg-[#FEFEFE]">
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 className="text-2xl font-black text-primary sm:text-3xl">
            Historial de servicios
          </h1>
          <p className="font-bold text-[#3B3B3B]">
            Aquí puedes ver el historial de los servicios que haz realizado para
            la fundación, ver el detalle y el estado de la solicitud.
          </p>
        </div>
        <div className="space-y-5 px-5">
          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-screen-lg justify-end">
              <SoyTuInput
                type="text"
                placeholder="Buscar solicitud"
                adornment={<SearchIcon className="w-6 text-primary" />}
                className="lg:w-96"
              />
            </div>
          </div>
          <div className="flex w-full overflow-x-auto lg:justify-center">
            <table className="mb-3 w-full min-w-[48rem] max-w-screen-lg overflow-hidden rounded-t-lg text-sm">
              <thead className="bg-primary text-white [&>tr>th]:px-4 [&>tr>th]:py-3">
                <tr className="text-left [&>th]:h-12">
                  <th scope="col">Nº de Referencia</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Detalle</th>
                </tr>
              </thead>
              <tbody className="text-black [&>tr>td]:p-4">
                {history.map(
                  ({ ref, service, date, value, state }: HistoryData) => {
                    return (
                      <tr
                        key={ref}
                        className="text-left odd:bg-white even:bg-white-ghost [&>td]:h-16"
                      >
                        <td>{ref}</td>
                        <td>{service}</td>
                        <td>{date}</td>
                        <td>{value}</td>
                        <td>{state}</td>
                        <td>
                          <button className="flex w-fit flex-col items-center justify-center text-primary">
                            <EyeIcon className="w-5" />
                            Detalle
                          </button>
                        </td>
                      </tr>
                    )
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

History.getLayout = getLayout

export default History
