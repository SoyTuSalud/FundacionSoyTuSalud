import clsx from 'clsx'

type ButtonProps = {
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'secondary'
  className?: string
  children: any
  onClick?: any
}

const SoyTuButton = (props: ButtonProps) => {
  const {
    variant = 'contained',
    color = 'primary',
    className,
    children,
    onClick
  } = props

  const isContained = variant === 'contained'
  const isPrimary = color === 'primary'

  const classes = clsx(
    'relative inline-flex justify-center items-center',
    'rounded-full min-h-[2.5rem] min-w-[8rem]',
    'font-semibold text-base px-4',
    {
      'py-2.5 text-white': isContained,
      'bg-primary': isContained && isPrimary,
      'bg-secondary': isContained && !isPrimary
    },
    {
      'py-2 bg-white border-2': !isContained,
      'text-primary border-primary': !isContained && isPrimary,
      'text-secondary border-secondary': !isContained && !isPrimary
    },
    className
  )

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default SoyTuButton
