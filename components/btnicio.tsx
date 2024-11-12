"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react'; // Asegúrate de actualizar la ruta al icono

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > window.innerHeight / 2;
            setIsVisible(scrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className="fixed bottom-6 right-32 bg-[#202020] text-white hover:text-[#d9d9d9] font-semibold py-3 px-6 rounded-xl text-xl shadow-lg flex items-center space-x-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <ArrowUp className="w-5 h-5" />
                    <span>Ir al Inicio</span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
