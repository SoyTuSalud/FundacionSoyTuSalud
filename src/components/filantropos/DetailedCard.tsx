import Image from 'next/image'
import SoyTuButton from './SoyTuButton'

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
    <div
      style={{ backgroundColor: '#EFF2FB' }}
      className="rounded-xl relative box-border flex flex-col flex-none md:flex-auto justify-center w-3/4 md:w-1/3"
    >
      <Image
        src={img}
        alt="pregnantWoman"
        className="block bg-cover bg-center object-cover h-48 rounded-t-xl"
      />
      <div className="p-3 pt-1 block">
        <h1 className="text-black font-semibold text-center">
          Paula Andrea Cáceres
        </h1>
        <ul className="flex flex-col">
          <li className="flex justify-between">
            <span>Edad:</span>21 años
          </li>
          <li className="flex justify-between">
            <span>Meses de gestación:</span>5
          </li>
          <li className="flex justify-between">
            <span>Tratamiento:</span>Ecografía
          </li>
          <li className="flex justify-between">
            <span>IPS:</span>Radioimagen SAS
          </li>
          <li className="flex justify-between">
            <span>Aporte mínimo:</span>$300.000
          </li>
          <li className="flex justify-between">
            <span>Riesgo:</span>Medio
          </li>
        </ul>
        <div className="pt-3 flex justify-between">
          <SoyTuButton variant="outlined" className="w-1/2">
            Detalle
          </SoyTuButton>
          <SoyTuButton variant="contained" className="w-1/2 ml-4">
            Apoyar
          </SoyTuButton>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
