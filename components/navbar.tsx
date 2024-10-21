"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";
import { MuebleIcon, DoorIcon, ChevronDown, BarcoIcon, CarIcon, AvionIcon, TelephoneIcon } from "@/components/icons";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  // ELEMENTOS PARA EL MENU DE NAVEGACIÓN EN CELULARES // 
  const menuItems = [
    "Inicio",
    "Servicios",
    "Sobre nosotros",
    "Contacto",
  ];


  return (
    <div className="W-full z-50">
      <div className="bg-beige flex justify-around items-center text-cafe h-10 font-bold ">
        <h3>Llamanos al:
          <Link href="tel:641388422"
            className="hover:text-cafehover text-cafe ml-1 items-center">
            641 388 422
            <TelephoneIcon />
          </Link>
        </h3>
        <h3>
          <Link href="mailto:info@maestrostapiceros.com"
            className="hover:text-cafehover text-cafe">
            info@maestrostapiceros.com
          </Link>
        </h3>
      </div>
      <Navbar
        shouldHideOnScroll
        className="bg-white flex min-h-36 w-full justify-around items-center"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >

        <div className="flex justify-evenly items-center w-full">
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/Logo-HD.jpeg"
                width={150}
                height={150}
                className="cursor-pointer"
                loading="eager"
                alt="Logo Maestros Tapiceros"
              />
            </Link>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-6 font-bold text-cafe" >
            <NavbarItem>
              <Link className="font-bold text-cafe hover:text-cafe_hover text-large" href="/">
                Inicio
              </Link>
            </NavbarItem>



            <Dropdown className="!bg-white">
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent font-bold text-cafe hover:text-cafe_hover text-large"
                    endContent={<ChevronDown />}
                    radius="sm"
                    variant="light"
                  >
                    Servicios
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px] bg-white p-0"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="Muebles"
                  description="Tapizamos todo tipo de muebles, desde sofás y sillones hasta cabeceros y básicas."
                  startContent={<MuebleIcon />}
                  className=" hover:focus:bg-beige "
                  href="/servicios"
                >
                  <span className="font-bold">
                    Muebles
                  </span>
                </DropdownItem>
                <DropdownItem
                  key="Tapizado de puertas"
                  description="El tapizado de puertas es una excelente manera de renovar y personalizar cualquier puerta, ya sea interior o exterior."
                  startContent={<DoorIcon />}
                  className=" hover:focus:bg-beige "
                  href="/servicios"
                >
                  <span className="font-bold">
                    Puertas
                  </span>
                </DropdownItem>
                <DropdownItem
                  key="Sillas de coches"
                  description="Ofrecemos un servicio especializado en el tapizado de sillas de coches, garantizando que nuestros materiales cumplen con las normativas específicas del sector automotriz."
                  startContent={<CarIcon />}
                  className=" hover:focus:bg-beige "
                  href="/servicios"
                >
                  <span className="font-bold">
                    Sillas de coches
                  </span>
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Contamos con la experiencia necesaria para el tapizado de sillas de aviación, utilizando materiales de alta calidad que cumplen con las exigentes normativas del sector aeronáutico."
                  startContent={<AvionIcon />}
                  className=" hover:focus:bg-beige "
                  href="/servicios"
                >
                  <span className="font-bold">
                    Sillas de aviación
                  </span>
                </DropdownItem>
                <DropdownItem
                  key="Barcos"
                  description="Ofrecemos servicios de tapicería especializados para barcos, utilizando materiales marinos resistentes al agua y al sol."
                  startContent={<BarcoIcon />}
                  className=" hover:focus:bg-beige "
                  href="/servicios"
                >
                  <span className="font-bold">
                    Barcos
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>




            <NavbarItem>
              <Link className="font-bold text-cafe text-lg" href={siteConfig.navItems[1].href}>
                Sobre nosotros
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link className="font-bold text-cafe text-large" href={siteConfig.navItems[3].href}>
                Contacto
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} className="bg-cafe text-beige text-large" href="#" variant="flat" >
                Cotizar ahora
              </Button>
            </NavbarItem>
          </NavbarContent>
        </div>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>




        <NavbarMenu className=" gap-2 mt-28">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full justify-end text-cafe font-bold text-large"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>

  );
}