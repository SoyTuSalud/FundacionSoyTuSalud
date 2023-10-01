import medical from '@/public/medical.png'
import Image from 'next/image'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
import { getLayout } from '@/src/components/layouts/philanthropist/PhilanthropistLayout'

const Thanks = () => {
  return (
    <>
      <div className="mx-6 flex max-w-xl flex-col rounded-xl bg-white-ghost p-9">
        <h3 className="text-center text-2xl font-black text-primary">
          Nombre del tratamiento
        </h3>
        <div className="text-left">
          <h6 className="font-semibold text-black">Descripción</h6>
          <p>
            Sed ud perspiciatis unde omnis ise natus error sit voluptatem
            accusantium Sed ud perspiciatis unde omnis ise natus error sit
            voluptatem accusantium.
          </p>
        </div>
        <div className="mt-3 text-center text-2xl font-black text-primary">
          <h3>Valor:</h3>
          <h3>$250.000</h3>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6 gap-y-4 max-md:flex-col">
          <SoyTuButton className="w-64">Apoyar</SoyTuButton>
          <SoyTuButton variant="outlined" className="w-64">
            Atrás
          </SoyTuButton>
        </div>
      </div>
      <div className="mx-6 rounded-xl bg-white-ghost p-9">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row-reverse lg:gap-9">
          <div className="max-lg:max-w-sm lg:min-w-[24rem] lg:max-w-xl">
            <Image src={medical} alt="img" />
          </div>
          <div className="flex max-w-xl flex-col">
            <div className="space-y-3 text-center lg:text-left">
              <h3 className="text-2xl font-black text-primary">
                Gracias por tu apoyo
              </h3>
              <p>
                Gracias por su apoyo a las madres gestantes de bajos recursos.
                Su generosidad permite brindarles tratamientos y atención médica
                para garantizar un embarazo saludable. Juntos, estamos
                construyendo un futuro mejor para ellas y sus bebés. ¡Gracias
                por ser parte de esta causa importante!
              </p>
            </div>
            <div className="max-w mt-6 flex items-center justify-center gap-x-6 gap-y-4 max-md:flex-col md:justify-start">
              <SoyTuButton className="w-64">Ver mis apoyos</SoyTuButton>
              <SoyTuButton variant="outlined" className="w-64">
                Ver otras madres
              </SoyTuButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Thanks.getLayout = getLayout

export default Thanks
