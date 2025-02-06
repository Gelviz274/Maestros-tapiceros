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
    "tapicería profesional",
    "tapicería a domicilio",
    "tapiceros expertos",
    "tapicero en ciudad",
    "servicio de tapicería",
    "reparación de muebles tapizados",
    "restauración de muebles",
    "tapizado de muebles",
    "tapizado de sofás",
    "tapizado de sillas",
    "tapizado de sillones",
    "tapizado de cabeceros",
    "tapizado de cojines",
    "tapicería de salas",
    "restauración de sofás",
    "renovar muebles tapizados",
    "cambio de tapicería de muebles",
    "tapizado de autos",
    "tapizado de interiores de autos",
    "restauración de asientos de auto",
    "reparación de asientos de coche",
    "tapicería para autos",
    "cambio de tapicería automotriz",
    "tapizado en cuero para autos",
    "restauración de interiores de vehículos",
    "tapizado de barcos",
    "tapicería para lanchas",
    "tapicería náutica",
    "tapizado de cojines náuticos",
    "restauración de interiores de barcos",
    "tapicería de yates",
    "tapicería marina resistente al agua",
    "tapicería para exteriores",
    "toldos para terrazas",
    "reparación de toldos",
    "tapizado de muebles de jardín",
    "cambio de lona para toldos",
    "tapicería impermeable para exteriores",
    "tapicería en ciudad",
    "tapicería profesional en ciudad",
    "tapizado de muebles en ciudad",
    "tapicero cerca de mí",
    "tapizado de autos en ciudad",
    "tapicero a domicilio en ciudad",
    "¿Cuánto cuesta tapizar un sofá?",
    "tapicero barato y de calidad",
    "empresa de tapicería confiable",
    "dónde tapizar muebles",
    "mejor tapicero en ciudad",
    "renovar sofá sin cambiarlo",
    "cómo elegir la mejor tela para tapizar muebles",
    "ventajas de tapizar un sofá en vez de comprar uno nuevo",
    "cuánto tiempo tarda el tapizado de un sofá",
    "tapicería de lujo para muebles y autos",
    "cómo limpiar y mantener muebles tapizados"
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
    <html suppressHydrationWarning lang="es">
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
                "telephone": "+34-640 128 457",
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
        <meta name="google-site-verification" content="AX7-K-qm33Ft3KfO0sttRcXhs9SqGNC0lGNvlXqcMFQ" />
        <link rel="canonical" href="https://www.maestrostapicerosmadrid.es/" />

      </head>
      <body
        className={clsx(
          "max-screen bg-white montserrat antialiased",
          RobotoFont.className
        )}
      >
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RNS65QR6FP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RNS65QR6FP');
            `,
          }}
        />
        
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex h-screen flex-col">
            <Header />
            <main className="container mx-auto max-w-full flex-grow">
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
