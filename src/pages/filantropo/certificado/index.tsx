import { getLayout } from '@/src/components/layouts/philanthropist/PhilanthropistLayout'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
import SoyTuInput from '@/src/components/soytu/SoyTuInput'
import SoyTuSelect from '@/src/components/soytu/SoyTuSelect'

const Certificado = () => {
  return (
    <div className="bg-[#FEFEFE]">
      <div className="container space-y-9 text-center md:text-left">
        <div className="space-y-5 px-5">
          <h1 style={{ color: '#616AC5' }} className="text-3xl font-bold">
            Generar certificado
          </h1>
          <p>
            Ingresa los datos del donante para generar un certificado que valide
            tu contribución a nuestra fundación.
          </p>
        </div>
        <div>
          <form>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <SoyTuSelect>
                <option selected>Tipo de persona</option>
                <option>Natural</option>
                <option>Jurídica</option>
              </SoyTuSelect>
              <SoyTuSelect>
                <option selected>Tipo de documento</option>
                <option>Cédula</option>
                <option>Extranjera</option>
                <option>Otro</option>
              </SoyTuSelect>
              <SoyTuInput type="number" placeholder="Número de documento" />
              <SoyTuInput type="text" placeholder="Nombre" />
              <SoyTuInput type="text" placeholder="Apellidos" />
              <SoyTuInput type="date" placeholder="Fecha" />
            </div>
            <div className="mt-9 flex items-center justify-center gap-x-6 gap-y-4 max-md:flex-col">
              <SoyTuButton className="w-40">Generar</SoyTuButton>
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

Certificado.getLayout = getLayout

export default Certificado
