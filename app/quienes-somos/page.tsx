"use context";
"use client";
import React from "react";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
function Quienessomos() {
  return (
    <div>
      <div
        className="flex flex-col min-h-screen -mt-20"
        style={{
          backgroundImage: 'url("FOTOS/Sobre-nosotros.webp")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        rel="preload"
      >
        <section className="h-screen bg-transparent grid place-items-center bg-cover bg-center w-full">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-7xl text-center grid place-items-center font-bold text-[#414040] gap-5 w-4/5"
          >
            Nuestra Pasión por la Tapicería en Madrid
            <strong className="text-balance text-2xl font-normal mt-2 w-full">
              Ofrecemos servicios de tapicería y fabricación de muebles de alta
              calidad para renovar y embellecer sus espacios.
            </strong>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const contactSection = document.querySelector("#form");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              whileHover={{ scale: 1.1 }}
              className="bg-[#202020]  text-white hover:text-[#d9d9d9] font-semibold py-4 px-8  rounded text-2xl"
            >
              Contactanos
            </motion.button>
          </motion.h2>
        </section>
      </div>
      <Contact />
    </div>
  );
}

export default Quienessomos;
