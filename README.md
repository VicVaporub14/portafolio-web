# Portafolio Web

Este proyecto es un portafolio web desarrollado con **Next.js**, diseñado para mostrar habilidades, proyectos y experiencia profesional de manera moderna y atractiva. El objetivo principal es proporcionar una plataforma personal donde los visitantes puedan explorar información sobre el desarrollador, sus proyectos destacados, y formas de contacto.

## Características Principales

1. **Diseño Responsivo y Temas Oscuro/Claro**:
   - El diseño está optimizado para dispositivos móviles, tabletas y escritorios.
   - Soporte para modo oscuro y claro, con transiciones suaves entre ambos temas.

2. **Secciones del Portafolio**:
   - **Inicio**: Introducción breve y atractiva con un diseño limpio.
   - **Sobre mí**: Información sobre el desarrollador, incluyendo habilidades técnicas y experiencia.
   - **Proyectos**: Una galería de proyectos destacados con imágenes, descripciones y enlaces para más detalles.
   - **Servicios**: Lista de servicios ofrecidos, con íconos representativos y descripciones.
   - **Contacto**: Un formulario funcional para que los visitantes puedan enviar mensajes directamente.

3. **Formulario de Contacto Funcional**:
   - Implementado con animaciones de **Framer Motion** para una experiencia interactiva.
   - Envío de datos a través de la API de Web3Forms para manejar solicitudes de contacto.
   - Validación de campos obligatorios como nombre, correo electrónico y mensaje.

4. **Animaciones Suaves**:
   - Uso de **Framer Motion** para animaciones de entrada y salida en elementos clave, como formularios, botones y secciones.

5. **Optimización de Recursos**:
   - Uso de imágenes optimizadas con el componente `Image` de **Next.js**.
   - Fuentes personalizadas cargadas mediante [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para mejorar el rendimiento.

6. **Tecnologías Utilizadas**:
   - **Frontend**: React.js, Next.js, Tailwind CSS.
   - **Backend**: Integración con servicios externos como Web3Forms.
   - **Animaciones**: Framer Motion.
   - **Gestión de Estado**: React Hooks (`useState`).

## Cómo Funciona el Formulario de Contacto

El formulario de contacto permite a los usuarios enviar mensajes directamente desde el sitio web. Los datos se envían a través de la API de Web3Forms, y el estado del envío se maneja dinámicamente para proporcionar retroalimentación al usuario (por ejemplo, "Enviando..." o "Formulario enviado con éxito").

#### Flujo del Formulario:
1. El usuario completa los campos obligatorios: nombre, correo electrónico y mensaje.
2. Al enviar el formulario, los datos se procesan y se envían a la API de Web3Forms.
3. Si el envío es exitoso, el formulario se reinicia y se muestra un mensaje de éxito.
4. En caso de error, se muestra un mensaje con información relevante.

## Cómo Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd portafolio-web
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el proyecto en acción.

## Despliegue

El proyecto está optimizado para ser desplegado en **Vercel**, la plataforma oficial para aplicaciones Next.js. Sigue las instrucciones en la sección [Deploy on Vercel](#deploy-on-vercel) para más detalles.

## Créditos

Este portafolio fue desarrollado por **Victor Hugo Soto**, un apasionado de la tecnología con experiencia en desarrollo frontend y backend. Las tecnologías utilizadas incluyen React, Next.js, Node.js, Tailwind CSS, y más.

¡Espero que este portafolio sea una ventana a mis habilidades y proyectos, y que inspire confianza en mis capacidades como desarrollador!
