import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '../../../context/useAuth'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import '../../../node_modules/flag-icons/css/flag-icons.min.css'

import {
  UserIcon,
  MenuIcon,
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  OfficeBuildingIcon,
  XIcon,
} from '@heroicons/react/outline'

export const Navbar = ({ t }) => {
  const solutions = [
    {
      name: t('navbar:inicio'),
      href: '/',
      icon: HomeIcon,
    },
    {
      name: t('navbar:pacientes'),
      subNav: [
        {
          link: 'tuhistoria',
          label: t('navbar:tuHistoria'),
        },
      ],
      icon: UserIcon,
    },
    {
      name: t('navbar:filantropos'),
      subNav: [
        {
          link: 'historias',
          label: t('navbar:clasificados'),
        },
        {
          link: 'trazabilidad',
          label: t('navbar:trazabilidad'),
        },
        {
          link: 'donaciones',
          label: t('navbar:donaciones'),
        },
      ],
      icon: UserGroupIcon,
    },
    {
      name: t('navbar:aliados'),
      subNav: [
        {
          link: 'instituciones',
          label: t('navbar:instituciones'),
        },
        {
          link: 'empresasconproposito',
          label: t('navbar:empresasProposito'),
        },
        {
          link: 'personasconproposito',
          label: t('navbar:personasProposito'),
        },
      ],
      icon: OfficeBuildingIcon,
    },
    {
      name: t('navbar:trabajaNosotros'),
      href: '/trabajaNosotros',
      icon: BriefcaseIcon,
    },
  ]

  const router = useRouter()
  const { authUser, setAuthUser } = useAuth()
  const [navbar, setNavbar] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['token']);


  const handlerLogOut = async () => {
    setAuthUser(null)
    removeCookie('token')
    router.push('/')
  }

 
  const changeBackground = () => {
    if (window.scrollY >= 2) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true)
    return () => window.removeEventListener('scroll', changeBackground)
  }, [])

  const handleLanguage = () => {
    if (router.locale === 'en') {
      router.push(router.asPath, '', { locale: 'es' })
    } else {
      router.push(router.asPath, '', { locale: 'en' })
    }
  }

  return (
    <header className={navbar ? 'backgroundNav navbarTop0' : 'navbarTop0'}>
      <Popover className="container-fluid popover  relative bg-transparent w-full ">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-12">
            <div className="flex justify-start items-center sm:w-0 sm:flex-1">
              <Image
                src="/logo_horizontal-white.png"
                width={'180px'}
                height={'50px'}
                alt="logo"
              />
            </div>
            <Popover.Button className="-my-2 lg:hidden">
              <div className="bg-white rounded-md p-2 mr-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </Popover.Button>
            <Popover.Group as="nav" className="hidden lg:flex space-x-10">
              <div className="items-center mr-14">
                <nav>
                  <ul className="main-menu">
                    <li className="text-black main-menu__item main-menu__item">
                      <Link href="/">
                        <a className="text-black main-menu__link font-black">
                          {t('navbar:inicio')}
                        </a>
                      </Link>
                    </li>
                    {authUser ? (
                      <>
                        <li className="main-menu__item main-menu__item--has-child">
                          <Link href="/">
                            <a className="main-menu__link">
                              {t('navbar:pacientes')}
                            </a>
                          </Link>
                          <ul className="main-menu__sub-list">
                            {authUser.formularioTuHistoria ? (
                              <li>
                                <Link href="/miSolictud">
                                  <a>{t('navbar:miSolicitud')}</a>
                                </Link>
                              </li>
                            ) : (
                              <li>
                                <Link href="/tuhistoria">
                                  <a>{t('navbar:tuHistoria')}</a>
                                </Link>
                              </li>
                            )}
                          </ul>
                        </li>
                      </>
                    ) : null}
                    {/* <li className="main-menu__item main-menu__item--has-child">
                                    <Link href="/" >
                                        <a className="main-menu__link">Comunidades E Instituciones</a>
                                    </Link>
                                    <ul className="main-menu__sub-list">
                                        <li>
                                            <Link href="/" >
                                                <a>Registro</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" > 
                                                <a>Inscribir Comunidad</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" > 
                                                <a>Inscribir Institución</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" > 
                                                <a>Preleccionar Beneficiarios</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" >
                                                <a>Seguimiento de Servicios</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li> */}
                    <li className="main-menu__item main-menu__item--has-child">
                      <Link href="/">
                        <a className="main-menu__link">
                          {t('navbar:filantropos')}
                        </a>
                      </Link>
                      <ul className="main-menu__sub-list">
                        <li>
                          <Link href="/historias">
                            <a>{t('navbar:clasificados')}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/trazabilidad">
                            <a>{t('navbar:trazabilidad')}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/donaciones">
                            <a>{t('navbar:donaciones')}</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="main-menu__item main-menu__item--has-child">
                      <Link href="/">
                        <a className="main-menu__link">{t('navbar:aliados')}</a>
                      </Link>
                      <ul className="main-menu__sub-list">
                        <li>
                          <Link href="/instituciones">
                            <a>{t('navbar:instituciones')}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/empresasconproposito">
                            <a>{t('navbar:empresasProposito')}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/personasconproposito">
                            <a>{t('navbar:personasProposito')}</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {!authUser ? (
                      <>
                        <li className="text-black main-menu__item main-menu__item">
                          <Link href="/trabajaNosotros">
                            <a className="text-black main-menu__link font-black">
                              {t('navbar:trabajaNosotros')}
                            </a>
                          </Link>
                        </li>
                      </>
                    ) : null}
                  </ul>
                </nav>
              </div>
            </Popover.Group>
            <div className="hidden lg:flex space-x-6 lg:mt-3">
              {!authUser ? (
                <>
                  <Link href={'/registro'}>
                    <a className="main-menu__link whitespace-nowrap no-underline">
                      <span className="px-4 py-1.5 items-center no-underlinejustify-center border rounded-md shadow-sm text-base font-medium text-white border-white cursor-pointer hover:bg-white hover:bg-opacity-10">
                        {' '}
                        {t('navbar:registro')}{' '}
                      </span>
                    </a>
                  </Link>
                  <Link href={'/login'}>
                    <a className="main-menu__link whitespace-nowrap no-underline">
                      <span className="px-3 py-1.5 items-center no-underlinejustify-center border rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer ">
                        {' '}
                        {t('navbar:iniciarSesion')}{' '}
                      </span>
                    </a>
                  </Link>
                </>
              ) : (
                <>
                  <a
                    onClick={handlerLogOut}
                    className="main-menu__link whitespace-nowrap "
                  >
                    <span className="items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer ">
                      {' '}
                      Cerrar sesión{' '}
                    </span>
                  </a>
                </>
              )}
            </div>
            <li className="text-black main-menu__item main-menu__item">
              <a
                className="main-menu__link text-white cursor-pointer"
                onClick={handleLanguage}
              >
                {router.locale}{' '}
                {router.locale === 'en' ? (
                  <span className="fi fi-gb"></span>
                ) : (
                  <span className="fi fi-es"></span>
                )}
              </a>
            </li>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className=" overscroll-y-auto absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src="/logo_horizontal-black.png"
                      width={'190px'}
                      height={'50px'}
                      alt="logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <SubMenu key={item.name} item={item} />
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  {authUser ? (
                    <>
                      <a
                        onClick={handlerLogOut}
                        className="main-menu__link whitespace-nowrap cursor-pointer "
                      >
                        <span className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 underline ">
                          {' '}
                          {t('navbar:cerrarSesion')}{' '}
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link href={'/registro'}>
                        <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                          {t('navbar:registro')}
                        </a>
                      </Link>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        {t('navbar:yaRegistrado')}?{' '}
                      </p>
                      <div className="mt-3 flex justify-center">
                        <Link href={'/login'}>
                          <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            {t('navbar:iniciarSesion')}
                          </a>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

const SubMenu = ({ item }) => {
  const [open, setOpen] = useState(false)

  return (
    <li
      key={item.name}
      className="-m-3 p-3 list-none items-center rounded-md hover:bg-gray-50 "
    >
      {item.href ? (
        <>
          <Link href={item.href} passHref>
            <div className="flex cursor-pointer" onClick={() => setOpen(!open)}>
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                aria-hidden="true"
              />
              <span className="ml-3 text-base font-medium text-gray-900">
                {item.name}
              </span>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="flex cursor-pointer" onClick={() => setOpen(!open)}>
            <item.icon
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              aria-hidden="true"
            />
            <span className="ml-3 text-base font-medium text-gray-900">
              {item.name}
            </span>
          </div>
          <ul className={open ? 'ml-5' : 'ml-5 hidden'}>
            {item.subNav.map((sub) => (
              <li key={sub.link}>
                <Link href={sub.link}>
                  <a className="text-blue-500">{sub.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  )
}
