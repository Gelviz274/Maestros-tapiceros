import React from 'react'
import { FunctionComponent, SVGProps } from 'react'
import {
    HomeIcon,
    BeedIcon,
    CouchIcon,
    BoatIcon,
    SillonIcon,
    CarroIcon,
    stars
} from '@/components/icons';

type Props = {
    id: number
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    tittle: string
    description: string
}

const services: Props[] = [
    { id: 1, icon: HomeIcon, tittle: "Tapizado de paredes y puertas", description: "Trasforme sus espacios con elegantes acabados tapizados" },
    { id: 2, icon: BeedIcon, tittle: "Cabeceros y basicamas", description: "Diseños personalizados para su dormitorio" },
    { id: 3, icon: CouchIcon, tittle: "Sofás y sillas", description: "Restauración y tapizado de todo tipo de mobiliario" },
    { id: 4, icon: CarroIcon, tittle: " Tapizado automotriz y aviación ", description: "Especialistas en interiores de vehiculos y aeronaves" },
    { id: 5, icon: BoatIcon, tittle: " Náuticas y toldos", description: "Soluciones para embarcaviones y exteriores" },
    { id: 6, icon: stars, tittle: " Proyectos Especiales", description: "Cualquier necesidad de tapicería que pueda imaginar" },
]

function Servicesin() {
    return (
        <div className='w-full p-5 mt-10'>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map(service => (
                    <li className='p-4 bg-beigecard rounded-lg list-none h-[200px]' key={service.id}>
                        <div className='flex items-start justify-center flex-col gap-4 h-full'>
                            <service.icon className='w-10 h-10 text-cafe' />
                            <div>
                                <h2 className='text-xl font-bold'>{service.tittle}</h2>
                                <p className='text-sm'>{service.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>


    )
}

export default Servicesin