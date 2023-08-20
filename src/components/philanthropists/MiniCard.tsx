import { ReactElement } from 'react'

interface MiniCardProps {
  href?: string
  title: string
  startAdornment?: string | number | ReactElement
}

export const MiniCard = (props: MiniCardProps) => {
  const { href, title, startAdornment } = props

  return (
    <a
      href={href}
      className="rounded-xl p-3 flex flex-row items-center gap-3 w-full bg-primary"
    >
      <span className="text-white font-bold text-4xl flex justify-center w-9 h-9">
        {startAdornment}
      </span>
      <span className="text-white font-semibold text-left">{title}</span>
    </a>
  )
}
