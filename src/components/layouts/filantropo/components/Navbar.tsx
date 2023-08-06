import Image from 'next/image'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-primary text-white">
      <nav className="relative px-3">
        <div className="w-full flex py-3 justify-between items-center">
          <div className="flex justify-evenly items-center gap-3 sm:gap-9">
            <Image
              src="/logo_horizontal-white.png"
              width={180}
              height={48}
              alt="logo"
              quality={100}
            />
            <span className="px-3 md:px-6 rounded-xl font-semibold bg-pink-bright">
              Filántropo
            </span>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-9">
              <a
                href="/filantropo"
                className="flex flex-col items-center font-semibold hover:after:w-full after:h-[3px] after:bg-pink-bright"
              >
                Inicio
              </a>
              <a
                href="/filantropo/proyectos"
                className="flex flex-col items-center font-semibold hover:after:w-full after:h-[3px] after:bg-pink-bright"
              >
                Proyectos de Maternidad
              </a>
              <a
                href="/filantropo/apoyos"
                className="flex flex-col items-center font-semibold hover:after:w-full after:h-[3px] after:bg-pink-bright"
              >
                Apoyos
              </a>
              <button className="flex flex-col font-semibold hover:after:w-full after:h-[3px] after:bg-pink-bright">
                <div className="flex items-center">
                  <PersonOutlineOutlinedIcon fontSize="medium" />
                  Bienvenido, Usuario
                  <ArrowDropDownOutlinedIcon fontSize="medium" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
