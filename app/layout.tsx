// app/layout.tsx
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import ScrollToTopButton from "@/components/btnicio";
import { siteConfig } from "@/config/site";
import WhatsappButton from "@/components/whatsappbutton";
import CookieConsent from "@/components/cookies";


// FUENTES //
import { RobotoFont } from "@/config/fonts";
import Header from "@/components/navbar";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
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
          RobotoFont.className
        )}
        rel="preload"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            {/* Envolvemos el contenido con LoadingWrapper */}
            <div className="relative flex flex-col h-screen">
              <Header />
              <main className="container mx-auto max-w-full flex-grow bg-w">
                {children}
              </main>

              <CookieConsent />
              <Footer />
            </div>
            <div>
              {/* Otros componentes o contenido */}
              <ScrollToTopButton />
              <WhatsappButton phoneNumber="34641388422" message="¡Hola! Quisiera más información." />
            </div>
          
        </Providers>
      </body>
    </html>
  );
}
