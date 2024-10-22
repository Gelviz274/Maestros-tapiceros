"use client"
import Image from 'next/image';
import React from 'react'
import '../styles/globals.css';
import Parallax from '@/components/parallax';
import { motion } from 'framer-motion';
import CardComponent from '@/components/cards';




function Homepage() {
    return (

        <article className='h-full -mt-20 bg-no-repeat'
            style={{ backgroundImage: 'url("fondo.jpg")' }}>
            { /*PANTALLA PRINCIPAL*/}
            <Parallax>
                <section
                    className="h-screen bg-transparent grid place-items-center bg-cover bg-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl text-center grid place-items-center font-bold text-[#f6f4f0] gap-5">

                        Maestros Tapiceros, tapicería y restauración de muebles en Madrid
                        <strong className="text-balance text-2xl font-normal w-4/5">
                            Ofrecemos servicios de tapicería y fabricación de muebles de alta calidad para renovar y embellecer sus espacios.
                        </strong>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="bg-beige hover:bg-[#f6f4f0] text-cafe hover:text-[#514134] font-semibold py-2 px-4 border border-[#f6f4f0] hover:border-transparent rounded-full text-3xl">
                            Contactanos
                        </motion.button>
                    </motion.h2>
                </section>




                { /*SECCION 1 - CONTENT 1 */}
                <section className='h-auto rounded-xl bg-[#fff] flex flex-col px-44 py-12'>
                    <div className='w-full max-h-[600px] flex p-2 items-start justify-evenly text-clip'>
                        <div className="w-1/2 h-full flex flex-col mr-4">
                            <h4 className='text-3xl text-start text-beigehover font-bold w-full max-h-16 mt-5 text-wrap'>
                                Servicios de Tapiceria
                                <br />
                                <p className="text-base text-start w-full text-cafe mb-10 text-wrap font-extralight">
                                    Somos <strong className='font-bold text-beigehover'>expertos</strong> en la tapicería de todo tipo de muebles, desde <strong className='font-bold text-beigehover'>sofás</strong> hasta <strong className='font-bold text-beigehover'>sillas de aviación</strong> y <strong className='font-bold text-beigehover'>barcos</strong>.
                                    Nuestro equipo está <strong className='font-bold text-beigehover'>altamente capacitado</strong> para <strong className='font-bold text-beigehover'>restaurar</strong> y <strong className='font-bold text-beigehover'>reparar</strong> tapicerías de cualquier tipo, incluyendo <strong className='font-bold text-beigehover'>paredes</strong>, <strong className='font-bold text-beigehover'>puertas</strong> y <strong className='font-bold text-beigehover'>cabeceros</strong>.
                                    Cada proyecto representa una <strong className='font-bold text-beigehover'>oportunidad única</strong> para <strong className='font-bold text-beigehover'>transformar</strong> un mueble antiguo en una pieza renovada, incluso <strong className='font-bold text-beigehover'>mejor que nueva</strong>.
                                </p>

                                Diseños Artesanales
                                <br />
                                <p className="text-base text-start w-full text-cafe text-wrap font-extralight">
                                    Nuestros <strong className='font-bold text-beigehover'>diseños</strong> artesanales están pensados para <strong className='font-bold text-beigehover'>alegrar</strong> su <strong className='font-bold text-beigehover'>día a día</strong>.
                                    La <strong className='font-bold text-beigehover'>atención al detalle</strong> y el <strong className='font-bold text-beigehover'>amor por lo hecho a mano</strong> se reflejan en cada uno de nuestros trabajos.
                                    Con nosotros, puede estar seguro de que sus muebles recibirán un <strong className='font-bold text-beigehover'>trato exclusivo</strong> y <strong className='font-bold text-beigehover'>personalizado</strong>.
                                </p>

                            </h4>
                        </div>

                        <div className="flex w-2/4 h-[450px] items-center justify-center">
                            <img src="/Sillaa.png" alt="Logo Maestros Tapiceros"
                                className='w-full h-full'
                                style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <br />
                    { /*SECCION 1 - CONTENT 2 */}
                    <div className='w-full h-auto flex p-2 items-start justify-evenly mt-3'>
                        <div className="flex w-1/2 h-[450px] items-center justify-center">
                            <img src="/Sofacuero.jpg" alt="Logo Maestros Tapiceros"
                                className='w-full h-full'
                                style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="w-1/2 h-auto text-cafe ml-5">
                            <h4 className='text-3xl text-start text-beigehover font-bold w-full h-auto mt-5 mb-6'>
                                Fabricación y Restauración de Muebles
                            </h4>
                            <p className='text-base text-start w-full text-cafe text-wrap font-extralight mb-3'>
                                En Maestros Tapiceros, nos enorgullece ofrecer una exquisita selección de muebles antiguos, perfectos para embellecer cualquier habitación de su hogar. Nuestro compromiso con la calidad se refleja en nuestro meticuloso proceso de fabricación y restauración, que incluye:
                            </p>
                            <ul className='gap-7 text-base font-extralight list-disc'>
                                <li className='ml-6 mb-3'>
                                    <strong className='font-bold text-beigehover'>Asesoramiento Especializado: </strong>
                                    Nuestro equipo de expertos está listo para guiarle en la elección del tejido y estilo ideales para sus muebles, asegurando que cada pieza sea única y se ajuste a su visión.
                                </li>
                                <li className='ml-6 mb-3'>
                                    <strong className='font-bold text-beigehover'>Reparación de Muebles: </strong>
                                    Transformamos sus muebles viejos en obras maestras renovadas, combinando durabilidad y estética, para que pueda disfrutarlos por muchos años más.
                                </li>
                                <li className='ml-6'>
                                    <strong className='font-bold text-beigehover'>Fabricación de Muebles a Medida: </strong>
                                    Creamos muebles únicos, diseñados específicamente para satisfacer sus necesidades y gustos, garantizando que cada pieza sea tan especial como usted.
                                </li>
                            </ul>


                        </div>

                    </div>
                </section>

            </Parallax>
            { /*SECCION 2 - CARDS */}
            <section className="bg-beige p-10 w-full h-screen flex flex-col items-center justify-start px-44">
                <h1 className="text-center text-cafe font-bold text-4xl mb-8">Nuestros Servicios</h1>
                <p className='text-center text-cafe font-bold text-2xl'>Descubre nuestra amplia gama de servicios de tapicería diseñados para renovar y embellecer tus espacios. Desde sofás hasta oficinas, nuestro equipo de expertos está listo para transformar tus muebles y ambientes.</p>
                <CardComponent />
            </section>
        </article>
    )
}

export default Homepage