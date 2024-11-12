"use client"
import React from 'react';
import { handleForm } from '@/app/action';
import { TelefonoIcon, ClockIcon, LocationBorder, MailBorder, UserIcon } from '@/components/icons';
import GoogleMap from '@/components/mapsgoogle';
import { motion } from "framer-motion"
import Link from 'next/link';


function Contact() {
    return (
        <div className="bg-beigecard p-10 w-full h-[1050px] flex flex-col items-center justify-start px-44" id="form">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl text-center grid place-items-center font-bold text-cafe gap-5 w-4/5 mt-10" >
                ¿Listo para transformar tus espacios ?
            </motion.h2 >
            <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl text-center grid place-items-center text-cafe gap-5 w-4/5 mt-5 mb-10">

                Déjanos tus datos y nos pondremos en contacto para hablar de cómo podemos hacer realidad tus proyectos
            </motion.h3>
            <div className='w-full h-full flex flex-row justify-between mt-5'>
                <div className="flex flex-col gap-2 w-2/4 p-5">
                    <ul className='flex flex-col gap-8 p-5'>
                        <li className='flex h-[55px]'>
                            <TelefonoIcon className='w-[30px] h-full text-cafe' />
                            <div className='flex flex-col ml-2'>
                                <h2 className='text-xl font-bold text-cafe'>Telefono</h2>
                                <Link href="tel:641388422"
                                    className="hover:text-cafe text-zinc-600">
                                    641 388 422
                                </Link>
                            </div>
                        </li>
                        <li className='flex h-[55px]'>
                            <ClockIcon className='w-[30px] h-full text-cafe' />
                            <div className='flex flex-col ml-2'>
                                <h2 className='text-xl font-bold text-cafe'>Horario</h2>
                                <p>Lunes a Domingo 08:00 - 20:00</p>
                            </div>
                        </li>
                        <li className='flex h-[55px]'>
                            <MailBorder className='w-[30px] h-full text-cafe' />
                            <div className='flex flex-col ml-2'>
                                <h2 className='text-xl font-bold text-cafe'>Correo electrónico</h2>
                                <Link href="mailto:info@maestrostapiceros.com"
                                    className="hover:text-cafehover text-zinc-600">
                                    info@maestrostapiceros.com
                                </Link>
                            </div>
                        </li>
                        <li className='flex h-[55px]'>
                            <LocationBorder className='w-[30px] h-full text-cafe' />
                            <div className='flex flex-col ml-2'>
                                <h2 className='text-xl font-bold text-cafe'>Ubicación</h2>
                                <p>Calle Canteras, local 8 28694 Madrid, MADRID </p>
                            </div>
                        </li>
                    </ul>
                    <div className="flex p-5">
                        <GoogleMap />
                    </div>

                </div>

                <div className="flex flex-col gap-2 w-2/4 p-5">
                    <form action={handleForm} className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 h-auto">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nombre Completo
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    name="name"
                                    required

                                    className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    placeholder="Tu nombre"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <MailBorder className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    required

                                    className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    placeholder="tu@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Teléfono
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <TelefonoIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="tel"
                                    name="phone"
                                    required

                                    className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    placeholder="+34 XXX XXX XXX"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mensaje
                            </label>
                            <textarea
                                name="message"
                                required

                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                placeholder="¿En qué podemos ayudarte?"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="newsletter"
                                    id="newsletter"
                                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                                />
                                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                                    Deseo recibir novedades y ofertas especiales
                                </label>

                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    required
                                    id="terms"
                                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                                />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                    Acepto la política de privacidad y términos de uso
                                    <span className="text-red-500">*</span>
                                </label>
                            </div>
                        </div>



                        <button
                            type="submit"
                            className="w-full bg-cafeclaro text-white py-3 px-6 rounded-lg hover:bg-cafehover transition-colors duration-200 font-semibold"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact




