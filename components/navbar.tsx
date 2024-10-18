"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function App() {
  return (
    <Navbar shouldHideOnScroll className="bg-white min-h-36 w-full" >
      <div className="flex justify-between items-center w-full">
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

        <NavbarContent className="hidden sm:flex gap-6  font-bold text-cafe" >
          <NavbarItem>
            <Link className="font-bold text-cafe hover:text-cafe_hover" href="/">
              INICIO
            </Link>
          </NavbarItem>



          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent font-bold text-cafe hover:text-cafe_hover" 
                  endContent="A"
                  radius="sm"
                  variant="light"
                >
                  PRODUCTOS
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent="A"
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent="A"
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent="A"
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent="A"
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent="A"
              >
                Tapiceria
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>




          <NavbarItem>
            <Link className="font-bold text-cafe" href="/quienes-somos">
              SOBRE NOSOTROS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="font-bold text-cafe" href="#">
              CONTACTO
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} className="bg-cafe text-beige" href="#" variant="flat" >
              Contactanos
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>

  );
}