interface ButtonProps {
  variant?: 'contained' | 'outlined'
  className?: string
  children: any
  onClick?: any
}

const SoyTuButton = (props: ButtonProps) => {
  const { variant = 'contained', className, children, onClick } = props

  return (
    <button
      className={
        'font-semibold rounded-full w-full min-h-[2.5rem] min-w-[4rem] ' +
        `${
          variant === 'contained'
            ? 'p-2 bg-primary text-white '
            : 'p-[6px] bg-white text-primary border-primary border-2 '
        }` +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SoyTuButton
