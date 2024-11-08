"use client"
import Link from "next/link"
import { Button } from "@nextui-org/button"
import { motion } from "framer-motion"
import Image from "next/image"

import { Location, TelephoneIcon, Mail, Instagram, Facebook } from "@/components/icons"


export default function Footer() {
  return (
    <footer className="bg-white text-cafe h-[350px] w-full ">
      <div className="flex  w-full h-full flex-col justify-center items-center">
        <Image
          src="/Logo-HD.jpeg"
          alt="logo"
          width={200}
          height={200}
        />
        <div className="flex justify-center items-center mt-3">
          <Location />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Calle Canteras, local 8, 28694 Madrid, MADRID
          </motion.h1>
        </div>
        <div className="flex justify-center items-center w-3/4 gap-4 mt-2">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <TelephoneIcon />
            <Link href="tel:641388422"
              className="hover:text-cafehover text-cafe ml-1 items-center">
              641 388 422
            </Link>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <Mail
              className="mr-1" />
            <Link href="mailto:info@maestrostapiceros.com"
              className="hover:text-cafehover text-cafe">
              info@maestrostapiceros.com
            </Link>
          </motion.h1>
        </div>
        <div className="flex justify-center items-center h-[60p] w-full gap-5 mt-2">
          <motion.a
          className="rounded-full bg-cafe p-3"
          initial={{opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
          href="#"
          >
            <Instagram 
            className="text-white hover:text-beige transition-colors-opacity"/>
          </motion.a>


          <motion.a
          className="rounded-full bg-cafe p-3"
          initial={{opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
          href="#"
          >
            <Facebook 
            className="text-white hover:text-beige transition-colors-opacity"/>
          </motion.a>
        </div>
      </div>
      <div className="flex w-full h-[50px]  bg-black flex-col justify-center items-center gap-5">
        <p className="text-white">© 2024 Maestros Tapiceros. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}