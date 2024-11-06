"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Children, ReactNode, useRef } from "react";

export default function Parallax({ children }: { children: ReactNode }) {
    const target = useRef<HTMLDivElement>(null);
    const hero = Children.toArray(children)[0];
    const section = Children.toArray(children)[1];
    const { scrollYProgress } = useScroll({ target });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);



    const y = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);
    // Usar un evento para capturar los cambios en el valor de scroll


    return (
        <motion.div ref={target}>
            <motion.div
                style={{
                    y, 
                    scale,
                    opacity
                    }}>{hero}</motion.div>
            <motion.div
                style={{
                    y: -1,
                    scale: scale2
                }}>{section}</motion.div>
        </motion.div>
    );
}
