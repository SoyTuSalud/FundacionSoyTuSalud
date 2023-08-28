import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'

const NewServiceTwo = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 className="font-black text-2xl sm:text-3xl text-primary">
            Añadir servicio
          </h1>
          <p className="font-bold text-[#3B3B3B]">
            Selecciona la disponibilidad horaria para cada una de la/las
            modalidad/es que desea ofertar
          </p>
        </div>
        <div className="space-y-5 px-5"></div>
        <div className="space-y-5 px-5">
          <div className="flex max-md:flex-col justify-center items-center gap-x-6 gap-y-4">
            <SoyTuButton>Siguiente</SoyTuButton>
            <SoyTuButton variant="outlined">Cancelar</SoyTuButton>
          </div>
        </div>
      </div>
    </div>
  )
}

NewServiceTwo.getLayout = getLayout

export default NewServiceTwo
