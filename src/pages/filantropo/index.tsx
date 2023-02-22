import { ReactElement } from "react";
import { LayoutFilantropo } from "@/src/components/layouts/filantropo/LayoutFilantropo";
import heart from "@/public/heart2.png";
import Image from "next/image";
import RestoreIcon from "@mui/icons-material/Restore";
import FemaleIcon from "@mui/icons-material/Female";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import pregnantWoman from "@/public/PregnantWoman.jpg";

const Filantropo = () => {
  return (
    <div style={{ backgroundColor: "#FEFEFE" }}>
      <div className="container space-y-9">
        <div
          style={{ backgroundColor: "#EFF2FB" }}
          className="rounded-xl flex flex-col"
        >
          <div className="absolute self-end -z-0" style={{ marginRight: "5%" }}>
            <Image src={heart} alt="heart" />
          </div>
          <div className="space-y-5 px-5 py-8 z-10">
            <h1 style={{ color: "#E26D83" }} className="font-bold text-4xl">
              Bienvenido, usuario
            </h1>
            <h2 style={{ color: "#E26D83" }} className="font-extrabold text-xl">
              Resumen de mi cuenta
            </h2>
            <div
              className=" items-center flex space-x-5 "
              style={{ display: "-webkit-box", paddingRight: "61px" }}
            >
              <ul
                style={{ backgroundColor: "#616AC5" }}
                className="rounded-xl py-5 px-4 w-1/4 flex items-center space-x-3"
              >
                <li className="text-white font-bold text-4xl">3</li>
                <li className="text-white font-semibold">Madres que apoyo</li>
              </ul>
              <ul
                style={{ backgroundColor: "#616AC5" }}
                className="rounded-xl py-5 px-4 w-1/4 flex items-center space-x-3"
              >
                <li className="text-white font-bold text-4xl">5</li>
                <li className="text-white font-semibold">Tratamientos</li>
              </ul>
              <ul
                style={{ backgroundColor: "#616AC5" }}
                className="rounded-xl py-5 px-4 w-1/4 flex items-center space-x-3"
              >
                <li className="text-white font-bold text-4xl">2</li>
                <li className="text-white font-semibold">
                  Reportes nuevos de salud
                </li>
              </ul>
              <ul
                style={{ backgroundColor: "#616AC5" }}
                className="rounded-xl py-5 px-4 w-1/4 flex items-center space-x-3"
              >
                <li className="text-white font-bold text-4xl">3</li>
                <li className="text-white font-semibold">Madres que apoyo</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-5 px-5 text-sm ">
          <h1 className="text-black font-semibold text-2xl ">
            {" "}
            ¿Qué deseas hacer hoy?
          </h1>
          <div
            className=" items-center flex space-x-5 "
            style={{ display: "-webkit-box", paddingRight: "61px" }}
          >
            <ul
              style={{ backgroundColor: "#616AC5" }}
              className="rounded-xl py-5 px-3 w-1/4 flex items-center"
            >
              <li className="text-white font-bold text-4xl self-center">
                <FemaleIcon sx={{ fontSize: "50px" }} />
              </li>
              <li className="text-white font-semibold">
                Ver madres que necesitan apoyo
              </li>
            </ul>
            <ul
              style={{ backgroundColor: "#616AC5" }}
              className="rounded-xl py-5 px-3 w-1/4 flex items-center space-x-2"
            >
              <li className="text-white font-bold text-4xl">
                <RestoreIcon sx={{ fontSize: "50px" }} />
              </li>
              <li className="text-white font-semibold">
                Historial de apoyos de la cuenta
              </li>
            </ul>
            <ul
              style={{ backgroundColor: "#616AC5" }}
              className="rounded-xl py-5 px-3 w-1/4 flex items-center space-x-2"
            >
              <li className="text-white font-bold text-4xl">
                <SimCardDownloadOutlinedIcon sx={{ fontSize: "50px" }} />
              </li>
              <li className="text-white font-semibold">
                Descargar certificado de donación
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-5 px-5 text-sm ">
          <h1 className="text-black font-semibold text-2xl ">
            Madres que apoyo
          </h1>
          <div
            className=" items-center flex space-x-5 "
            style={{ display: "-webkit-box", paddingRight: "61px" }}
          >
            <ul
              style={{ backgroundColor: "#EFF2FB" }}
              className="rounded-xl py-5 px-3 w-1/4 flex items-center justify-center"
            >
              <div className="text-black font-semibold flex flex-col space-y-3">
                <div className="h-32 w-32 relative">
                  <Image
                    src={pregnantWoman}
                    alt="pregnantWoman"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h1>Paula Andrea Rojas</h1>
                  <span className="self-center">21 años</span>
                </div>
                <div  className="flex flex-col" >
                  <li style={{ backgroundColor: "#616AC5" }} className="text-white font-semibold rounded-full self-center px-5 py-2">Ver mis apoyos</li>
                </div>
               
              </div>
            </ul>
            <ul
              style={{ backgroundColor: "#EFF2FB" }}
              className="rounded-xl py-5 px-3 w-1/4 flex items-center justify-center"
            >
              <div className="text-black font-semibold flex flex-col space-y-3">
                <div className="h-32 w-32 relative">
                  <Image
                    src={pregnantWoman}
                    alt="pregnantWoman"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h1>Paula Andrea Rojas</h1>
                  <span className="self-center">21 años</span>
                </div>
                <div  className="flex flex-col" >
                  <li style={{ backgroundColor: "#616AC5" }} className="text-white font-semibold rounded-full self-center px-5 py-2">Ver mis apoyos</li>
                </div>
               
              </div>
            </ul>
            <ul
              style={{ backgroundColor: "#EFF2FB" }}
              className="rounded-xl py-5 px-3 w-1/4 flex items-center justify-center"
            >
              <div className="text-black font-semibold flex flex-col space-y-3">
                <div className="h-32 w-32 relative">
                  <Image
                    src={pregnantWoman}
                    alt="pregnantWoman"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h1>Paula Andrea Rojas</h1>
                  <span className="self-center">21 años</span>
                </div>
                <div  className="flex flex-col" >
                  <li style={{ backgroundColor: "#616AC5" }} className="text-white font-semibold rounded-full self-center px-5 py-2">Ver mis apoyos</li>
                </div>
               
              </div>
            </ul>
            <ul
              style={{ backgroundColor: "#EFF2FB" }}
              className="rounded-xl py-5 px-3 w-1/4 flex items-center justify-center"
            >
              <div className="text-black font-semibold flex flex-col space-y-3">
                <div className="h-32 w-32 relative">
                  <Image
                    src={pregnantWoman}
                    alt="pregnantWoman"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h1>Paula Andrea Rojas</h1>
                  <span className="self-center">21 años</span>
                </div>
                <div  className="flex flex-col" >
                  <li style={{ backgroundColor: "#616AC5" }} className="text-white font-semibold rounded-full self-center px-5 py-2">Ver mis apoyos</li>
                </div>
               
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Filantropo.getLayout = function getLayout(page: ReactElement, props: any) {
  return (
    <LayoutFilantropo _nextI18Next={props._nextI18Next}>
      {page}
    </LayoutFilantropo>
  );
};

export default Filantropo;
