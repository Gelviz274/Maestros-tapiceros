import Link from "next/link";
import React from "react";

export default function Politica() {
  return (
    <div className="w-screen-lg mx-auto px-16 md:px-44 py-8 bg-beigecard">
      <h1 className="text-4xl font-bold text-center mb-8">
        Política de Privacidad de Maestros Tapiceros
      </h1>
      <p className="text-lg mb-4">
        En Maestros Tapiceros nos comprometemos a proteger tu privacidad y a
        cumplir con la legislación vigente en materia de protección de datos
        personales. Esta Política de Privacidad explica cómo recopilamos, usamos
        y compartimos tus datos personales según el Reglamento General de
        Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos y
        Garantía de los Derechos Digitales (LOPDGDD).
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Datos Recogidos</h2>
        <p className="text-lg">
          Recopilamos los siguientes datos personales para poder ofrecerte
          nuestros servicios:
        </p>
        <ul className="list-inside list-disc ml-6">
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Teléfono de contacto</li>
          <li>Dirección IP (recopilada de forma automática)</li>
          <li>
            Datos relacionados con tu uso de nuestro sitio web, como cookies
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Finalidad del Tratamiento
        </h2>
        <p className="text-lg">
          Los datos que recopilamos son utilizados para los siguientes fines:
        </p>
        <ul className="list-inside list-disc ml-6">
          <li>Gestionar y responder consultas y solicitudes.</li>
          <li>Enviar información sobre nuestros productos y servicios.</li>
          <li>
            Mejorar la experiencia del usuario en el sitio web mediante la
            personalización.
          </li>
          <li>Cumplir con nuestras obligaciones legales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Base Jurídica para el Tratamiento
        </h2>
        <p className="text-lg">
          El tratamiento de tus datos personales se basa en las siguientes bases
          legales:
        </p>
        <ul className="list-inside list-disc ml-6">
          <li>
            El consentimiento explícito que nos otorgas al enviarnos formularios
            o aceptar cookies.
          </li>
          <li>
            La ejecución de un contrato en caso de que realices una compra o
            contratación de nuestros servicios.
          </li>
          <li>
            El cumplimiento de obligaciones legales por parte de Maestros
            Tapiceros.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Compartición de Datos
        </h2>
        <p className="text-lg">
          No compartimos tus datos personales con terceros, salvo en los
          siguientes casos:
        </p>
        <ul className="list-inside list-disc ml-6">
          <li>
            Proveedores de servicios necesarios para la operatividad de nuestro
            sitio web (p. ej. proveedores de hosting, servicios de marketing y
            análisis).
          </li>
          <li>
            Cuando sea necesario para cumplir con una obligación legal o para
            proteger nuestros derechos legales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Conservación de los Datos
        </h2>
        <p className="text-lg">
          Conservaremos tus datos personales solo el tiempo necesario para
          cumplir con las finalidades mencionadas, o hasta que solicites la
          supresión de los mismos, conforme a tu derecho al olvido. Los datos
          relacionados con transacciones serán conservados durante el tiempo
          exigido por la legislación fiscal.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Derechos del Usuario</h2>
        <p className="text-lg">
          Como usuario, tienes los siguientes derechos en relación con tus datos
          personales:
        </p>
        <ul className="list-inside list-disc ml-6">
          <li>Derecho a acceder a tus datos personales.</li>
          <li>Derecho a rectificar datos incorrectos o incompletos.</li>
          <li>
            Derecho a solicitar la supresión de tus datos (derecho al olvido).
          </li>
          <li>
            Derecho a oponerte al tratamiento de tus datos o a su limitación.
          </li>
          <li>Derecho a la portabilidad de tus datos.</li>
        </ul>
        <p className="text-lg mt-2">
          Para ejercer estos derechos, puedes contactar con nosotros en:
          <strong>
            <Link
              href="mailto:info@maestrostapiceros.com"
              className="hover:text-cafehover text-cafe"
            >
              info@maestrostapiceros.com
            </Link>
          </strong>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Seguridad de los Datos
        </h2>
        <p className="text-lg">
          Implementamos medidas técnicas y organizativas adecuadas para proteger
          tus datos personales contra accesos no autorizados, alteraciones,
          divulgación o destrucción de los mismos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Uso de Cookies</h2>
        <p className="text-lg">
          Utilizamos cookies para mejorar tu experiencia de navegación. Puedes
          gestionar tus preferencias de cookies a través de nuestro banner de
          cookies o en la sección correspondiente de nuestra página web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          9. Modificaciones a la Política de Privacidad
        </h2>
        <p className="text-lg">
          Nos reservamos el derecho de modificar esta Política de Privacidad en
          cualquier momento. Cualquier cambio será publicado en esta página, y
          la fecha de la última actualización será indicada al final del
          documento.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
        <p className="text-lg">
          Si tienes alguna duda o pregunta sobre esta Política de Privacidad,
          puedes ponerte en contacto con nosotros a través de:
        </p>
        <ul className="list-inside list-disc ml-6">
          <li>
            Email:{" "}
            <strong>
              <Link
                href="mailto:info@maestrostapiceros.com"
                className="hover:text-cafehover text-cafehover"
              >
                info@maestrostapiceros.com
              </Link>
            </strong>
          </li>
          <li>
            Dirección física: Calle Canteras, local 8 28694 Madrid, MADRID
          </li>
        </ul>
      </section>

      <footer className="text-center text-sm mt-8">
        <p>Última actualización: Noviembre 2024</p>
      </footer>
    </div>
  );
}
