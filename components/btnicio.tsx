"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Asegúrate de tener el icono correctamente configurado

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
          className="fixed bottom-6 left-6 sm:bottom-10 sm:left-10 bg-cafe text-beigecard hover:text-[#d9d9d9] font-semibold p-3 sm:p-4 rounded-full shadow-lg flex items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver al inicio"
        >
          <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
