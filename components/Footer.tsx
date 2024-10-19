import Link from "next/link"
import { Button } from "@nextui-org/button"
import { Facebook, Instagram, Twitter, Phone, Mail, Clock, X } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F5E6D3] text-[#8B4513]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Tapicería Elegante</h3>
            <p className="text-sm">Transformamos tus muebles con estilo y calidad desde 1990.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Inicio</Link></li>
              <li><Link href="#" className="hover:underline">Servicios</Link></li>
              <li><Link href="#" className="hover:underline">Galería</Link></li>
              <li><Link href="#" className="hover:underline">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:underline">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Horario de Atención</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><Clock size={16} className="mr-2" /> Lunes - Viernes: 9:00 - 18:00</li>
              <li className="flex items-center"><Clock size={16} className="mr-2" /> Sábado: 10:00 - 14:00</li>
              <li className="flex items-center"><Clock size={16} className="mr-2" /> Domingo: Cerrado</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contáctanos</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@tapiceriaelegante.com" className="hover:underline">
                  info@tapiceriaelegante.com
                </a>
              </li>
            </ul>
            <Button className="mt-4 bg-[#8B4513] text-white hover:bg-[#6e3a0f]">
              Solicitar Presupuesto
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-[#8B4513] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 Tapicería Elegante. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-[#8B4513] hover:text-black">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-[#8B4513] hover:text-black">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-[#8B4513] hover:text-black">
              <X size={20} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}