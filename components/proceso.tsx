import React from 'react';
import { ClipboardCheck, MessageSquare, Ruler, Settings, Sparkles, Timer } from 'lucide-react';

const steps = [
    {
        icon: <MessageSquare />,
        title: "Consulta Inicial",
        description: "Evaluamos tus necesidades y requerimientos específicos"
    },
    {
        icon: <Ruler />,
        title: "Medición y Presupuesto",
        description: "Mediciones precisas y presupuesto detallado sin compromiso"
    },
    {
        icon: <ClipboardCheck />,
        title: "Selección de Materiales",
        description: "Asesoramiento en la elección de telas y materiales"
    },
    {
        icon: <Settings />,
        title: "Producción",
        description: "Ejecución precisa con dedicación al detalle"
    },
    {
        icon: <Sparkles />,
        title: "Control de Calidad",
        description: "Verificación minuciosa de altos estándares"
    },
    {
        icon: <Timer />,
        title: "Entrega",
        description: "Entrega e instalación profesional puntual"
    }
];

export function WorkProcess() {
    return (
        <section className="py-24 px-6 sm:px-12 md:px-16 lg:px-44 bg-[#1A1A1A] relative overflow-hidden">
            {/* Background Pattern */}
                

            <div className="container mx-auto px-4 relative">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">Nuestro Proceso</h2>
                    <p className="text-gray-400 text-lg">
                        Un método refinado que garantiza resultados excepcionales
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-beige rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        {React.cloneElement(step.icon, {
                                            className: "w-6 h-6 text-cafe"
                                        })}
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0">
                                    <span className="text-beige text-sm font-medium mb-2 block">
                                        Paso {index + 1}
                                    </span>
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
