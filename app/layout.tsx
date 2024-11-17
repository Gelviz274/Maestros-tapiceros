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
    // Tus palabras clave
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
