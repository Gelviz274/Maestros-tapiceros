"use client";
import React, { useState } from "react"; // Importación de React
import { handleForm } from "@/app/action"; // Importación local
import { TelefonoIcon, ClockIcon, LocationBorder, MailBorder, UserIcon } from "@/components/icons"; // Componentes de iconos locales
import GoogleMap from "@/components/mapsgoogle"; // Componente de mapa local
import { motion } from "framer-motion"; // Librería externa
import Link from "next/link"; // Librería externa


function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  // Función para manejar el envío del formulario
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevenimos la acción predeterminada

    // Recoger los datos del formulario como FormData
    const formData = new FormData(event.target as HTMLFormElement);

    try {
      // Llamar a handleForm pasando el FormData
      await handleForm(formData);
      setShowAlert(true); // Mostrar la alerta
      setTimeout(() => setShowAlert(false), 3000); // Ocultar la alerta después de 3 segundos
    } catch (error) {
      return null
    }
  };

  return (
    <div
      className="bg-beigecard w-full h-auto flex flex-col items-center justify-start px-6 sm:px-10 lg:px-20 xl:px-16 py-10"
      id="form"
    >
      {showAlert && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          ¡Pronto nos contactaremos contigo!.
        </div> 
      )}

      <motion.h2
        animate={{ opacity: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-cafe gap-5 w-11/12 sm:w-4/5 mt-5"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        ¿Listo para transformar tus espacios?
      </motion.h2>
      <motion.h3
        animate={{ opacity: 1 }}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-cafe gap-5 w-11/12 sm:w-4/5 mt-5 mb-8"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Déjanos tus datos y nos pondremos en contacto para hablar de cómo
        podemos hacer realidad tus proyectos.
      </motion.h3>

      <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
        {/* Información de contacto */}
        <div className="flex flex-col gap-8 w-full lg:w-2/5 p-5">
          <ul className="flex flex-col gap-6">
            <li className="flex items-center gap-3">
              <TelefonoIcon className="w-6 h-6 text-cafe" />
              <div>
                <h2 className="text-lg font-bold text-cafe">Teléfono</h2>
                <Link
                  className="hover:text-cafe text-zinc-600"
                  href="tel:641388422"
                >
                  641 388 422
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <ClockIcon className="w-6 h-6 text-cafe" />
              <div>
                <h2 className="text-lg font-bold text-cafe">Horario</h2>
                <p className="text-zinc-600">Lunes a Domingo 08:00 - 20:00</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <MailBorder className="w-6 h-6 text-cafe" />
              <div>
                <h2 className="text-lg font-bold text-cafe">
                  Correo electrónico
                </h2>
                <Link
                  aria-label="Enviar correo electrónico a info@maestrostapiceros.com"
                  className="hover:text-cafe text-zinc-600"
                  href="mailto:info@maestrostapiceros.com"
                >
                  info@maestrostapiceros.com
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <LocationBorder className="w-6 h-6 text-cafe" />
              <div>
                <h2 className="text-lg font-bold text-cafe">Ubicación</h2>
                <p className="text-zinc-600">
                  Calle Canteras, local 8 28694 Madrid, MADRID
                </p>
              </div>
            </li>
          </ul>
          <div className="w-full">
            <GoogleMap />
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-3/5">
          <form
            onSubmit={handleFormSubmit} // Usamos la nueva función para manejar el envío
            className="space-y-6 bg-white shadow-md rounded-lg px-6 sm:px-8 py-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  type="text"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MailBorder className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  id="email"
                  name="email"
                  placeholder="tu@example.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <TelefonoIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  id="phone"
                  name="phone"
                  placeholder="123 456 789"
                  type="tel"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows={4}
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  id="terms"
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 flex text-sm text-gray-700"
                >
                  Acepto la{" "}
                  <Link href="/politica-de-privacidad">
                    <p className="text-blue-500 ml-1 mr-1 hover:underline">
                      política de privacidad
                    </p>
                  </Link>{" "}
                  y{" "}
                  <Link href="/terminos-de-uso">
                    <p className="text-blue-500 ml-1 mr-1 hover:underline">
                      términos de uso
                    </p>
                  </Link>
                  <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-cafeclaro  text-white font-medium rounded-lg hover:bg-cafe focus:outline-none"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
