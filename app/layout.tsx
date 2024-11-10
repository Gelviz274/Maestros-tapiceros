
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Footer  from "@/components/Footer";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import WhatsappButton from '@/components/whatsappbutton';
// FUENTES //
{/*
import { montserrat } from "@/config/fonts";
import { garamont } from "@/config/fonts";
import { comfortaa } from "@/config/fonts";
import {ebGaramond} from "@/config/fonts"; */}
import {RobotoFont} from "@/config/fonts";

import  Header  from "@/components/navbar";

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
          RobotoFont.className,
        )}
        rel="preload"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Header />
            <main className="container mx-auto max-w-full flex-grow bg-w">
              {children}
            </main>
            <Footer />
          </div>
          <div>
            {/* Otros componentes o contenido */}
            <WhatsappButton phoneNumber="34641388422" message="¡Hola! Quisiera más información." />
        </div>
        </Providers>
      </body>
    </html>
  );
}
