import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import Image, { StaticImageData } from 'next/image'
import SoyTuButton from './SoyTuButton'

interface CardProps {
  img: any
  title: string
  sub: string
  children?: ReactJSXElement
}

export const Card = (props: CardProps) => {
  const { img, title, sub } = props

  return (
    <ul
      style={{ backgroundColor: '#EFF2FB' }}
      className="rounded-xl py-5 px-3 flex flex-none md:flex-auto justify-center w-4/5 md:w-1/4"
    >
      <div className="text-black flex flex-col items-center text-center space-y-3">
        <div className="h-32 w-32 relative">
          <Image
            src={img}
            alt="pregnantWoman"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">{title}</h1>
          <span className="font-semibold">{sub}</span>
        </div>
        <div className="flex flex-col w-full">
          <SoyTuButton>Ver mis apoyos</SoyTuButton>
        </div>
      </div>
    </ul>
  )
}
