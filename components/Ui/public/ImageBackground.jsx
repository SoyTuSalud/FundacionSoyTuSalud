import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, Container } from '@mui/material'
import { useEffect } from 'react'
import { useComponent } from '../../../context/useComponents'

const initialState = {
  title: 'Mejoramos la Salud de personas en situación de vulnerabilidad',
  title2: 'con recursos de Responsabilidad Social',
}

export const ImageBackground = ({propsImage}) => {
  
  // const router = useRouter()
  // useEffect(() => {
  //   switch (router.pathname) {
  //     case '/':
  //       setImagePath('/promo_c1.png')
  //       break
  //     case '/trasabilidad':
  //       setImagePath('/promo_5.png')
  //       break
  //     case '/tuhistoria':
  //       setImagePath('/promo_3.jpg')
  //       setText({
  //         title: 'Soy tu',
  //         title2: 'Tu Historia',
  //       })
  //       break
  //     case '/instituciones':
  //       setImagePath('/promo_4.png')
  //       setText({
  //         title: 'Aliados',
  //       })
  //       break
  //     case '/donaciones':
  //       setImagePath('/promo_5.png')
  //       setText({
  //         title: 'Donaciones',
  //       })
  //       break
  //     case '/historias':
  //       setImagePath('/promo_5.png')
  //       setText({
  //         title: 'Nuestras Historias',
  //       })
  //       break
  //     case '/personasconproposito':
  //       setImagePath('/promo_4.png')
  //       setText({
  //         title: 'Personas con Propósito',
  //       })
  //       break
  //     case '/empresasconproposito':
  //       setImagePath('/promo_4.png')
  //       setText({
  //         title: 'Empresas con Propósito',
  //       })
  //       break
  //     default:
  //       setImagePath('/promo_c1.png')
  //       setText({
  //         title: '',
  //       })

  //       break
  //   }
  // }, [router])

  return (
    <>
      <Box
        className="pb-12"
        sx={{
          overflow: 'hidden',
          backgroundSize: 'contain',
          textAlign: 'center',
        }}
        position="relative"
      >
        <Image
          src={propsImage.image}
          alt="img"
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="50% 25%"
          priority={true}
        />
        <Container className="pt-32 max-w-screen-2xl">
          <div className="align-container__item">
            <Box
              position={'relative'}
              className="text-white mt-12 text-3xl md:text-4xl lg:text-6xl xl:text-6xl tracking-tight text-left"
            >
              <span className="font-bold" data-lang="eslogan1">
                {propsImage?.title}{' '}
              </span>
              <span className="font-light">{propsImage?.title2}</span>
            </Box>
          </div>
        </Container>
      </Box>
    </>
  )
}
