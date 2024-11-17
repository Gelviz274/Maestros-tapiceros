import React from "react";

export default function Usepage() {
  return (
    <div className=" mx-auto px-44 py-8 bg-beigecard w-full ">
      <h1 className="text-3xl font-bold text-center mb-6">
        Términos y Condiciones de Uso
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          1. Información del Responsable
        </h2>
        <p className="text-gray-600 mt-2">
          <strong>Nombre de la empresa:</strong> Maestros Tapiceros
          <br />
          <strong>Dirección:</strong> Calle Canteras, local 8, 28694 Madrid,
          MADRID
          <br />
          <strong>Correo electrónico:</strong>{" "}
          <a href="mailto:info@maestrostapiceros.com" className="text-blue-600">
            info@maestrostapiceros.com
          </a>
          <br />
          <strong>Teléfono:</strong> +34 641 388 422
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          2. Objeto del Contrato
        </h2>
        <p className="text-gray-600 mt-2">
          Los presentes Términos y Condiciones tienen como objetivo regular el
          uso y acceso a la información y servicios proporcionados en este sitio
          web por parte de los usuarios. Los servicios mostrados en esta página
          corresponden a los servicios de tapicería ofrecidos por nuestra
          empresa.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          3. Condiciones de Uso
        </h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>
            El usuario se compromete a utilizar el sitio web únicamente para
            fines informativos y relacionados con los servicios que ofrecemos.
          </li>
          <li>
            El usuario no podrá realizar ningún acto ilícito en relación con el
            uso del sitio web, incluidos, entre otros, el uso para fraudes,
            virus informáticos o cualquier otro tipo de actividad que pueda
            afectar a la seguridad del sitio web.
          </li>
          <li>
            La información contenida en el sitio web está destinada únicamente
            para consulta. Los usuarios no podrán modificar, copiar, distribuir
            o reproducir el contenido del sitio sin autorización expresa.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          4. Propiedad Intelectual
        </h2>
        <p className="text-gray-600 mt-2">
          Todos los contenidos, incluyendo pero no limitados a textos, imágenes,
          logotipos, gráficos, y el diseño del sitio web, son propiedad de
          Maestros Tapiceros o de sus respectivos propietarios. El uso no
          autorizado de estos contenidos podrá ser considerado como una
          infracción de los derechos de propiedad intelectual.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          5. Responsabilidad
        </h2>
        <p className="text-gray-600 mt-2">
          El propietario del sitio web no se hace responsable de cualquier daño
          o perjuicio que pudiera derivarse del uso o mal uso de la información
          contenida en este sitio, así como de la interrupción o fallos en el
          servicio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          6. Política de Privacidad
        </h2>
        <p className="text-gray-600 mt-2">
          Maestros Tapiceros respeta la privacidad de sus usuarios y se
          compromete a proteger la información personal proporcionada. La
          recolección y uso de los datos personales se realiza conforme a
          nuestra{" "}
          <a href="/politica-de-privacidad" className="text-blue-600">
            Política de Privacidad
          </a>
          , la cual está disponible en todo momento para su consulta.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          7. Modificaciones de los Términos y Condiciones
        </h2>
        <p className="text-gray-600 mt-2">
          Maestros Tapiceros se reserva el derecho a modificar estos Términos y
          Condiciones en cualquier momento. Cualquier cambio será publicado en
          esta misma página, y el uso continuado del sitio web implicará la
          aceptación de dichos cambios.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          8. Ley Aplicable y Jurisdicción
        </h2>
        <p className="text-gray-600 mt-2">
          Estos Términos y Condiciones se regirán por la legislación española.
          Cualquier disputa derivada del uso del sitio web será resuelta en los
          tribunales competentes de Madrid, España.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          9. Uso de Cookies
        </h2>
        <p className="text-gray-600 mt-2">
          Este sitio web utiliza cookies para mejorar la experiencia de
          navegación. Para más información sobre el uso de cookies, consulta
          nuestra{" "}
          <a href="/politica-de-cookies" className="text-blue-600">
            Política de Cookies
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          10. Otros Aspectos Legales
        </h2>
        <p className="text-gray-600 mt-2">
          Este sitio puede contener enlaces a sitios web de terceros. No somos
          responsables del contenido ni de las políticas de privacidad de estos
          sitios.
        </p>
      </section>
    </div>
  );
}
