import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'

const NewServiceTwo = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
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
        <div className="space-y-5 px-5"></div>
        <div className="space-y-5 px-5">
          <div className="flex items-center justify-center gap-x-6 gap-y-4 max-md:flex-col">
            <SoyTuButton className="w-40">Siguiente</SoyTuButton>
            <SoyTuButton variant="outlined" className="w-40">
              Cancelar
            </SoyTuButton>
          </div>
        </div>
      </div>
    </div>
  )
}

NewServiceTwo.getLayout = getLayout

export default NewServiceTwo
