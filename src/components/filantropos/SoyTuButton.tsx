interface ButtonProps {
  variant?: 'contained' | 'outlined',
  className?: string,
  children: any,
  onClick?: any
}

const SoyTuButton = (props: ButtonProps) => {
  const { variant, className, children, onClick } = props;

  return (
    <button 
      style={
        !variant || variant=='contained'?
          { backgroundColor: "#616AC5", color: "#FFFFFF" } 
          : 
          { backgroundColor: "#FFFFFF", color: "#616AC5", borderColor: "#616AC5", borderWidth: 2 } 
      } 
      className={"font-semibold rounded-full p-2 h-12 " + className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SoyTuButton