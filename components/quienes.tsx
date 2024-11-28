import { Star, Timer, Trophy, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function QuienesCards() {
    return (
        <div>
            <section className="bg-beigecard py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-cafe mb-6">
                                Maestros Tapiceros
                            </h1>
                            <p className="text-[#6B5744] text-lg leading-relaxed mb-8">
                                Nos sentimos orgullosos de ser una empresa familiar que lleva más de 25 años perfeccionando el arte de la tapicería. Lo que comenzó como una tradición transmitida de generación en generación, se ha convertido en un negocio que combina experiencia, pasión y dedicación para ofrecer un servicio de calidad inigualable.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <Timer className="w-8 h-8 text-cafe" />
                                    <div>
                                        <p className="font-bold text-cafe">25 Años</p>
                                        <p className="text-[#6B5744]">de Experiencia</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Star className="w-8 h-8 text-cafe" />
                                    <div>
                                        <p className="font-bold text-cafe">100%</p>
                                        <p className="text-[#6B5744]">Satisfacción</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="w-8 h-8 text-cafe" />
                                    <div>
                                        <p className="font-bold text-cafe">Miles</p>
                                        <p className="text-[#6B5744]">de Clientes</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Trophy className="w-8 h-8 text-cafe" />
                                    <div>
                                        <p className="font-bold text-cafe">Calidad</p>
                                        <p className="text-[#6B5744]">Garantizada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <Image
                            width={400}
                            height={400}
                                src="/FOTOS/Sillon-azul-blanco.jpg"
                                alt="Tapicería artesanal"
                                className="rounded-lg hover:-translate-y-2 transition-transform duration-300 h-48 w-full object-cover"
                            />
                            <Image
                            width={400}
                            height={400}
                                src="/FOTOS/Sofa-blanco-cliente.jpeg"
                                alt="Detalle de tapizado"
                                className="rounded-lg hover:-translate-y-2 transition-transform duration-300 h-48 w-full object-cover"
                            />
                            <Image
                            width={400}
                            height={400}
                                src="/FOTOS/Sofa-mostaza-s.jpeg"
                                alt="Proceso de tapizado"
                                className="rounded-lg hover:-translate-y-2 transition-transform duration-300 h-48 w-full object-cover"
                            />
                            <Image
                            width={400}
                            height={400}
                                src="/FOTOS/Sofa-gris-s.jpeg"
                                alt="Taller de tapicería"
                                className="rounded-lg hover:-translate-y-2 transition-transform duration-300 h-48 w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Image
                            width={400}
                            height={400}
                                src="/FOTOS/Puertas.jpg"
                                alt="Proceso artesanal"
                                className="rounded-lg hover:-translate-y-2 transition-transform duration-300 h-64 w-full object-cover"
                            />
                            <Image
                            width={400}
                            height={400}
                                src="/FOTOS/Pasillo.jpg"
                                alt="Materiales premium"
                                className="rounded-lg hover:-translate-y-2 transition-transform duration-300 h-64 w-full object-cover"
                            />
                            <Image
                            width={500}
                            height={500}
                                src="/FOTOS/Sofa-sillones-blancos.jpeg"
                                alt="Diseños personalizados"
                                className="rounded-lg hover:-translate-y-2 transition-transform duration-300 h-64 w-full object-cover col-span-2"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-cafe mb-6">
                                Experiencia y Calidad
                            </h2>
                            <p className="text-[#6B5744] text-lg leading-relaxed mb-6">
                                En Maestros Tapiceros, nos especializamos en trabajar con los mejores materiales del mercado, seleccionados cuidadosamente para garantizar durabilidad, comodidad y un acabado impecable. Nuestro compromiso es ofrecer resultados que superen las expectativas de nuestros clientes, combinando técnicas de tapizado avanzadas y tradicionales, adaptándonos a las necesidades y preferencias de cada proyecto.
                            </p>
                            <p className="text-[#6B5744] text-lg leading-relaxed">
                                A lo largo de los años, hemos trabajado tanto para clientes particulares como para empresas, ofreciendo soluciones a medida que se adaptan a cualquier necesidad. Nos apasiona transformar cada mueble antiguo en algo completamente nuevo y funcional, sin perder su esencia original.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-beigecard py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-cafe mb-6">
                                Nuestra Pasión por la Innovación
                            </h2>
                            <p className="text-[#6B5744] text-lg leading-relaxed mb-6">
                                Esa pasión por la innovación es lo que nos motiva a seguir mejorando día a día. Confíe en nosotros y deje que su mobiliario hable por usted. ¡Estamos aquí para transformar sus ideas en realidad!
                            </p>
                            <p className="text-[#6B5744] text-lg leading-relaxed">
                                Cada proyecto es una nueva oportunidad para demostrar nuestra experiencia y compromiso con la excelencia. Nos enorgullece ver cómo cada pieza cobra nueva vida bajo nuestras manos expertas, manteniendo siempre los más altos estándares de calidad.
                            </p>
                        </div>
                        <div className="md:w-3/4 h-[400px]">
                            <video
                                src="/FOTOS/Avionvideo.mp4"
                                className="w-full h-[400px]  object-cover rounded-xl"
                                autoPlay
                                loop
                                muted
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}