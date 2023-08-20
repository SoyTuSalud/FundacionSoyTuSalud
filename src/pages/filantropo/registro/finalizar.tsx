import { getLayout } from '@/src/components/layouts/philanthropist/PhilanthropistLayout'
import SoyTuButton from '@/src/components/philanthropists/SoyTuButton'

const Finalizar = () => {
  return (
    <div style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container space-y-6">
        <div
          style={{ backgroundColor: '#EFF2FB' }}
          className="rounded-xl box-border flex flex-col mx-6 py-6 space-y-6"
        >
          <p className="px-3 text-center">
            Deseamos informarnos sobre tu bienestar y suministrar los remedios
            necesarios, para ello recuerda finalizar la evaluación.
          </p>
          <div className="flex flex-col items-center space-y-3">
            <SoyTuButton className="w-3/4">Realizar evaluación</SoyTuButton>
            <SoyTuButton className="w-3/4" variant="outlined">
              Cancelar
            </SoyTuButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Finalizar.getLayout = getLayout

export default Finalizar
