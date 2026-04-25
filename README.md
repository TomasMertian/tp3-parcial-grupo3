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
 ┃ ┗ 📂 componentes/   # Componentes
 ┃    ┗ 📂 img/        # Imágenes estáticas
 ┣ 📂 js/              # Scripts principales (navegación, interactividad)
 ┗ 📜 index.html       # Archivo principal (Contenedor SPA)
```

 ## 👥 Integrantes y Contribuciones - Grupo 3

## Documentación por Renata Turani, Ariadna Lavizzari y Maitena G. Surop

Nos encargamos de armar la estructura base de los archivos index.html y index.css y desarrollamos la interfaz visual del menú desplegable (sin la funcionalidad interactiva).

---

## Menú desplegable

Para el menú desplegable o barra de navegación implementamos las siguientes funcionalidades:

Usamos transiciones en el archivo index.css (0.5s) para que, cuando que a la hora de implementar el JavaScript, se pueda cerrar y abrir con un efecto suave.

```css
.menu-desplegable {
    transition: width 0.5s ease;
}

body {
    transition: padding-left 0.5s ease;
}
```

Armamos links directos para las secciones de la página: inicio, cursos, contactos, perfil, profesores y el login.

```html
<ul class="inicio">
    <li class="item-inicio">
        <a href="#" class="inicio-link pag-inicio">
        <i class="bx bx-home"></i>
        <h4>Inicio</h4>
        </a>
    </li>
</ul>
```

Creamos un botón circular (.menu-boton) que se posiciona en el borde del menú. La idea es que el usuario pueda utilizarlo para desplegar y/o minimizar el menú cuando lo desee.

```css
.menu-boton {
    position: absolute;
    top: 3.5%;
    right: -14px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
}
```

En cuanto a los efectos visuales, hicimos una funcionalidad para que cuando el usuario pase el mouse por encima de una opción, esta se mueva hacia la derecha.

```css
.inicio .inicio-link:hover {
    transform: translateX(5px);
}
```

---
### Desarrollo técnico
### Estructura con HTML

Para los botones de navegación utilizamos una lista `(<ul> y <li>)`. Decidimos desarrollarlo así ya que es la mejor forma de organizar enlaces.

```html
<ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Cursos</a></li>
</ul>
```

Además, integramos la librería Boxicons para que cada sección tenga un icono.

### Diseño con CSS:

Para el diseño declaramos la paleta de colores definida en el :root.

Utilizamos display: flex para alinear. Nos permitió centrar los iconos con el texto y que el menú se vea bien ordenado verticalmente.

```css
.menu-desplegable {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```
### Posicionamiento

Al menú le pusimos `position: fixed` para que la navegación permanezca anclada a la izquierda siempre

```css
.menu-desplegable {
    position: fixed;
    left: 0;
}
```

Al botón le pusimos `position: absolute` para ubicarlo justo en el borde del menú.

```css
.menu-boton {
    position: absolute;
    right: -14px;
}
```

Implementamos un `padding-left: 240px` en el body. Ya que como el menú está "fijo", si no poníamos ese espacio, el contenido de la plataforma se metía abajo del menú y no se veía nada.

```css
body {
    padding-left: 240px;
}
```

## Integrante: Renata Turani
### Sección “Contacto”

El objetivo de esta sección es brindar al usuario la información de contacto de la institución UTN FRBB. Opte por una interfaz dividida en dos partes: la atención presencial y la atención virtual.

---

### Desarrollo Lógico en JavaScript (script.js)

Para desarrollar esta sección, implemente HTML a través de DOM

```js
// seleccion del contenedor principal desde el DOM
const contenedor = document.getElementById('contenedor-principal');
```
`Función cargarContacto():` Al ejecutarse, accede al objeto contenedor (el `<main>` principal) y con la propiedad .innerHTML reemplaza cualquier contenido previo (el contenido de otra sección seleccionada) por el contenido de la sección “contacto”.

```js
function cargarContacto() {
contenedor.innerHTML = `
        <section class="seccion-contacto">
            <h1 class="titulo-contacto">Contactanos</h1>
        </section>
    `;
}
```

Cuando el usuario hace clic en el botón “Contacto”, se ejecuta una estructura de control `(switch)` que decide qué contenido mostrar en cada momento. El sistema reconoce que el usuario quiere ver la información de contacto y ejecuta mi función `cargarContacto()`, reemplazando el contenido actual por el de la sección Contacto.

```js
function navegar(seccion) {
    switch (seccion) {
        case 'contacto':
            cargarContacto();
            break;
    }
}

// evento click en el link contacto
linkContacto.addEventListener('click', () => navegar('contacto'));
```

---

### Diseño en CSS:

Para el diseño, utilice la paleta de colores definida en el `:root` del archivo `index.css`. Además, en ese mismo archivo importe contacto.css mediante @import .

Utilice flexbox. En el contenedor principal `(.cards-container)` use display: flex con justify-content: center, para que las cards estén siempre alineadas.

```css
.cards-container {
    display: flex;
    justify-content: center;
}
```

Apliqué la propiedad `flex-wrap: wrap`. Para que, si el menú lateral se despliega o si se accede desde un celular, las cards se acomoden una abajo de la otra automáticamente en vez de amontonarse.

Cada bloque de información se estructuró como una "card". Les asigné un `min-width: 280px` para que no pierdan su forma y un efecto de interacción; `Hover`, donde al pasar el mouse, el borde cambia de color y la card se eleva.

```css
.card-contacto {
    min-width: 280px;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.card-contacto:hover {
    transform: translateY(-5px);
}
```

y nuevamente, implemente la librería Boxicons para usar iconos representativos para cada tipo de atención (virtual y presencial)

---

## Integrante: Tomás Mertian:

### Variables globales

```js
const menu = document.querySelector(".menu-desplegable");
const boton = document.querySelector(".menu-boton");
const contenedor = document.getElementById('contenedor-principal');
```
Se seleccionan del DOM los elementos principales: el menú desplegable, el botón para abrirlo/cerrarlo, y el contenedor donde se inyecta el contenido de cada sección.

```js
const linkInicio = document.querySelector('.pag-inicio');
const linkCursos = document.querySelector('.pag-cursos');
const linkContacto = document.querySelector('.pag-contacto');
const linkPerfil = document.querySelector('.pag-perfil');
const linkProfesores = document.querySelector('.pag-profesores');
const linkLogin = document.querySelector('.pag-login');
```
Se seleccionan los seis enlaces del menú de navegación, cada uno identificado por su clase CSS correspondiente.

---

### Función `navegar(seccion)`

```js
function navegar(seccion) {
```
Recibe como parámetro un string con el nombre de la sección a la que se quiere ir.

```js
    document.querySelectorAll(".inicio-link").forEach(link => {
        link.classList.remove("activo");
    });
```
Recorre todos los enlaces del menú y les quita la clase `activo`, limpiando el estado visual anterior.

```js
    const linkActivo = document.querySelector(`.pag-${seccion}`);
    if (linkActivo) {
        linkActivo.classList.add("activo");
    }
```
Busca el enlace correspondiente a la sección recibida y, si existe, le agrega la clase `activo` para resaltarlo visualmente en el menú.

```js
    switch (seccion) {
        case 'inicio':
            cargarInicio();
            break;
        case 'cursos':
            cargarCursos();
            break;
        case 'contacto':
            cargarContacto();
            break;
        case 'perfil':
            cargarPerfil();
            break;
        case 'profesores':
            cargarProfesores();
            break;
        case 'login':
            cargarLogin();
            break;
        default:
            contenedor.innerHTML = "<h1>Error 404</h1>";
    }
}
```
Usa un `switch` para llamar a la función de carga que corresponde según la sección. Si el valor no coincide con ningún caso conocido, muestra un mensaje de error 404.

---

### Función `cargarCursos()`

```js
function cargarCursos() {
    contenedor.innerHTML = `...`
}
```
Inyecta el HTML de la sección cursos dentro del `#contenedor-principal`. El contenido se divide en dos bloques: **Mis cursos** (las materias en las que el alumno está inscripto) y **Todos los cursos** (la oferta completa de la carrera). Cada curso se muestra como una card con nombre, horario, profesor, ayudante y un botón.

El HTML inyectado tiene esta estructura:

- `.seccion-cursos` — contenedor general de toda la sección.
- `.mis-cursos` — agrupa las cards de las materias inscriptas.
- `.todos-cursos` — agrupa las cards del resto de la oferta académica.
- `.card-curso` — cada card individual con el nombre de la materia, horario, profesor, ayudante y el botón "Ver curso".
- `.separador-seccion-cursos` — un `<hr>` que divide visualmente los dos bloques.

```js
const botones = contenedor.querySelectorAll(".btn-curso");
```
Una vez inyectado el HTML, selecciona todos los botones "Ver curso" que existen dentro del contenedor.

```js
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        alert("Este curso no esta disponible actualmente");
    });
});
```
Recorre cada botón y le agrega un listener. Al hacer click, muestra un `alert` indicando que el curso no está disponible. Esto se hace después de inyectar el HTML porque antes de que `cargarCursos()` se ejecute, esos botones no existen en el DOM y no podrían ser seleccionados.

---

### Función `alternarMenu()`

```js
function alternarMenu() {
    document.body.classList.toggle("cerrado");
}
```
Agrega o quita la clase `cerrado` del `<body>`. Esto permite abrir y cerrar el menú lateral mediante CSS, sin necesidad de manipular estilos directamente desde JavaScript.

---

### Event listeners

```js
boton.addEventListener("click", alternarMenu);
```
Escucha el click sobre el botón del menú y llama a `alternarMenu` cada vez que se hace click.

```js
linkInicio.addEventListener('click',     () => navegar('inicio'));
linkCursos.addEventListener('click',     () => navegar('cursos'));
linkContacto.addEventListener('click',   () => navegar('contacto'));
linkPerfil.addEventListener('click',     () => navegar('perfil'));
linkProfesores.addEventListener('click', () => navegar('profesores'));
linkLogin.addEventListener('click',      () => navegar('login'));
```
Cada enlace del menú tiene un listener que, al hacer click, llama a `navegar()` pasando el nombre de la sección correspondiente como string.

```js
navegar('inicio');
```
Al cargar el script por primera vez, se llama directamente a `navegar('inicio')` para que la página de inicio sea la vista por defecto.

---

### Estilos del menú colapsable (CSS)

```css
.inicio .inicio-link.activo {
    background-color: var(--accent-dark); 
    color: var(--text-highlight);      
}
```
Resalta visualmente el enlace del menú correspondiente a la página activa. Cuando un enlace tiene la clase `activo`, se le aplica un color de fondo y de texto definidos por variables CSS, indicando al usuario en qué sección se encuentra.

```css
body.cerrado {
    padding-left: 56px;
}
```
Cuando el `body` tiene la clase `cerrado`, el padding izquierdo se reduce a 56px para que el contenido acompañe el achicamiento del menú.

```css
body.cerrado .menu-desplegable {
    width: 56px;
    padding-left: 0;
    padding-right: 0;
}
```
El menú lateral reduce su ancho a 56px y elimina el padding horizontal, quedando del tamaño justo para mostrar solo los iconos.

```css
body.cerrado .titulo h4,
body.cerrado .inicio-link h4 {
    display: none;
}
```
Oculta los textos de los enlaces y el título del menú cuando está cerrado, dejando visibles únicamente los iconos.

```css
body.cerrado .inicio-link {
    justify-content: center;
    height: 40px;
    width: 100%;
}
```
Centra los iconos horizontalmente dentro de su contenedor y les fija un alto de 40px para mantener una apariencia uniforme con el menú colapsado.

```css
body.cerrado .inicio .inicio-link.activo {
    opacity: 0.6;
}
```
Cuando el menú está cerrado **y** un enlace tiene la clase `activo` al mismo tiempo, se le reduce la opacidad al 60%. Esto evita que el fondo de color del enlace seleccionado se vea demasiado cargado en un menú tan angosto, manteniendo una apariencia visual equilibrada.
