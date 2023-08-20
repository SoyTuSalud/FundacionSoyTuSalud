import clsx from 'clsx'

interface ButtonProps {
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
    'relative inline-flex justify-center items-center ',
    'font-semibold rounded-full w-full min-h-[2.5rem] min-w-[4rem] ',
    {
      'p-2 text-white ': isContained,
      'bg-primary ': isContained && isPrimary,
      'bg-secondary ': isContained && !isPrimary
    },
    {
      'p-[6px] bg-white border-2 ': !isContained,
      'text-primary border-primary ': !isContained && isPrimary,
      'text-secondary border-secondary ': !isContained && !isPrimary
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
