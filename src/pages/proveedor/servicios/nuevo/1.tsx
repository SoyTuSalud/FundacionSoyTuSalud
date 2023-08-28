import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
import SoyTuInput from '@/src/components/soytu/SoyTuInput'

const NewServiceOne = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 className="font-black text-2xl sm:text-3xl text-primary">
            Añadir servicio
          </h1>
          <p className="font-bold text-[#3B3B3B]">
            Completa la información sobre el servicio que deseas ofertar, si son
            varios podrás agregarlos mas adelante
          </p>
        </div>
        <div className="space-y-5 px-5">
          <SoyTuInput type="text" placeholder="Nombre de servicio" />
          <SoyTuInput type="text" placeholder="Código único" />
          <SoyTuInput type="text" placeholder="Prestador del servicio" />
          <SoyTuInput type="text" placeholder="Correo de contacto" />
          <SoyTuInput type="text" placeholder="Linea de WhatsApp" />
          <SoyTuInput
            type="text"
            placeholder="Dirección dónde se presta el servicio"
          />
        </div>
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

NewServiceOne.getLayout = getLayout

export default NewServiceOne
