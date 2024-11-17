"use client";
import { Ghost, HomeIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/Button";
import { FloatingIcon } from "@/components/fantasma";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-[800px] bg-beigecard flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <FloatingIcon icon={Ghost} size={96} />

        <h1 className="text-6xl font-bold text-[#5c4033] mb-4">
          4<span className="text-cafeclaro">0</span>4
        </h1>

        <h2 className="text-3xl font-semibold text-[#6b4423] mb-6">
          Página No Encontrada
        </h2>

        <p className="text-[#6b4423] text-lg mb-8 max-w-md mx-auto">
          ¡Ups! Parece que esta página ha tomado un desvío inesperado. <br />
          <br />
          No hemos podido encontrar el contenido que buscas. Esto puede deberse
          a que el enlace es incorrecto o a que la página ha sido movida o
          eliminada.
        </p>
        <h4 className="text-[#6b4423] mb-3">
          {" "}
          Si necesitas ayuda, no dudes en{" "}
          <Link className="text-cafe font-bold underline" href="/contacto">
            contactarnos
          </Link>
          .
        </h4>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            icon={ArrowLeft}
            onClick={() => router.back()}
          >
            Volver
          </Button>

          <Button
            variant="primary"
            icon={HomeIcon}
            onClick={() => router.push("/")}
          >
            Ir al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
