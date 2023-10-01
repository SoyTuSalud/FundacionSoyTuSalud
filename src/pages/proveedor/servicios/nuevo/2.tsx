import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import Scheduler from '@/src/components/soytu/Scheduler'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'

const NewServiceTwo = () => {
  return (
    <div className="bg-[#FEFEFE]">
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 className="text-2xl font-black text-primary sm:text-3xl">
            Añadir servicio
          </h1>
          <p className="font-bold text-[#3B3B3B]">
            Selecciona la disponibilidad horaria para cada una de la/las
            modalidad/es que desea ofertar
          </p>
        </div>
        <div>
          <form>
            <Scheduler />
            <div className="mt-9 flex items-center justify-center gap-x-6 gap-y-4 max-md:flex-col">
              <SoyTuButton className="w-40">Siguiente</SoyTuButton>
              <SoyTuButton variant="outlined" className="w-40">
                Cancelar
              </SoyTuButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

NewServiceTwo.getLayout = getLayout

export default NewServiceTwo
