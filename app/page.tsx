"use client";
"useContext";
import React from "react";
import { motion } from "framer-motion";
import { FunctionComponent, SVGProps } from "react";

// Importaciones internas
import "../styles/globals.css";
import Parallax from "@/components/parallax";
import CardComponent from "@/components/cards";
import Servicesin from "@/components/serviciosin";
import { ShieldIcon, ClockIcon, TruckIcon } from "@/components/icons";
import Contact from "@/components/Contact";
import Clients from "@/components/clients";


type Seccion1 = {
  id: number;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

const seccion1: Seccion1[] = [
  {
    id: 1,
    icon: ShieldIcon,
    title: "Calidad Asegurada",
    text: "Respaldamos nuestro trabajo con una garantía líder en la industria y materiales premium.",
  },
  {
    id: 2,
    icon: ClockIcon,
    title: "Más de 25 años de experiencia",
    text: "Decadas de experiencia en restauración de muebles y artesanía y tapicería.",
  },
  {
    id: 3,
    icon: TruckIcon,
    title: "Servicio a domicilio",
    text: "Disfruta de nuestro exclusivo servicio a domicilio: llevamos la magia de la tapicería directamente a tu hogar u oficina. ",
  }
  
];

function Homepage() {
  return (
    <article
      className="h-full -mt-16 bg-no-repeat"
      style={{ backgroundImage: 'url("fondo.jpg")'}}
      rel="preload"
    >
      {/* PANTALLA PRINCIPAL */}
      <Parallax>
        <section className="h-screen bg-transparent grid place-items-center bg-cover bg-center px-5 sm:px-10 md:px-16 lg:px-24">
          <motion.h2
            animate={{ opacity: 1 }}
            className="text-5xl md:text-5xl lg:text-7xl text-center grid place-items-center font-bold text-white gap-5 w-4/5"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Maestros Tapiceros, tapicería y restauración de muebles en Madrid
            <strong className="text-balance text-lg sm:text-xl md:text-2xl font-normal w-full sm:w-4/5">
              Ofrecemos servicios de tapicería y fabricación de muebles de alta
              calidad para renovar y embellecer sus espacios.
            </strong>
            <motion.button
              className="bg-[#202020] text-white hover:text-[#d9d9d9] font-semibold py-3 px-6 sm:py-6 sm:px-8 rounded text-lg sm:text-xl mt-6"
              onClick={() => {
                const contactSection = document.querySelector("#form");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              Contáctanos
            </motion.button>
          </motion.h2>
        </section>

        {/* SECCION 1 - CONTENT 1 */}
        <section className="h-auto rounded-sm bg-[#fff] flex flex-col px-10 sm:px-16 md:px-24 lg:px-32 xl:px-44 py-12 items-center justify-start">
          <motion.h2
            animate={{ opacity: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl text-center grid place-items-center font-bold text-cafe gap-5 w-full sm:w-4/5"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Por qué elegirnos?
          </motion.h2>
          <motion.h3
            animate={{ opacity: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-center grid place-items-center text-cafe gap-5 w-full sm:w-4/5 mt-5"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tu visión, nuestra misión: creamos tapicería que refleja tu estilo
            único.
          </motion.h3>

          <motion.div
            animate={{ opacity: 1 }}
            className="flex flex-col sm:flex-row items-center py-7 justify-evenly mt-10 gap-7 w-full h-auto"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {seccion1.map((seccion) => (
              <motion.div
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center gap-5 text-center p-5 bg-beigecard rounded-2xl w-full sm:w-72 md:w-96 h-[300px]"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={seccion.id}
              >
                <seccion.icon className="text-cafe"/>
                <h2 className="text-2xl font-bold text-cafe w-11/12">
                  {seccion.title}
                </h2>
                <p className="text-cafeclaro w-3/4">{seccion.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-center p-5 mt-10 sm:mt-4 w-full bg-beigecard rounded-2xl h-auto">
            <div className="w-full sm:w-2/4 p-4 flex flex-col items-start justify-start h-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cafe py-5 px-2 text-start">
                Algo de nosotros
              </h2>
              <p className="text-cafeclaro text-start sm:text-start text-xl sm:text-2xl py-3 px-2">
                <strong>Maestros Tapiceros en Madrid</strong>, un oficio que
                comenzó como parte de nuestra tradición familiar.
                <strong>Con más de 25 años de experiencia</strong>, hemos
                perfeccionado el arte de la tapicería, eligiendo
                <strong>
                  los mejores materiales y técnicas de tapizado
                </strong>{" "}
                para lograr resultados de máxima calidad. En Maestros Tapiceros,
                transformamos y renovamos cada mueble, llenándolo de{" "}
                <strong>color y confort</strong>, y cuidando cada detalle para
                ofrecer un <strong>tapizado perfecto.</strong>
              </p>
            </div>
            <div className="w-full sm:w-2/4 h-full p-5">
              <img
                src="Sala.webp"
                alt="historia"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </section>
      </Parallax>
      <Clients />
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
      {/* SECCION 2 - CARDS */}
      <section className="bg-beigecard w-full h-auto flex flex-col items-center justify-start px-6 sm:px-10 lg:px-18 xl:px-16 py-10">
        <motion.h2
          animate={{ opacity: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-cafe gap-5 w-11/12 sm:w-4/5 mt-5"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transformaciones que hablan por sí mismas
        </motion.h2>
        <motion.h3
          animate={{ opacity: 1 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-cafe gap-5 w-11/12 sm:w-4/5 mt-5 mb-8"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Inspiración para tu próximo proyecto: observa la calidad de nuestro
          trabajo.
        </motion.h3>
        <CardComponent />
      </section>
      {/* FORMULARIO DE CONTACTO */}
      <Contact />
    </article>
  );
}

export default Homepage;
