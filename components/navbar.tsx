"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";
import {
  Armchair,
  Car,
  Ship,
  Bed,
  DoorOpen,
  Lightbulb,
} from 'lucide-react';
import {
  ChevronDown,
  TelephoneIcon,
  Mail,
} from "@/components/icons";

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
              href="tel:641388422"
              className="hover:text-cafehover text-cafe ml-1 flex items-center"
              aria-label="Teléfono de contacto: 641 388 422"
            >
              641 388 422
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
                aria-label="Dropdown Menu"
                className="w-[340px] bg-white p-0"
                itemClasses={{
                  base: "gap-4",
                }}
              >



                <DropdownItem
                  key="Muebles"
                  description="Ofrecemos restauración y tapizados de todo tipo, desde piezas clásicas hasta contemporáneas, utilizando materiales de alta calidad para recuperar su belleza y funcionalidad original."
                  startContent={<Armchair className="h-7 w-7" />}
                  className=" hover:focus:bg-beige "
                  onClick={() => {
                    window.location.href = "/servicios#muebles";
                  }}
                  textValue="Muebles"
                >
                  <span className="font-bold">
                    Muebles, sofás y sillas
                  </span>
                </DropdownItem>





                <DropdownItem
                  key="Tapizado de puertas"
                  description="Transformamos puertas con tapizados elegantes y personalizados, brindando un acabado de lujo y, opcionalmente, aislamiento acústico y térmico para mayor confort y estilo."
                  startContent={<DoorOpen />}
                  className="hover:focus:bg-beige"
                  textValue="Puertas"
                  onClick={() => {
                    window.location.href = "/servicios#puertas";
                  }}
                >
                  <span className="font-bold">
                    Puertas
                  </span>
                </DropdownItem>



                <DropdownItem
                  key="Cabeceros y basicamas"
                  description="Diseñamos cabeceros y basicamas a medida, adaptados a cualquier estilo de decoración, desde elegantes capitoné hasta minimalistas, para un toque único en su dormitorio."
                  startContent={<Bed />}
                  className=" hover:focus:bg-beige "
                  onClick={() => {
                    window.location.href = "/servicios#cabeceros";
                  }}
                  textValue="Cabeceros y basicamas"
                >
                  <span className="font-bold">
                    Cabeceros y basicamas
                  </span>
                </DropdownItem>


                <DropdownItem
                  key="Barcos"
                  description="Proporcionamos soluciones de tapicería para embarcaciones y exteriores, con materiales resistentes al agua y rayos UV, perfectos para ambientes marinos y exteriores."
                  startContent={<Ship />}
                  className=" hover:focus:bg-beige "
                  onClick={() => {
                    window.location.href = "/servicios#nauticas";
                  }}
                  textValue="Barcos"
                >
                  <span className="font-bold">
                    Náuticas y toldos
                  </span>
                </DropdownItem>

                <DropdownItem
                  key="Sillas de coches"
                  description="Ofrecemos tapizado personalizado para automóviles con materiales resistentes y de alta calidad. Renovamos asientos, puertas y detalles interiores, adaptándolos al estilo y necesidades del cliente."
                  startContent={<Car />}
                  className=" hover:focus:bg-beige "
                  onClick={() => {
                    window.location.href = "/servicios#tapizadoAutomotriz";
                  }}
                  textValue="Sillas de coches"
                >
                  <span className="font-bold">
                    Sillas de coches
                  </span>
                </DropdownItem>

                <DropdownItem
                  key="Proyectos"
                  description="Realizamos proyectos personalizados para necesidades únicas, colaborando en la creación de mobiliario especial, instalaciones artísticas y otras soluciones innovadoras."
                  startContent={<Lightbulb />}
                  className=" hover:focus:bg-beige "
                  onClick={() => {
                    window.location.href = "/servicios#proyectosEspeciales";
                  }}
                  textValue="Proyectos Especiales"
                >
                  <span className="font-bold">
                    Proyectos especiales
                  </span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>




            <NavbarItem>
              <Link className="font-bold text-cafe text-lg"
                href={siteConfig.navItems[1].href}>
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
              <Button as={Link} className="bg-cafe text-beige text-large" href="#form" variant="flat" >
                Cotizar ahora
              </Button>
            </NavbarItem>
          </NavbarContent>
        </div>
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} />
        </NavbarContent>




        <NavbarMenu className={`gap-25 mt-28 p-8 bg-beigecard ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
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
                onClick={() => {
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