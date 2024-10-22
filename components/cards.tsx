import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
    id: number;
    subtitle: string;
    title: string;
    imageUrl: string;
    description: string;
};

const items: Item[] = [
    { id: 1, subtitle: "Tapicería", title: "Sofá Moderno", imageUrl: "/PRUEBAS/MUEBLE.png", description: "Un hermoso sofá moderno tapizado a mano." },
    { id: 2, subtitle: "Restauración", title: "Silla Vintage", imageUrl: "/Mesita.webp", description: "Silla restaurada con estilo vintage, perfecta para cualquier espacio." },
    { id: 3, subtitle: "Tapicería", title: "Mueble Moderno", imageUrl: "/PRUEBAS/tapiceria-bog.jpeg", description: "Un hermoso mueble moderno tapizado a mano." },
    { id: 4, subtitle: "Tapicería", title: "Sofá", imageUrl: "/FOTO.webp", description: "Un hermoso sofá moderno tapizado a mano." },
];

const CardComponent = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {items.map(item => (
                <motion.div
                    key={item.id}
                    layoutId={item.id.toString()}
                    onClick={() => setSelectedId(item.id)}
                    className="rounded-lg overflow-hidden cursor-pointer shadow-lg bg-white w-full"
                    transition={{ type: "spring", stiffness: 200, damping: 30 }} 
                >
                    <motion.img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <motion.h5 className="text-sm text-gray-600">{item.subtitle}</motion.h5>
                        <motion.h2 className="text-lg font-bold">{item.title}</motion.h2>
                    </div>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId.toString()}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                        transition={{ duration: 0.3 }} 
                    >
                        <motion.div
                            className="bg-white rounded-lg overflow-hidden shadow-lg p-6 w-full md:w-1/2 lg:w-1/3"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 150, damping: 30 }} // Suaviza la animación de entrada y salida
                        >
                            {items.find(item => item.id === selectedId) && (
                                <>
                                    <motion.img
                                        src={items.find(item => item.id === selectedId)!.imageUrl}
                                        alt={items.find(item => item.id === selectedId)!.title}
                                        className="w-full h-72 object-cover mb-4 rounded-2xl"
                                    />
                                    <motion.h5 className="text-sm text-gray-600">
                                        {items.find(item => item.id === selectedId)!.subtitle}
                                    </motion.h5>
                                    <motion.h2 className="text-lg font-bold">
                                        {items.find(item => item.id === selectedId)!.title}
                                    </motion.h2>
                                    <motion.p className="mt-2 text-gray-700">
                                        {items.find(item => item.id === selectedId)!.description}
                                    </motion.p>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="mt-4 bg-cafe text-beige rounded px-4 py-2"
                                        onClick={() => setSelectedId(null)}
                                    >
                                        Cerrar
                                    </motion.button>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CardComponent;
