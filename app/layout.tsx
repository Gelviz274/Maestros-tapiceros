
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";

// FUENTES //
import { montserrat } from "@/config/fonts";
import { garamont } from "@/config/fonts";
import { comfortaa } from "@/config/fonts";
import {ebGaramond} from "@/config/fonts";

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
          "max-screen bg-beige montserrat antialiased",
          comfortaa.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Header />
            <main className="container mx-auto max-w-full flex-grow bg-beige">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
