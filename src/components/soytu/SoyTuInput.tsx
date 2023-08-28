import clsx from 'clsx'
import { ComponentProps } from 'react'

type InputProps = Pick<
  ComponentProps<'input'>,
  'className' | 'type' | 'placeholder'
> & { adornment?: any }

const SoyTuInput = (props: InputProps) => {
  const { className, type, placeholder, adornment } = props

  const classes = clsx(
    'relative inline-flex items-center gap-3',
    'min-h-[2.5rem] w-full min-w-[8rem] rounded-full',
    'border-2 border-primary bg-[#D8EEFA] px-4 py-2',
    'text-base font-semibold text-black',
    className
  )

  return (
    <div className={classes}>
      {adornment}
      <input
        className="bg-inherit placeholder:font-semibold placeholder:text-[#3B3B3B] focus:outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SoyTuInput
