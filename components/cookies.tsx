"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Función para gestionar cookies
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
};

export default function CookieConsent() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  // Comprobar si ya se aceptaron las cookies
  useEffect(() => {
    const consent = getCookie("cookiesAccepted");
    if (consent === "true") {
      setCookiesAccepted(true);
    }
  }, []);

  // Función para aceptar las cookies
  const acceptCookies = () => {
    setCookie("cookiesAccepted", "true", 365); // Guardar el consentimiento de cookies
    setCookiesAccepted(true); // Ocultar el banner
  };

  return (
    <AnimatePresence>
      {!cookiesAccepted && (
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Animación inicial (fuera de la pantalla)
          animate={{ opacity: 1, y: 0 }} // Animación al mostrarse
          exit={{ opacity: 0, y: 50 }} // Animación al ocultarse
          transition={{ duration: 0.5, ease: "easeOut" }} // Duración y suavidad de la animación
          className="fixed bottom-4 left-5  w-3/5 md:w-2/5  bg-black  text-white p-4 flex flex-col  md:flex-row gap-1 justify-evenly items-center rounded-2xl shadow-lg "
        >
          <div className="flex flex-col sm:flex-row items-center ml-2">
            <p className="text-sm sm:text-base">
              Usamos cookies para mejorar tu experiencia en nuestro sitio. Al
              continuar navegando, aceptas nuestra{" "}
              <a href="/politica-de-cookies" className="underline">
                Política de Cookies
              </a>
              .
            </p>
          </div>

          {/* Botón de aceptar */}
          <motion.button
            onClick={acceptCookies}
            className="bg-gray-500/30 hover:bg-gray-500/70 text-white font-medium py-2 px-6 rounded-lg ml-1 text-sm sm:text-base transition duration-200 ease-in-out shadow-md"
          >
            Aceptar
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


