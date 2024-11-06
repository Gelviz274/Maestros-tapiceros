import { Montserrat } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';
import { Comfortaa } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';
import { Merriweather } from 'next/font/google';
import { Roboto } from 'next/font/google';


export const RobotoFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
})

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
})


export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const garamont = Cormorant_Garamond({
  weight: ['400', '600', '700'], // Puedes ajustar los pesos según tus necesidades
  subsets: ['latin'], // Añade los conjuntos de caracteres necesarios
});
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],  // Especifica los pesos que vas a usar
});