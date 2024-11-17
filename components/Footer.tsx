"use client"
import Link from "next/link"
import { motion } from "framer-motion"


import { Location, TelephoneIcon, Mail, Instagram, Facebook } from "@/components/icons"


export default function Footer() {
  return (
    <footer className="bg-white text-black w-full">
      <div className="flex flex-col items-center justify-center p-4 space-y-4">
        {/* Logo */}
        <img
          src="/Logo-HD.jpeg"
          alt="Logo Maestros Tapiceros"
          className="w-32 h-32 sm:w-40 sm:h-40"
        />

        {/* Dirección */}
        <div className="flex items-center text-center space-x-2">
          <Location className="w-5 h-5" />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm sm:text-base"
          >
            Calle Canteras, local 8, 28694 Madrid, MADRID
          </motion.h1>
        </div>

        {/* Contacto */}
        <div className="flex flex-col sm:flex-row sm:justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-sm sm:text-base"
          >
            <TelephoneIcon className="w-4 h-4 mr-1" />
            <Link href="tel:641388422" className="hover:text-cafehover text-black">
              641 388 422
            </Link>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 mr-1" />
            <Link href="mailto:info@maestrostapiceros.com" className="hover:text-cafehover text-black">
              info@maestrostapiceros.com
            </Link>
          </motion.h1>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-4 mt-2">
          <motion.a
            className="rounded-full bg-black p-2 hover:bg-gray-700 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
            aria-label="¡Síguenos en Instagram!"
          >
            <Instagram className="w-5 h-5 text-white" />
          </motion.a>
          <motion.a
            className="rounded-full bg-black p-2 hover:bg-gray-700 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
            aria-label="¡Visítanos en Facebook!"
          >
            <Facebook className="w-5 h-5 text-white" />
          </motion.a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-2">
        <p className="text-white text-center text-xs sm:text-sm">
          © 2024 Maestros Tapiceros. Todos los derechos reservados.
        </p>
      </div>
    </footer>

  )
}