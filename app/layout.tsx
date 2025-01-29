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
