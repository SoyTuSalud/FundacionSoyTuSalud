import { Box, Container, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { LayoutMain } from '../components/layouts/LayoutMain'

export default function Home() {
    return (
        <LayoutMain>
            <section className="" id="about">
                <div className="container mt-12">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading heading--primary">
                                <span
                                    className="heading__pre-title"
                                    data-lang="nostros"
                                >
                                    Sobre Nosotros
                                </span>
                                <h2 className="heading__title">
                                    <span>Fundación Soy Tú Salud</span>
                                </h2>
                            </div>
                            <p>
                                Conoces a algún familiar, amigo, persona o tú
                                que necesite algún servicio médico y se
                                encuentre en situación de vulnerabilidad?. En{' '}
                                <a href="https://www.fundacionsoytusalud.org">www.fundacionsoytusalud.org/</a> informa tu
                                historia o su historia, aplica y Listo!.
                            </p>
                            <p className="pb-4">
                                {' '}
                                En la Fundación{' '}
                                <a href="https://www.fundacionsoytusalud.org/">www.fundacionsoytusalud.org</a> una vez has
                                demostrado que estás en una situación de
                                vulnerabilidad, podrás acceder :{' '}
                            </p>
                            <div className="row">
                                <div className="col-md-6 col-lg-12">
                                    <ul className="unordered-list">
                                        <li>
                                            Consulta Médica General por
                                            Telemedicina.
                                        </li>
                                        <li>
                                            Consulta Médica Especializada por
                                            Telemedicina.
                                        </li>
                                        <li>
                                            Medicamentos para enfermedades no
                                            crónicas.
                                        </li>
                                        <li>
                                            Exámenes de Laboratorio
                                            Domiciliarios.
                                        </li>
                                        <li>
                                            Otros servicios para su salud, que
                                            estén disponibles.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a className="button button--primary" href="#">
                                Más sobre nosotros
                            </a>
                        </div>
                        <div className="col-lg-6 col-xl-5 offset-xl-1">
                            <div className="info-box flex items-center">
                                <div className="absolute">
                                    <Image
                                        src="/about_layout.png"
                                        alt="img"
                                        width={700}
                                        height={700}
                                    />
                                </div>
                                <div className="relative box-content m-auto">
                                    <Image
                                        src="/gallery_2.png"
                                        alt="img"
                                        width={350}
                                        height={350}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section icons-section no-padding-top">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-12">
                            <div className="heading heading--center">
                                <span className="heading__pre-title">
                                    Servicios
                                </span>
                                <h2 className="heading__title">
                                    <span>Lo que hacemos</span>{' '}
                                    <span>para todas las personas</span>{' '}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="icon-item">
                                <div className="icon-item__img">
                                    <div className="icon icon-item__icon icon--red">
                                        <Image
                                            src="/Logo_servicios1.png"
                                            alt="img"
                                            width={300}
                                            height={300}
                                        />
                                    </div>

                                    <div className="img--layout">
                                        <Image
                                            src="/icon_1-1.png"
                                            alt="img"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div className="icon-item__text">
                                    <p>Ayuda Médica</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutMain>
    )
}
