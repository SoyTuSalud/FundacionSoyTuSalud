
interface MiniCardProps {
  title: string,
  startAdornment?: any
}

export const MiniCard = (props: MiniCardProps) => {

  const { startAdornment, title } = props;

  return (
    <ul
      style={{ backgroundColor: "#616AC5" }}
      className="rounded-xl py-3 px-3 w-1/4 flex items-center space-x-3"
    >
      <li className="text-white font-bold text-4xl self-center">
        {startAdornment}
      </li>
      <li className="text-white font-semibold">
        {title}
      </li>
    </ul>
  )
}