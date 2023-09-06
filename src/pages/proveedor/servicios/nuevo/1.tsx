import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
import SoyTuInput from '@/src/components/soytu/SoyTuInput'
import SoyTuSelect from '@/src/components/soytu/SoyTuSelect'

const NewServiceOne = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 className="text-2xl font-black text-primary sm:text-3xl">
            Añadir servicio
          </h1>
          <p className="font-bold text-[#3B3B3B]">
            Completa la información sobre el servicio que deseas ofertar, si son
            varios podrás agregarlos mas adelante
          </p>
        </div>
        <div className="space-y-5 px-5">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <SoyTuSelect>
              <option selected>Tipo de servicio</option>
              <option>Servicio</option>
            </SoyTuSelect>
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
        </div>
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

NewServiceOne.getLayout = getLayout

export default NewServiceOne
