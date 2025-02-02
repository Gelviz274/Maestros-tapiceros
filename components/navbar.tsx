"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";
import { ChevronDown, TelephoneIcon, Mail } from "@/components/icons";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // ELEMENTOS PARA EL MENU DE NAVEGACIÓN EN CELULARES //
  const menuItems = [
    { name: "Inicio", href: "/" }, // Página principal
    { name: "Servicios", href: "/servicios" }, // Página de servicios
    { name: "Sobre Nosotros", href: "/quienes-somos" }, // Página sobre nosotros
    { name: "Contacto", href: "/contacto" }, // Página de contacto
  ];

  return (
    <div className="W-full z-50">
      <div className="bg-beigecard flex flex-wrap justify-center sm:justify-around items-center text-cafe h-auto font-bold px-4 py-1">
        {/* Teléfono */}
        <div className="flex items-center mb-1 sm:mb-0">
          <h3 className="flex items-center text-center sm:text-left text-sm sm:text-base">
            Llámanos al:
            <Link
              href="tel:640128457"
              className="hover:text-cafehover text-cafe ml-1 flex items-center"
              aria-label="Teléfono de contacto: 640 128 457"
            >
              640 128 457
              <TelephoneIcon className="ml-1 w-4 h-4" />
            </Link>
          </h3>
        </div>
        {/* Correo */}
        <div className="flex items-center">
          <h3 className="flex items-center text-center sm:text-left text-sm sm:text-base">
            <Link
              href="mailto:info@maestrostapiceros.com"
              className="hover:text-cafehover text-cafe flex items-center"
              aria-label="Correo electrónico: info@maestrostapiceros.com"
            >
              info@maestrostapiceros.com
              <Mail className="ml-1 w-4 h-4" />
            </Link>
          </h3>
        </div>
      </div>

      <Navbar
        shouldHideOnScroll
        className="bg-white flex min-h-36 w-full justify-around items-center"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={false}
      >
        <div className="flex justify-evenly items-center gap-10 w-full">
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/Logo-HD.jpeg"
                width={200}
                height={200}
                className="cursor-pointer w-36 h-auto"
                loading="eager"
                alt="Logo Maestros Tapiceros"
                priority
              />
            </Link>
          </NavbarBrand>

          <NavbarContent className="hidden lg:flex gap-10 font-bold text-cafe">
            <NavbarItem>
              <Link
                className="font-bold text-cafe hover:text-cafe_hover text-large"
                href="/"
              >
                Inicio
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                className="font-bold text-cafe hover:text-cafe_hover text-large"
                href="/servicios"
              >
                Servicios
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                className="font-bold text-cafe text-lg"
                href={siteConfig.navItems[1].href}
              >
                Sobre nosotros
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                className="font-bold text-cafe text-large"
                href={siteConfig.navItems[3].href}
              >
                Contacto
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
              <Button
                as={Link}
                className="bg-cafe text-beige text-large"
                href="#form"
                variant="flat"
              >
                Cotizar ahora
              </Button>
            </NavbarItem>
          </NavbarContent>
        </div>
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          />
        </NavbarContent>

        <NavbarMenu
          className={`gap-25 mt-28 p-8 bg-beigecard ${isMenuOpen ? "block" : "hidden"} md:block`}
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="bg-blue">
              <Link
                className="
          w-full 
          flex 
          gap-10
          justify-start
          text-cafe hover:text-cafehover 
          font-semibold 
          text-lg lg:text-xl 
          px-4 py-4 
          transition duration-300 
          ease-in-out 
          border-b-2 border-cafeclaro hover:border-cafehover
        "
                href={item.href}
                onPress={() => {
                  setTimeout(() => {
                    setIsMenuOpen(false); // Cierra el menú después de 2 segundos
                  }, 1000);
                }}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
