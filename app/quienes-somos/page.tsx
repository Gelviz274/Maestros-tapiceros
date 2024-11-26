"useContext";
"use client";
import React from "react";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import AboutUs from "@/components/Aboutus";
import Servicesin from "@/components/serviciosin";
import QuienesCards from "@/components/quienes";
function Quienessomos() {
  return (
    <div>
      <div
        className="flex flex-col min-h-screen -mt-20"
        style={{
          backgroundImage: 'url("FOTOS/Sofa-negro-p1.jpeg")',
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
            className="text-6xl sm:text-7xl text-center grid place-items-center font-bold text-white gap-5 w-4/5"
          >
            Más de 25 Años Transformando Muebles en Obras de Arte
            <strong className="text-balance text-2xl font-normal mt-2 w-full">
            Con pasión, dedicación y experiencia, restauramos y renovamos tus muebles con el toque que merecen.
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
      
      
      <QuienesCards />
      <section className="bg-white w-full h-auto flex flex-col items-center justify-start px-6 sm:px-10 lg:px-18 xl:px-16 py-10">
        <motion.h2
          animate={{ opacity: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-cafe gap-5 w-11/12 sm:w-4/5"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Servicios Especializados
        </motion.h2>
        <motion.h3
          animate={{ opacity: 1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-cafe gap-5 w-11/12 sm:w-4/5 mt-5"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ofrecemos servicios de tapicería en general, adaptándonos a cualquier
          necesidad específica que pueda tener.
        </motion.h3>
        <Servicesin />
      </section>
      <Contact />
    </div>
  );
}

export default Quienessomos;
