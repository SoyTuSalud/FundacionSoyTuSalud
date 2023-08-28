import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuInput from '@/src/components/soytu/SoyTuInput'
import { SearchIcon } from '@heroicons/react/outline'
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
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 className="font-black text-2xl sm:text-3xl text-primary">
            Historial de servicios
          </h1>
          <p className="font-bold text-[#3B3B3B]">
            Aquí puedes ver el historial de los servicios que haz realizado para
            la fundación, ver el detalle y el estado de la solicitud.
          </p>
        </div>
        <div className="space-y-5 px-5">
          <div className="flex items-center gap-3">
            <SoyTuInput
              type="text"
              placeholder="Buscar solicitud"
              adornment={<SearchIcon className="w-6 text-primary" />}
            />
          </div>
          <div className="flex w-full lg:justify-center overflow-x-auto">
            <table className="min-w-[48rem] max-w-screen-lg w-full mb-3 overflow-hidden rounded-t-lg text-sm">
              <thead className="[&>tr>th]:px-4 [&>tr>th]:py-3 bg-primary text-white">
                <tr className="text-left [&>th]:h-12">
                  <th scope="col">Nº de Referencia</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Detalle</th>
                </tr>
              </thead>
              <tbody className="[&>tr>td]:p-4 text-black">
                {history.map(
                  ({ ref, service, date, value, state }: HistoryData) => {
                    return (
                      <tr
                        key={ref}
                        className="text-left [&>td]:h-16 odd:bg-white even:bg-white-ghost"
                      >
                        <td>{ref}</td>
                        <td>{service}</td>
                        <td>{date}</td>
                        <td>{value}</td>
                        <td>{state}</td>
                        <td>
                          <a href={`#${ref}`} className="text-primary">
                            Detalle
                          </a>
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
