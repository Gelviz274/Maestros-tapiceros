import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
    id: number;
    title: string;
    imageUrl: string;
};

const items: Item[] = [
    { id: 1, title: "Sofá Moderno", imageUrl: "/FOTOS/Sofa-blanco-p.jpeg" },
    { id: 2, title: "Silla Vintage", imageUrl: "/FOTOS/Sofa-rojo-p.jpeg" },
    { id: 3, title: "Mueble Moderno", imageUrl: "/FOTOS/Sofa-mostaza-s.jpeg" },
    { id: 4, title: "Sofá", imageUrl: "/FOTOS/Sofa-blanco-cliente.jpeg" },
    { id: 5, title: "DASD", imageUrl: "/FOTOS/Sofa-gris-p.jpeg" },
    { id: 6, title: "JKADA", imageUrl: "/FOTOS/Sofa-negro-p1.jpeg" },
    { id: 7, title: "Sofas de cuero", imageUrl: "/FOTOS/Sofas-cuero.jpeg" },
    { id: 8, title: "Sofa amarillo", imageUrl: "/FOTOS/Sofa-amarillo-p.jpeg" },
    { id: 9, title: "Mueble corazones", imageUrl: "/FOTOS/Corazones.jpeg" },
    { id: 10, title: "Sillón con mesa", imageUrl: "/FOTOS/blanco.jpeg"},
    { id: 11, title: "Silla de cuero y mesa de cuero", imageUrl: "/FOTOS/Silla-mesa-cuero.jpeg"},
    { id: 12, title: "Sillon Azul", imageUrl: "/FOTOS/Sillon-azul.jpeg"},
];

const CardComponent = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedItem = items.find(item => item.id === selectedId);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation(); // Evita que el clic cierre la tarjeta
        if (selectedId !== null) {
            const currentIndex = items.findIndex(item => item.id === selectedId);
            const nextIndex = (currentIndex + 1) % items.length;
            setSelectedId(items[nextIndex].id);
        }
    };

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation(); // Evita que el clic cierre la tarjeta
        if (selectedId !== null) {
            const currentIndex = items.findIndex(item => item.id === selectedId);
            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            setSelectedId(items[prevIndex].id);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full relative p-5">
            {items.map(item => (
                <motion.div
                    key={item.id}
                    layoutId={item.id.toString()}
                    onClick={() => setSelectedId(item.id)}
                    className="rounded-lg overflow-hidden cursor-pointer shadow-lg bg-white w-full"
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                >
                    <motion.img src={item.imageUrl} alt={item.title} className="w-full h-72 object-cover" />
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedItem && (
                    <>
                        {/* Fondo gris con botones de cerrar y navegación */}
                        <motion.div
                            onClick={() => setSelectedId(null)} // Cierra la tarjeta solo si se hace clic fuera del modal
                            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Botón de cerrar en la esquina superior derecha del fondo gris */}
                            <motion.button
                                onClick={(e) => {
                                    e.stopPropagation(); // Evita que el clic cierre la tarjeta
                                    setSelectedId(null);
                                }}
                                className="absolute  font-bold top-4 right-4 bg-gray-200 rounded-full py-5 px-7 w-auto h-auto hover:bg-gray-300 z-20"
                                whileHover={{ scale: 1.1 }}
                            >
                                ✕
                            </motion.button>

                            {/* Botones de navegación */}
                            <motion.button
                                onClick={handlePrevious}
                                className="absolute left-4 text-3xl text-cafe bg-gray-200 rounded-full py-2 px-4 hover:bg-gray-300 z-20"
                                whileHover={{ scale: 1.1 }}
                            >
                                {"<"}
                            </motion.button>

                            <motion.button
                                onClick={handleNext}
                                className="absolute right-4 text-3xl text-cafe bg-gray-200 rounded-full py-2 px-4 hover:bg-gray-300 z-20"
                                whileHover={{ scale: 1.1 }}
                            >
                                {">"}
                            </motion.button>

                            {/* Modal de imagen centrado */}
                            <motion.div
                                className="relative bg-white flex flex-col rounded-lg overflow-hidden shadow-lg  w-full max-w-[800px]  h-full max-h-[800px] md:w-3/4 lg:w-2/3 xl:w-1/2"
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 170, damping: 30 }}
                                onClick={(e) => {
                                    e.stopPropagation(); // Evita que el clic cierre la tarjeta
                                }}
                            >
                                {/* Contenedor para el carrusel */}
                                <motion.div
                                    className="relative w-full h-full overflow-hidden"
                                    key={selectedItem.id}
                                    initial={{ x: 1000 }}
                                    animate={{ x: 0 }}
                                    exit={{ x: -1000 }}
                                    onClick={(e) => {
                                        e.stopPropagation(); // Evita que el clic cierre la tarjeta
                                    }}
                                    transition={{ type: "spring", stiffness: 170, damping: 30 }}
                                >
                                    <motion.img
                                        key={selectedItem.id} // Usamos 'key' para garantizar que la animación se active al cambiar la imagen
                                        src={selectedItem.imageUrl}
                                        alt={selectedItem.title}
                                        className="w-full h-full object-cover mb-4 rounded-t-lg"
                                    />
                                </motion.div>

                                {/*   <motion.h2 
                                className="text-lg flex items-center justify-center h-[50px] font-bold text-center mb-1"
                                initial= {{ y: 0,}}
                                >
                                    {selectedItem.title}
                                </motion.h2>
                                */}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CardComponent;
