import React from 'react';
import { motion } from 'framer-motion';

const LogoCloud = () => {
    const logos = [
        {
            name: 'Real Madrid',
            imageUrl: '/LOGOS/realmadrid.webp',
            description: 'Club de Fútbol'
        },
        {
            name: 'Gobierno de España',
            imageUrl: '/LOGOS/spain.png',
            description: 'Administración Pública'
        },
        {
            name: 'Marco Aldany',
            imageUrl: '/LOGOS/marcoaldany.png',
            description: 'Salón de Belleza'
        },
        {
            name: 'Rubaiyat',
            imageUrl: '/LOGOS/Bubaiyat-madrid.jpg',
            description: 'Restaurante'
        },
        {
            name: 'Urrechu Velázquez',
            imageUrl: '/LOGOS/Urrechu-Velazquez.jpeg',
            description: 'Restaurante'
        }
    ];

    return (
        <div className="bg-[#202020] py-24 overflow-hidden flex flex-col w-full h-auto justify-center items-center">
            <div className="mx-auto w-full px-6 lg:px-8 flex flex-col items-center justify-center">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Nuestros Clientes
                    </h2>
                    <p className="text-lg leading-8 text-gray-300">
                        Empresas líderes que confían en nosotros
                    </p>
                </div>
                <div className="relative">
                    <div className="flex space-x-20 whitespace-nowrap">
                        {logos.map((logo, index) => (
                            <motion.div
                                key={`${logo.name}-${index}`}
                                className="inline-flex flex-col items-center flex-shrink-0"
                                whileHover={{ scale: 1.1 }}
                            >
                                <motion.div
                                    className="group relative h-36 w-48 flex items-center justify-center rounded-xl bg-white p-4 transition-all duration-300 "
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <motion.img
                                        src={logo.imageUrl}
                                        alt={logo.name}
                                        className="h-28 w-auto object-contain transition-transform duration-300"
                                        whileHover={{ scale: 1.2 }}
                                    />
                                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20 group-hover:ring-white/30"></div>
                                </motion.div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-base font-semibold text-white">{logo.name}</h3>
                                    <p className="mt-1 text-sm text-gray-400">{logo.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LogoCloud;
