import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import Image, { StaticImageData } from 'next/image'
import SoyTuButton from '../soytu/SoyTuButton'

interface CardProps {
  img: any
  title: string
  sub: string
  children?: ReactJSXElement
}

export const Card = (props: CardProps) => {
  const { img, title, sub } = props

  return (
    <ul className="relative flex min-w-[16rem] shrink-0 snap-center justify-center rounded-xl bg-white-ghost px-3 py-5 md:grow">
      <div className="flex flex-col items-center space-y-3 text-center text-black">
        <div className="relative h-32 w-32">
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
        <div className="flex w-full justify-center">
          <SoyTuButton className="w-40">Ver mis apoyos</SoyTuButton>
        </div>
      </div>
    </ul>
  )
}
