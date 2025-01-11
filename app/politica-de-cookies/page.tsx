import React from "react";
import Link from "next/link";
const CookiePolicy = () => {
  return (
    <>
      <div className="w-full mx-auto py-8 bg-beigecard px-16 md:px-48">
        <h1 className="text-3xl font-bold text-center mb-4">
          Política de Cookies
        </h1>
        <p className="text-lg mb-4">
          En <strong>Maestros Tapiceros</strong>, respetamos tu privacidad y nos
          comprometemos a proteger tu información personal. Esta Política de
          Cookies explica cómo usamos las cookies en nuestro sitio web.
        </p>

        <h2 className="text-2xl font-semibold mb-2">¿Qué son las cookies?</h2>
        <p className="text-lg mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo cuando visitas un sitio web. Son utilizadas para almacenar
          información que ayuda a mejorar tu experiencia de navegación.
        </p>

        <h2 className="text-2xl font-semibold mb-2">¿Por qué usamos cookies?</h2>
        <p className="text-lg mb-4">
          En nuestro sitio web utilizamos cookies para recordar tus preferencias y
          garantizar que puedas disfrutar de una navegación fluida. En particular,
          utilizamos cookies para:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Recordar tu consentimiento para el uso de cookies.</li>
          <li>Mejorar la experiencia de usuario al navegar por nuestro sitio.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          Tipos de cookies que utilizamos
        </h2>
        <p className="text-lg mb-4">
          Solo utilizamos cookies necesarias para recordar tu consentimiento y
          garantizar el funcionamiento correcto de este sitio web.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          ¿Cómo puedes gestionar las cookies?
        </h2>
        <p className="text-lg mb-4">
          Puedes gestionar las cookies a través de la configuración de tu
          navegador.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          ¿Qué sucede si no aceptas las cookies?
        </h2>
        <p className="text-lg mb-4">
          Si no aceptas el uso de cookies, no se almacenará ninguna información en
          tu dispositivo. Sin embargo, algunas funcionalidades del sitio pueden no
          funcionar correctamente.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Cambios en nuestra Política de Cookies
        </h2>
        <p className="text-lg mb-4">
          Podemos actualizar nuestra Política de Cookies de vez en cuando.
          Cualquier cambio será publicado en esta página. Te recomendamos que
          revises esta política periódicamente para estar al tanto de cómo usamos
          las cookies.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
        <p className="text-lg mb-4">
          Si tienes alguna pregunta o inquietud sobre nuestra Política de Cookies,
          no dudes en contactarnos en
          <Link
            href="mailto:info@maestrostapiceros.com"
            className="hover:text-cafehover text-cafehover font-bold ml-1"
          >
            info@maestrostapiceros.com
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default CookiePolicy;
