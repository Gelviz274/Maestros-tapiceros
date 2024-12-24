// Paquetes externos
import clsx from "clsx";
import { Metadata, Viewport } from "next";

// Proveedores
import { Providers } from "./providers";

// Componentes
import Footer from "@/components/Footer";
import Header from "@/components/navbar";
import ScrollToTopButton from "@/components/btnicio";
import WhatsappButton from "@/components/whatsappbutton";
import CookieConsent from "@/components/cookies";

// Configuración del sitio y fuentes
import { siteConfig } from "@/config/site";
import { RobotoFont } from "@/config/fonts";

// Estilos globales
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    // Servicios de Maestros Tapiceros
    "Tapizado de sofás y sillones",
    "Tapizado de sillas",
    "Tapizado de cabeceros y basicamas",
    "Restauración de muebles antiguos",
    "Reparación de tapicería de puertas",
    "Tapicería automotriz",
    "Tapicería náutica y toldos",
    "Tapicería para muebles de hogar",
    "Tapicería de alta gama a medida",
    "Proyectos especiales de tapicería",
    "Reparación de estructuras de muebles",
    "Renovación de interiores de automóviles",
    "Fabricación de muebles tapizados personalizados",
    "Reparación de tapicería en cuero y tela",
    "Restauración de muebles vintage",
    "Tapizado de Muebles en piel",
    "Tapizado de Sillas en piel",
    "Restauración de Muebles en piel",
    "Restauración de Sillas en piel",

    // Palabras Clave Generales
    "Tapicería en Madrid",
    "Tapiceria a domicilio",
    "Tapiceros profesionales en Madrid",
    "Restauración de muebles en Madrid",
    "Tapicería de muebles antiguos",
    "Tapicería de alta calidad en Madrid",
    "Tapiceros artesanales",
    "Servicios de tapizado a medida",
    "Tapicería cerca de mí",

    // Barrios de Madrid
    "Tapicería en Salamanca",
    "Tapicería en Chamberí",
    "Tapicería en Chamartín",
    "Tapicería en Retiro",
    "Tapicería en Tetuán",
    "Tapicería en Latina",
    "Tapicería en Carabanchel",
    "Tapicería en Arganzuela",
    "Tapicería en Usera",
    "Tapicería en Vallecas",
    "Tapicería en Moncloa-Aravaca",
    "Tapicería en Hortaleza",
    "Tapicería en Vicálvaro",
    "Tapicería en Barajas",
    "Tapicería en Fuencarral-El Pardo",
    "Tapicería en Villa de Vallecas",
    "Tapicería en San Blas-Canillejas",
    "Tapiceria en guadilla del monte",
    "Tapiceria en las Rosas",
    "Tapiceria en Gran Via",
    "Tapiceria en Madrid Centro",
    // Ciudades y alrededores de Madrid
    "Tapicería en Alcalá de Henares",
    "Tapicería en Getafe",
    "Tapicería en Leganés",
    "Tapicería en Fuenlabrada",
    "Tapicería en Alcorcón",
    "Tapicería en Móstoles",
    "Tapicería en Coslada",
    "Tapicería en Pozuelo de Alarcón",
    "Tapicería en Boadilla del Monte",
    "Tapicería en Las Rozas",
    "Tapicería en Torrejón de Ardoz",
    "Tapicería en Majadahonda",
    "Tapicería en San Sebastián de los Reyes",
    "Tapicería en Rivas-Vaciamadrid",
    "Tapicería en Alcobendas",
    "Tapicería en Villaviciosa de Odón"
  ],

};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "max-screen bg-white montserrat antialiased",
          RobotoFont.className,
        )}
        rel="preload"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex h-screen flex-col">
            <Header />
            <main className="container mx-auto max-w-full flex-grow bg-w">
              {children}
            </main>
            <CookieConsent />
            <Footer />
          </div>
          <div>
            <ScrollToTopButton />
            <WhatsappButton
              message="¡Hola! Quisiera más información."
              phoneNumber="34641388422"
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}
