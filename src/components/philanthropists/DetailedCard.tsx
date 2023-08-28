import Image from 'next/image'
import SoyTuButton from '../soytu/SoyTuButton'

interface CardProps {
  img?: any
  name?: string
  data?: Info[]
}

interface Info {
  label: string
  value: string | number
}

const ProjectCard = (props: CardProps) => {
  const { img, name, data } = props

  return (
    <div className="min-w-[16rem] rounded-xl bg-white-ghost">
      <Image
        src={img}
        alt="pregnantWoman"
        className="bg-cover bg-top object-cover min-h-[13rem] max-h-[16rem] rounded-t-xl"
      />
      <div className="p-3 pt-1">
        <h1 className="text-black font-semibold text-center">
          Paula Andrea Cáceres
        </h1>
        <ul className="flex flex-col gap-1">
          <li className="flex justify-between items-center gap-3">
            <span className="text-left">Edad:</span>
            <span className="text-right">21 años</span>
          </li>
          <li className="flex justify-between items-center gap-3">
            <span className="text-left">Meses de gestación:</span>
            <span className="text-right">5</span>
          </li>
          <li className="flex justify-between items-center gap-3">
            <span className="text-left">Tratamiento:</span>
            <span className="text-right">Ecografía</span>
          </li>
          <li className="flex justify-between items-center gap-3">
            <span className="text-left">IPS:</span>
            <span className="text-right">Radioimagen SAS</span>
          </li>
          <li className="flex justify-between items-center gap-3">
            <span className="text-left">Aporte mínimo:</span>
            <span className="text-right">$300.000</span>
          </li>
          <li className="flex justify-between">
            <span className="text-left">Riesgo:</span>
            <span className="text-right">Medio</span>
          </li>
        </ul>
        <div className="pt-3 flex justify-between gap-6">
          <SoyTuButton variant="outlined">Detalle</SoyTuButton>
          <SoyTuButton variant="contained">Apoyar</SoyTuButton>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
