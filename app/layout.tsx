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
   // Palabras Clave Generales
  "Tapicería",
  "Servicios de tapicería",
  "Tapicería a medida",
  "Tapicería de alta calidad",
  "Tapicería de muebles antiguos",
  "Tapicería para sofás y sillones",
  "Tapicería para sillas",
  "Tapicería de cabeceros y basicamas",
  "Restauración de muebles antiguos",
  "Reparación de muebles tapizados",
  "Reparación de tapicería en cuero y tela",
  "Fabricación de muebles tapizados personalizados",
  "Proyectos especiales de tapicería",
  "Restauración de muebles vintage",
  "Servicios de tapicería artesanal",
  "Reparación de estructuras de muebles",
  "Tapicería en piel",
  "Tapicería para el hogar",
  "Tapicería para interiores de automóviles",
  "Tapicería náutica y toldos",

  // Palabras Clave Geolocalizadas (Madrid y alrededores)
  "Tapicería en Madrid",
  "Tapiceros profesionales en Madrid",
  "Tapicería de alta calidad en Madrid",
  "Restauración de muebles en Madrid",
  "Tapicería a domicilio en Madrid",
  "Tapicería cerca de mí",
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
  "Tapicería en San Blas-Canillejas",
  "Tapicería en Gran Vía",
  "Tapicería en Madrid Centro",

  // Palabras Clave para Ciudades Cercanas
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
  "Tapicería en Villaviciosa de Odón",

  // Long-Tail Keywords
  "Restauración de muebles tapizados antiguos",
  "Tapicería artesanal de lujo",
  "Reparación de sofás en cuero",
  "Tapicería moderna para oficinas",
  "Tapizado de cabeceros personalizados",
  "Tapicería para barcos y yates",
  "Reparación de tapicería de automóviles de alta gama",
  "Restauración de muebles de madera antiguos",
  "Tapicería de sillas en tela y piel",
  "Reparación de tapicería de puertas interiores"
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Maestros Tapiceros",
              "url": "https://www.maestrostapicerosmadrid.es", 
              "logo": "https://www.maestrostapicerosmadrid.es/Logo-HD.jpeg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-641388422",
                "contactType": "Customer Service",
                "areaServed": "ES", 
                "availableLanguage": "Spanish",
              },
              "sameAs": [
                "https://www.facebook.com/maestrostapiceros",
                "https://www.instagram.com/maestrostapiceros"
              ],
              "description": siteConfig.description,
            }),
          }}
        />

      </head>
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
