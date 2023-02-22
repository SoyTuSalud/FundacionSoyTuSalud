import { Container } from "@mui/material";
import Image from "next/image";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#616AC5" }} className="sticky flex top-0 left-0 z-20">
      <div className="relative container  w-full ">
        <div className="w-full  flex py-3 max-w-screen-2xl justify-between items-center">
          <div className="flex items-center space-x-10  ">
            <Image
              src="/logo_horizontal-white.png"
              width={180}
              height={50}
              alt="logo"
              quality={100}
            />
            <span
              className="text-white back px-8 rounded-xl font-semibold "
              style={{ backgroundColor: "#E26D83" }}
            >
              Filántropo
            </span>
          </div>
          <div className="flex space-x-9">
            <ul>
              <li className="text-white font-semibold ">Inicio</li>
            </ul>
            <ul>
              <li className="text-white font-semibold">
                Proyectos de Maternidad
              </li>
            </ul>
            <ul>
              <li className="text-white  font-semibold">Apoyos</li>
            </ul>
            <ul>
              <li className="text-white font-semibold items-center flex ">
                <PersonOutlineOutlinedIcon fontSize="medium" className="mr-3" />
                Bienvenido, Usuario
                <ArrowDropDownOutlinedIcon fontSize="medium" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
