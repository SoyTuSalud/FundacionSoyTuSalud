import { ReactElement } from 'react'

interface MiniCardProps {
  title: string
  startAdornment?: string | number | ReactElement
}

export const MiniCard = (props: MiniCardProps) => {
  const { startAdornment, title } = props

  return (
    <div
      style={{ backgroundColor: '#616AC5' }}
      className="rounded-xl p-3 flex flex-row items-center space-x-3 w-full"
    >
      <span className="text-white font-bold text-4xl flex justify-center w-9 h-9">
        {startAdornment}
      </span>
      <span className="text-white font-semibold">{title}</span>
    </div>
  )
}
