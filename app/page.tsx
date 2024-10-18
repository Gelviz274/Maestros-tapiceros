"use client"

import React from 'react'
import '../styles/globals.css';
import Parallax from '../components/parallax.tsx';
import { motion } from 'framer-motion';

function Homepage() {
    return (
        <article className='h-full -mt-16 bg-no-repeat'
            style={{ backgroundImage: 'url("fondo.jpg")' }}>
            <Parallax>
                <section
                    className="h-screen bg-transparent grid place-items-center bg-cover bg-center"

                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl text-center grid place-items-center font-bold text-[#f6f4f0] gap-5">
                    
                        Maestros Tapiceros, Tapicería y restauración de muebles en Madrid
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

                <section className='h-screen rounded-xl bg-[#514134]'>
                    <h2 className='text-6xl text-center pt-20 text-beige font-bold'>
                        Servicios de Tapiceria
                        <br />
                        <span className="text-balance text-2xl w-2/4 font-normal">
                            Especializados en tapizar todo tipo de muebles, desde sofás hasta sillas de aviación y barcos. Nuestro equipo está preparado para restaurar y reparar tapicerías de todo tipo,
                            incluyendo paredes, puertas y cabeceros. Cada proyecto es una oportunidad para convertir un mueble viejo en una pieza renovada y mejor que nueva.
                        </span>
                    </h2>
                </section>
            </Parallax>
        </article>
    )
}

export default Homepage