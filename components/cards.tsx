import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  id: number;
  title: string;
  imageUrl: string;
};

const items: Item[] = [
  { id: 1, title: "Sofá Moderno", imageUrl: "/FOTOS/Sofa-blanco-cliente.jpeg" },
  { id: 2, title: "Silla Vintage", imageUrl: "/FOTOS/Sofa-rojo-p.jpeg" },
  { id: 3, title: "Mueble Moderno", imageUrl: "/FOTOS/Sofa-mostaza-s.jpeg" },
  { id: 4, title: "Sofá", imageUrl: "/FOTOS/Sofa-gris-s.jpeg" },
  { id: 5, title: "Balcón", imageUrl: "/FOTOS/balcon.jpg" },
  { id: 6, title: "Foto pasillo", imageUrl: "/FOTOS/Pasillo.jpg" },
  { id: 7, title: "Sofás de cuero", imageUrl: "/FOTOS/Sofas-cuero.jpeg" },
  { id: 8, title: "Sofá amarillo", imageUrl: "/FOTOS/Puertas.jpg" },
  { id: 9, title: "Mueble corazones", imageUrl: "/FOTOS/Corazones.jpeg" },
  { id: 10, title: "Sillón con mesa", imageUrl: "/FOTOS/blanco.jpeg" },
  {
    id: 11,
    title: "Silla de cuero y mesa de cuero",
    imageUrl: "/FOTOS/Silla-mesa-cuero.jpeg",
  },
  { id: 12, title: "Sillón Azul", imageUrl: "/FOTOS/Sillon-azul.jpeg" },
];

const CardComponent = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);

  const selectedItem = items.find((item) => item.id === selectedId);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId !== null) {
      const currentIndex = items.findIndex((item) => item.id === selectedId);
      const nextIndex = (currentIndex + 1) % items.length;
      setDirection(1);
      setSelectedId(items[nextIndex].id);
    }
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId !== null) {
      const currentIndex = items.findIndex((item) => item.id === selectedId);
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      setDirection(-1);
      setSelectedId(items[prevIndex].id);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full relative p-5">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id.toString()}
          onClick={() => setSelectedId(item.id)}
          className="rounded-lg overflow-hidden cursor-pointer shadow-lg bg-white"
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <motion.img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-64 sm:h-72 object-cover"
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
                className="absolute top-4 right-4 bg-gray-200 rounded-full px-6 py-4 hover:bg-gray-300 z-20"
                whileHover={{ scale: 1.1 }}
              >
                ✕
              </motion.button>

              <motion.button
                onClick={handlePrevious}
                className="absolute left-4 sm:left-10 text-lg sm:text-2xl bg-gray-200 rounded-full p-4 hover:bg-gray-300 z-20"
                whileHover={{ scale: 1.1 }}
              >
                {"<"}
              </motion.button>

              <motion.button
                onClick={handleNext}
                className="absolute right-4 sm:right-10 text-lg sm:text-2xl bg-gray-200 rounded-full p-4 hover:bg-gray-300 z-20"
                whileHover={{ scale: 1.1 }}
              >
                {">"}
              </motion.button>

              <motion.div
                className="relative bg-transparent rounded-lg overflow-hidden shadow-lg w-11/12 h-5/6 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence initial={false} custom={direction}>
                  {selectedId !== null && (
                    <motion.div
                      key={selectedId}
                      className="absolute inset-0"
                      initial={{ x: direction > 0 ? "100%" : "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: direction > 0 ? "-100%" : "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 40,
                      }}
                    >
                      <motion.img
                        src={selectedItem.imageUrl}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardComponent;
