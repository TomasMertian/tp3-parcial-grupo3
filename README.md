# Trabajo practico Nro 3 | Grupo 3

## 📌 Descripción del Proyecto
Aula virtual desarrollada como SPA (Single Page Application) con HTML, CSS y JavaScript vanilla. Simula el aula virtual de una universidad, permitiendo al alumno navegar entre secciones sin recargar la página.

## 🚀 Tecnologías Utilizadas
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Herramientas:** Git, GitHub

## 💡 Cómo pensamos el proyecto

Decidimos estructurar el proyecto como una **SPA (Single Page Application)** para que la navegación se sintiera fluida, sin recargas. Con JavaScript Vanilla esto se resuelve con un único `index.html`: el menú y el contenedor son estáticos, y el contenido de cada sección se inyecta dinámicamente dentro del `#contenedor-principal` manipulando el DOM.

Para el cambio de vistas, centralizamos toda la lógica en la función `navegar(seccion)` usando un `switch` en lugar de múltiples `if/else`, por tres razones:

- Con 6 vistas distintas, el `switch` queda visualmente más limpio y es más fácil de mantener.
- Evalúa el string recibido y dispara directamente la función de renderizado correspondiente (`cargarInicio()`, `cargarCursos()`, etc.).
- El caso `default` actúa como manejo de errores: si la sección no existe, inyecta un mensaje de "Error 404" para que la interfaz nunca quede en blanco.

## 🏗️ Arquitectura y Lógica de Navegación (JavaScript)

* **Inyección Dinámica:** El contenido de cada sección se carga dentro del `#contenedor-principal` mediante funciones específicas `cargarPagina()`.
* **Ruteo Centralizado:** La función `navegar(seccion)` utiliza un `switch` para renderizar la vista solicitada y actualiza visualmente la pestaña activa en el menú.
* **Menú Colapsable:** Un evento alterna la clase `.cerrado` en el `body` para desplegar o retraer el menú lateral.
* **Modularidad (Flujo de trabajo):** La separación en funciones independientes permite que los distintos miembros del equipo editen el HTML de su sección asignada sin generar conflictos de código.

## 📁 Estructura del Repositorio
```text
📂 /
 ┣ 📂 css/             # Estilos generales
 ┃ ┗ 📂 componentes/   # Imágenes estáticas
 ┣ 📂 js/              # Scripts principales (navegación, interactividad)
 ┗ 📜 index.html       # Archivo principal (Contenedor SPA)
```

 ## 👥 Integrantes y Contribuciones - Grupo 3

### Tomás Mertian: 