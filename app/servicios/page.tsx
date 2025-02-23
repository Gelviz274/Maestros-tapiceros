"use client";
"useContext";
import React from "react";
import Head from "./head";
import {
  Armchair,
  Car,
  Ship,
  Bed,
  DoorOpen,
  Lightbulb,
} from "lucide-react";
import { WorkProcess } from "@/components/proceso";
import { ServiceDetail } from "@/components/Servicedetail";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

const services = [
  {
    id: "muebles",
    icon: <Armchair className="w-8 h-8" />,
    title: "Muebles, sofás y sillas",
    description: "Restauración y tapizado de todo tipo de muebles",
    longDescription:
      "Especializados en la restauración y tapizado de muebles clásicos y modernos. Utilizamos materiales de primera calidad y técnicas artesanales para devolver la vida a sus piezas más preciadas. Nuestro equipo de expertos evalúa cada pieza individualmente para garantizar el mejor tratamiento y resultado final.",
    image: "/FOTOS/sofa_blanco.jpeg",
  },
  {
    id: "puertas",
    icon: <DoorOpen className="w-8 h-8" />,
    title: "Puertas",
    description: "Tapizado de puertas con acabados premium",
    longDescription:
      "Transformamos sus puertas con tapizados elegantes y duraderos. Ofrecemos una amplia gama de telas y materiales resistentes, ideales para diferentes estilos de decoración. Nuestro servicio incluye aislamiento acústico y térmico para mayor confort en su hogar u oficina.",
    image: "/FOTOS/Puertas.jpg",
  },
  {
    id: "cabeceros",
    icon: <Bed className="w-8 h-8" />,
    title: "Cabeceros y Basecamas",
    description: "Diseños personalizados a medida",
    longDescription:
      "Creamos cabeceros y basecamas únicos que se adaptan perfectamente a su espacio y estilo. Trabajamos con una variedad de diseños, desde clásicos capitoné hasta modernos minimalistas. Cada pieza es fabricada a medida, garantizando un ajuste perfecto y acabado excepcional.",
    image: "/FOTOS/cabecero.jpeg",
  },
  {
    id: "nauticas",
    icon: <Ship className="w-8 h-8" />,
    title: "Náuticas y Toldos",
    description: "Soluciones especializadas para exterior",
    longDescription:
      "Ofrecemos soluciones específicas para embarcaciones y espacios exteriores. Utilizamos materiales resistentes al agua y rayos UV, especialmente seleccionados para soportar condiciones marinas y climatológicas adversas. Nuestros toldos combinan funcionalidad con estética, proporcionando protección y estilo.",
    image: "/botesblancos.png",
  },
  {
    id: "tapizadoAutomotriz",
    icon: <Car className="w-8 h-8" />,
    title: "Tapizado Automotriz y Aviación",
    description: "Tapizado profesional para vehículos",
    longDescription:
      "Especialistas en tapizado de interiores para automóviles y aeronaves. Realizamos trabajos de restauración y personalización, utilizando materiales específicos para cada tipo de vehículo. Nuestro servicio incluye asientos, paneles de puertas, techos y detalles en cuero o tela.",
    image: "/FOTOS/Avion.jpg",
  },
  {
    id: "proyectosEspeciales",
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Proyectos Especiales",
    description: "Soluciones personalizadas únicas",
    longDescription:
      "Desarrollamos proyectos especiales y únicos según sus necesidades específicas. Desde instalaciones artísticas hasta mobiliario comercial personalizado, nuestro equipo está preparado para enfrentar cualquier desafío creativo. Trabajamos en estrecha colaboración con diseñadores y arquitectos.",
    image: "/FOTOS/Salaplantas.jpg",
  },
];

function Servicios() {
  return (
    <>
    <Head />
    <div className="h-full">
      <div
        className="flex flex-col min-h-screen -mt-20"
        style={{
          backgroundImage: 'url("sofablanco.webp")',
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
            className="text-4xl md:text-5xl lg:text-7xl text-center grid place-items-center font-bold text-[#444444] gap-5 w-4/5"
          >
            Nuestra Pasión por la Tapicería en Madrid
            <strong className="text-balance text-xl md:text-2xl font-normal mt-2 w-full">
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
              className="bg-[#202020] text-white hover:text-[#d9d9d9] font-semibold py-4 px-8 rounded text-xl"
            >
              Contactanos
            </motion.button>
          </motion.h2>
        </section>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-white px-4 md:px-16 lg:px-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl text-center grid place-items-center font-bold text-cafe gap-5 w-full mb-5"
            >
              Nuestros Servicios
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-center grid place-items-center text-cafe gap-5 w-full mt-5"
            >
              Soluciones especializadas para cada necesidad de tapicería
            </motion.h3>
          </div>

          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <ServiceDetail
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  longDescription={service.longDescription}
                  image={service.image}
                  isReversed={index % 2 === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Process Section */}
      <WorkProcess />
      <Contact />
    </div>
    </>
  );
}

export default Servicios;
