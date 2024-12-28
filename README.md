# Maestros Tapiceros

 ![Logo-HD](https://github.com/user-attachments/assets/98385df5-a24a-465c-904a-2bf08ebeef01)
<!-- Cambia la ruta si tienes un logo -->

**Maestros Tapiceros** es un sitio web diseñado para ofrecer información sobre los servicios de tapicería de alta calidad. El objetivo es proporcionar a los clientes una experiencia intuitiva, visualmente atractiva y optimizada para buscadores.

## Características

- **Páginas**: Inicio, Servicios, Sobre Nosotros y Contacto.
- **Servicios**: Tapicería de muebles, puertas, cabeceros y basicamas, sofás y sillas, náuticas y toldos, tapizado automotriz, y proyectos especiales.
- **Formulario de contacto**: Recopila datos de los clientes y permite aceptación de términos y verificación de "No soy un robot".
- **Diseño optimizado para SEO**: Mejora la visibilidad en motores de búsqueda.
- **Responsive Design**: Compatible con dispositivos móviles y de escritorio.

## Tecnologías Utilizadas

- **Next.js**: Framework principal para el desarrollo web.
- **TypeScript**: Lenguaje para garantizar la calidad del código.
- **TailwindCSS**: Estilización rápida y eficiente.
- **NextUI**: Componentes UI elegantes y reutilizables.
- **Framer Motion**: Animaciones fluidas y atractivas.
- **Git**: Control de versiones y colaboración.

## Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/usuario/maestros-tapiceros.git
   cd maestros-tapiceros
   ```

2. **Instalar dependencias**:
   Asegúrate de tener Node.js instalado, luego ejecuta:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env.local` y añade las siguientes variables:
   ```env
   NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY=tu_clave_publica
   NEXT_PUBLIC_API_URL=tu_url_de_la_api
   ```

4. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```
   Accede al sitio en [http://localhost:3000](http://localhost:3000).

5. **Construcción para producción**:
   ```bash
   npm run build
   npm start
   ```

## Estructura del Proyecto

```
/app
  /components   # Componentes reutilizables
  /services     # Lógica de negocio
  /styles       # Estilos globales
  /pages        # Páginas principales
  /public       # Recursos estáticos (imágenes, logos, etc.)
```

## Equipo

- **Líder del proyecto**: Nombre del usuario
- **Colaboradores**: Amiga del usuario
- **Empresa**: Maestros Tapiceros

## Contacto

Si tienes preguntas o necesitas soporte, puedes contactarnos a través del [formulario de contacto](https://maestrostapiceros.com/contacto).

---

¡Gracias por visitar **Maestros Tapiceros**!
