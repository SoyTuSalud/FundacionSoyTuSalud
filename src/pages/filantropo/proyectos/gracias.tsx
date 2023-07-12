import img from "@/public/foto.png";
import { getLayout } from "@/src/components/layouts/filantropo/LayoutFilantropo";
import Image from "next/image";
import SoyTuButton from "@/src/components/filantropos/SoyTuButton";

const Thanks = () => {
  return (
    <div style={{ backgroundColor: "#FEFEFE" }}>
      <div className="container space-y-6">
      <div
          style={{ backgroundColor: "#EFF2FB" }}
          className="rounded-xl box-border flex flex-col mx-6 px-6"
        >
          <h3 className="font-black text-2xl text-center my-3" style={{color: '#616AC5'}}>Nombre del tratamiento</h3>
          <div className="px-3 block text-left">
            <h6 className="text-black font-semibold">Descripción</h6>
            <p>
              Sed ud perspiciatis unde omnis ise natus error sit voluptatem accusantium Sed ud perspiciatis unde omnis ise natus error sit voluptatem accusantium.
            </p>
          </div>
          <div className="px-3 mt-3 block font-black text-center text-2xl" style={{color: '#616AC5'}}>
            <h3>Valor:</h3>
            <h3>$250.000</h3>
          </div>
          <div className="flex flex-col items-center my-6 space-y-3">
            <SoyTuButton className="w-3/5">Apoyar</SoyTuButton>
            <SoyTuButton className="w-3/5" variant="outlined">Atrás</SoyTuButton>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#EFF2FB" }}
          className="rounded-xl box-border flex flex-col mx-6"
        >
          <div className="flex justify-center py-6 px-3">
            <Image
              src={img}
              alt="img"
            />
          </div>
          <div className="px-3 block text-center space-y-3">
            <h3 className="font-black text-2xl" style={{color: '#616AC5'}}>Gracias por tu apoyo</h3>
            <p>
              Gracias por su apoyo a las madres gestantes de bajos recursos. Su generosidad permite brindarles tratamientos y atención médica para garantizar un embarazo saludable. Juntos, estamos construyendo un futuro mejor para ellas y sus bebés. ¡Gracias por ser parte de esta causa importante!
            </p>
          </div>
          <div className="flex flex-col items-center my-6 space-y-3">
            <SoyTuButton className="w-3/5">Ver mis apoyos</SoyTuButton>
            <SoyTuButton className="w-3/5" variant="outlined">Ver otras madres</SoyTuButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Thanks.getLayout = getLayout

export default Thanks