"use client"

import React from 'react'
import '../styles/globals.css';
import Parallax from '@/components/parallax';
import { motion } from 'framer-motion';
import CardComponent from '@/components/cards';
import Servicesin from '@/components/serviciosin';
import { ShieldIcon, ClockIcon, StarIcon } from '@/components/icons';
import { FunctionComponent, SVGProps } from 'react';


type Seccion1 = {
    id: number;
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    title: string;
    text: string;
}
const seccion1: Seccion1[] = [
    { id: 1, icon: ShieldIcon, title: "Calidad Asegurada", text: "Respaldamos nuestro trabajo con una garantía líder en la industria y materiales premium." },
    { id: 2, icon: ClockIcon, title: "Más de 25 años de experiencia", text: "Decadas de experiencia en restauracion de muebles y artesania y tapiceria" },
    { id: 3, icon: StarIcon, title: "Soluciones personalizadas", text: "Servicios de tapiceria adaptados a su estilo y requisitos únicos." }
]

function Homepage() {
    return (

        <article className='h-full -mt-16 bg-no-repeat '
            style={{ backgroundImage: 'url("fondo.jpg")' }}
            rel="preload">
            { /*PANTALLA PRINCIPAL*/}
            <Parallax>
                <section
                    className="h-screen bg-transparent grid place-items-center bg-cover bg-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl text-center grid place-items-center font-bold text-[#f6f4f0] gap-5 w-4/5">

                        Maestros Tapiceros, tapicería y restauración de muebles en Madrid
                        <strong className="text-balance text-2xl font-normal w-4/5">
                            Ofrecemos servicios de tapicería y fabricación de muebles de alta calidad para renovar y embellecer sus espacios.
                        </strong>
                        <motion.button
                            whileTap={{ scale: 0.9 }}

                            whileHover={{ scale: 1.1 }}
                            className="bg-[#202020]  text-white hover:text-[#d9d9d9] font-semibold py-4 px-8  rounded text-2xl">
                            Contactanos
                        </motion.button>
                    </motion.h2>
                </section>




                { /*SECCION 1 - CONTENT 1 */}
                <section className='h-auto rounded-sm bg-[#fff] flex flex-col  px-44 py-12 items-center justify-start'>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl text-center grid place-items-center font-bold text-cafe gap-5 w-4/5">
                        ¿Por qué elegirnos?
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl text-center grid place-items-center text-cafe gap-5 w-4/5 mt-5">

                        Tu visión, nuestra misión: creamos tapicería que refleja tu estilo único.
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex  items-center py-5 justify-evenly mt-10 gap-7  w-full h-auto">

                        {seccion1.map((seccion) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}

                                className='flex flex-col items-center justify-center gap-5 text-center py-2 bg-beigecard rounded-2xl w-96 h-72'
                                key={seccion.id}>
                                <seccion.icon />
                                <h2 className='text-2xl font-bold text-cafe w-11/12'>{seccion.title}</h2>
                                <p className='text-cafeclaro w-3/4'>{seccion.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex items-center justify-center gap-5 text-center p-5 mt-16 bg-beigecard rounded-2xl w-11/12 h-[450px] ">
                        <div className='w-2/4 p-4 flex flex-col items-start justify-start h-full'>
                            <h2 className='text-4xl font-bold text-cafe py-5 px-2 text-start'>Nuestra Historia</h2 >
                            <p className='text-cafeclaro text-start text-2xl py-3 px-2'><strong>Maestros Tapiceros en Madrid</strong>, un oficio que comenzó como parte de nuestra tradición familiar. <strong>Con más de 25 años de experiencia</strong>,
                                hemos perfeccionado el arte de la tapicería, eligiendo <strong>los mejores materiales y técnicas de tapizado</strong> para lograr resultados de máxima calidad.
                                En Maestros Tapiceros, transformamos y renovamos cada mueble, llenándolo de <strong>color y confort</strong>, y cuidando cada detalle para ofrecer un <strong>tapizado perfecto.</strong></p>
                        </div>
                        <div className='w-2/4 h-auto p-5'>
                            <img
                                src="Sala.webp"
                                alt="historia"
                                className='w-full h-full object-cover rounded-xl' />
                        </div>
                    </motion.div>



                </section>

            </Parallax>
            <section className="bg-white p-10 w-full h-auto flex flex-col items-center justify-start px-44">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl text-center grid place-items-center font-bold text-cafe gap-5 w-4/5">
                    Servicios Especializados
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl text-center grid place-items-center text-cafe gap-5 w-4/5 mt-5">

                    Ofrecemos servicios de tapicería en general, adaptándonos a cualquier necesidad específica que pueda tener.
                </motion.h3>
                <Servicesin />

            </section>
            { /*SECCION 2 - CARDS */}
            <section className="bg-beigecard p-10 w-full h-auto flex flex-col items-center justify-start px-44">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl text-center grid place-items-center font-bold text-cafe gap-5 w-4/5 mt-10">
                    Transformaciones que hablan por sí mismas
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl text-center grid place-items-center text-cafe gap-5 w-4/5 mt-5 mb-10">

                    Inspiración para tu próximo proyecto: observa cómo convertimos tus ideas en realidad.
                </motion.h3>
                <CardComponent />
            </section>



        </article>
    )
}

export default Homepage