import {ReactElement} from "react";
import {LayoutFilantropo} from "@/src/components/layouts/filantropo/LayoutFilantropo";
import heart from '@/public/heart2.png'
import Image from "next/image";



const Filantropo = () => {
  return (
    <div style={{backgroundColor: "#FEFEFE"}}>
      <div className="container">
        <div style={{backgroundColor:"#EFF2FB"}} className="rounded-xl flex flex-col">
          <div className="absolute self-end -z-0" style={{marginRight:"5%"}}>
            <Image src={heart} alt="heart"  />
          </div>
          <div className="space-y-5 px-5 py-8 z-10">
            <h1 style={{color:"#E26D83"}} className="font-bold text-4xl" >Bienvenido, usuario</h1>
            <h2 style={{color:"#E26D83"}} className="font-extrabold text-xl" >Resumen de mi cuenta</h2>
            <div className=" items-center flex space-x-5 ">
              <ul style={{backgroundColor: "#616AC5"}} className="rounded-xl py-5 px-4 w-1/4 flex items-center space-x-3" >
                <li className="text-white font-bold text-4xl">3</li>
                <li className="text-white font-semibold">Madres que apoyo</li>
              </ul>
              <ul style={{backgroundColor: "#616AC5"}} className="rounded-xl py-5 px-4 w-1/4 flex items-center space-x-3" >
                <li className="text-white font-bold text-4xl">5</li>
                <li className="text-white font-semibold">Tratamientos</li>
              </ul>
              <ul style={{backgroundColor: "#616AC5"}} className="rounded-xl py-5 px-4 w-1/4 flex items-center space-x-3" >
                <li className="text-white font-bold text-4xl">2</li>
                <li className="text-white font-semibold">Reportes nuevos de salud</li>
              </ul>
              <ul style={{backgroundColor: "#616AC5"}} className="rounded-xl py-5 px-4 w-1/4 flex items-center space-x-3" >
                <li className="text-white font-bold text-4xl">3</li>
                <li className="text-white font-semibold">Madres que apoyo</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

Filantropo.getLayout = function getLayout(page:ReactElement , props: any) {

  return (
    <LayoutFilantropo  _nextI18Next = {props._nextI18Next}>
      {page}
    </LayoutFilantropo>
  )
}

export default Filantropo