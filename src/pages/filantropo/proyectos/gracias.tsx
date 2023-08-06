import medical from '@/public/medical.png'
import { getLayout } from '@/src/components/layouts/filantropo/LayoutFilantropo'
import Image from 'next/image'
import SoyTuButton from '@/src/components/filantropos/SoyTuButton'

const Thanks = () => {
  return (
    <>
      <div className="rounded-xl flex flex-col mx-6 p-9 bg-white-ghost max-w-xl">
        <h3 className="font-black text-2xl text-center text-primary">
          Nombre del tratamiento
        </h3>
        <div className="text-left">
          <h6 className="text-black font-semibold">Descripción</h6>
          <p>
            Sed ud perspiciatis unde omnis ise natus error sit voluptatem
            accusantium Sed ud perspiciatis unde omnis ise natus error sit
            voluptatem accusantium.
          </p>
        </div>
        <div className="mt-3 font-black text-center text-2xl text-primary">
          <h3>Valor:</h3>
          <h3>$250.000</h3>
        </div>
        <div className="flex max-md:flex-col justify-center items-center my-6 gap-3">
          <SoyTuButton className="w-64">Apoyar</SoyTuButton>
          <SoyTuButton className="w-64" variant="outlined">
            Atrás
          </SoyTuButton>
        </div>
      </div>
      <div className="rounded-xl mx-6 p-9 bg-white-ghost">
        <div className="flex flex-col justify-between items-center lg:flex-row-reverse gap-6 lg:gap-9">
          <div className="max-lg:max-w-sm lg:min-w-[24rem] lg:max-w-xl">
            <Image src={medical} alt="img" />
          </div>
          <div className="flex flex-col max-w-xl">
            <div className="text-center lg:text-left space-y-3">
              <h3 className="font-black text-2xl text-primary">
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
            <div className="flex max-md:flex-col justify-center md:justify-start items-center my-6 gap-3 max-w">
              <SoyTuButton className="max-w-[16rem]">
                Ver mis apoyos
              </SoyTuButton>
              <SoyTuButton className="max-w-[16rem]" variant="outlined">
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
