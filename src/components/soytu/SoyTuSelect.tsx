import clsx from 'clsx'
import { ComponentProps } from 'react'

type SelectProps = Pick<ComponentProps<'select'>, 'className' | 'children'>

const SoyTuSelect = (props: SelectProps) => {
  const { className, children } = props

  return (
    <div
      className={clsx(
        'relative grid after:h-3 after:w-5 after:bg-primary',
        //'after:[clip-path:polygon(10%_0,0_10%,50%_100%,100%_10%,90%_0,50%_70%)]',
        'after:[clip-path:polygon(15%_0,0_15%,50%_100%,100%_15%,85%_0,50%_60%)]',
        '[grid-template-areas:"select"] after:[grid-area:select] [&>select]:[grid-area:select]',
        'z-10 items-center after:mx-4 after:justify-self-end',
        className
      )}
    >
      <select
        name="state"
        className={clsx(
          'min-h-[2.5rem] w-full min-w-[8rem] rounded-full',
          'border-2 border-primary bg-[#D8EEFA] py-2 pl-4 pr-12',
          'text-base font-semibold text-black',
          'appearance-none focus:shadow-none focus:outline-none'
        )}
      >
        {children}
      </select>
    </div>
  )
}

export default SoyTuSelect
