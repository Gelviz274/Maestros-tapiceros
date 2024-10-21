"use client"
import Image from 'next/image';
import React from 'react'
import '../styles/globals.css';
import Parallax from '@/components/parallax';
import { motion } from 'framer-motion';

function Homepage() {
    return (
        <article className='h-full -mt-20 bg-no-repeat'
            style={{ backgroundImage: 'url("fondo.jpg")' }}>
            <Parallax>
                <section
                    className="h-screen bg-transparent grid place-items-center bg-cover bg-center"

                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl text-center grid place-items-center font-bold text-[#f6f4f0] gap-5">

                        Maestros Tapiceros, tapicería y restauración de muebles en Madrid
                        <span className="text-balance text-2xl font-normal w-4/5">
                            Ofrecemos servicios de tapicería y fabricación de muebles de alta calidad para renovar y embellecer sus espacios.
                        </span>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="bg-beige hover:bg-[#f6f4f0] text-cafe hover:text-[#514134] font-semibold py-2 px-4 border border-[#f6f4f0] hover:border-transparent rounded-full text-3xl">
                            Contactanos
                        </motion.button>
                    </motion.h2>
                </section>

                <section className='h-screen rounded-xl bg-[#fff] flex flex-col px-52 py-7'>
                    <div className='w-full max-h-[500px] flex p-2 items-start justify-start text-clip'>
                        <div className="w-1/2 h-full flex flex-col">
                            <h4 className='text-4xl text-start text-beige font-bold w-full max-h-16 mt-5 text-wrap'>
                                Servicios de Tapiceria
                                <br />
                                <p className="text-lg text-start w-11/12 text-cafe mb-10 text-wrap">
                                    Somos <span className='font-bold text-beigehover'>expertos</span> en la tapicería de todo tipo de muebles, desde sofás hasta sillas de aviación y barcos.
                                    Nuestro equipo está altamente capacitado para restaurar y reparar tapicerías de cualquier tipo, incluyendo paredes, puertas y cabeceros.
                                    Cada proyecto representa una oportunidad única para transformar un mueble antiguo en una pieza renovada, incluso mejor que nueva.
                                </p>
                                Diseños Artesanales
                                <br />
                                <p className="text-lg text-start w-11/12 text-cafe text-clip">
                                    Nuestros <span className='font-bold text-beigehover'>diseños</span> artesanales están pensados para <span className='font-bold text-beigehover'>alegrar</span> su día a día.
                                    La atención al detalle y el amor por lo hecho a mano se reflejan en cada uno de nuestros trabajos.
                                    Con nosotros, puede estar seguro de que sus muebles recibirán un trato exclusivo y personalizado.
                                </p>
                            </h4>
                        </div>

                        <div className="flex w-1/2 h-[500px] items-center justify-center">
                            
                            <img src="/Sillaa.png" alt="Logo Maestros Tapiceros" 
                            className='w-full h-full'
                            style={{ objectFit: 'cover' }}/>
                        </div>
                    </div>



                    <div className='w-full max-h-[500px] flex p-2 items-start justify-start mt-10'>
                        <div className="flex w-1/2 h-[400px] items-center justify-center mr-5">
                            <Image
                                src="/Silla.webp"
                                width={400}
                                height={300} // Mantiene la relación de aspecto, pero puedes ajustar el tamaño según sea necesario
                                className="ml-1 h-full w-full" // Esto hace que la imagen ocupe todo el espacio del contenedor
                                style={{ objectFit: 'cover' }} // Asegura que la imagen mantenga su proporción y cubra el contenedor
                                loading="lazy"
                                alt="Logo Maestros Tapiceros"
                            />
                        </div>

                        <div className="w-1/2 h-full">
                            <h4 className='text-4xl text-end text-beige font-bold w-full max-h-16 mt-5'>
                                Fabricación y Restauración de Muebles
                            </h4>

                        </div>

                    </div>
                </section>

            </Parallax>
        </article>
    )
}

export default Homepage