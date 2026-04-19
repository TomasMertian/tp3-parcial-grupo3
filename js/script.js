// crea una variable llamada menu, y agarra elemento con clase .menu-desplegable del html
const menu = document.querySelector(".menu-desplegable");

// crea una variable llamada boton, y agarra elemento con clase .menu-boton del html
const boton = document.querySelector(".menu-boton");

// crea una variable llamada boton, y agarra elemento con clase contenedor-principal del html
const contenedor = document.getElementById('contenedor-principal');

// crea variables para cada enlace del menu, agarrando los elementos por su clase del html
const linkInicio = document.querySelector('.pag-inicio');
const linkCursos = document.querySelector('.pag-cursos');
const linkContacto = document.querySelector('.pag-contacto');
const linkPerfil = document.querySelector('.pag-perfil');
const linkProfesores = document.querySelector('.pag-profesores');
const linkLogin = document.querySelector('.pag-login');

// definen funciones para inyectar el contenido de cada seccion adentro del contenedor principal
function cargarInicio() {
    contenedor.innerHTML = `<h1>Hola Inicio</h1><p>Contenido del main</p>`;
}

function cargarCursos() {
    contenedor.innerHTML =
    `
    <div class="seccion-cursos">

        <h1 class="titulo-cursos">Cursos</h1>

        <h2>Mis cursos</h2>
        <div class="mis-cursos">
            <div class="card-curso">
                <h3 class="card-curso-titulo">Programacion 3</h3>
                <p class="card-curso-desc">Lorem, ipsum dolor.</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Base de datos 2</h3>
                <p class="card-curso-desc">Lorem, ipsum dolor.</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Metodologia de sistemas 1</h3>
                <p class="card-curso-desc">Lorem, ipsum dolor.</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Ingles 2</h3>
                <p class="card-curso-desc">Lorem, ipsum dolor.</p>
                <button class="btn-curso">Ver curso</button>
            </div>
        </div>

        <hr class="separador-seccion">

        <h2>Todos los cursos</h2>
        <div class="todos-cursos">
            <div class="card-curso">
                <h3 class="card-curso-titulo">Programacion 1</h3>
                <p class="card-curso-desc">Lorem, ipsum dolor.</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Programacion 2</h3>
                <p class="card-curso-desc">Lorem, ipsum dolor.</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Base de datos 1</h3>
                <p class="card-curso-desc">Lorem, ipsum dolor.</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Matematicas</h3>
                <p class="card-curso-desc">Lorem, ipsum dolor.</p>
                <button class="btn-curso">Ver curso</button>
            </div>
        </div>
    </div>
    `;

    /* mensaje cuando se hace click en el boton */
    const botones = contenedor.querySelectorAll('.btn-curso');

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("Este curso no esta disponible actualmente");
        });
    });
}

function cargarContacto() {
    contenedor.innerHTML = `<h1>contacto</h1><p>formulario de contacto</p>`;
}

function cargarPerfil() {
    contenedor.innerHTML = `<h1>perfil</h1><p>datos del usuario</p>`;
}

function cargarProfesores() {
    contenedor.innerHTML = `<h1>profesores</h1><p>lista de profesores</p>`;
}

function cargarLogin() {
    contenedor.innerHTML = `<h1>login</h1><p>iniciar sesion</p>`;
}

// define una funcion que recibe el nombre de la seccion y usa un switch para ejecutar la funcion de carga correspondiente
function navegar(seccion) {

    /* selecciona todos los obejtos con clase .inicio-link y les quita la clase "activo" si es que la tienen*/
    document.querySelectorAll(".inicio-link").forEach(link => {
        link.classList.remove("activo");
    });

    /* agrega clase "activo" dependiendo la pagina que cargue */
    const linkActivo = document.querySelector(`.pag-${seccion}`);
    if (linkActivo) {
        linkActivo.classList.add("activo");
    }

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

// define una funcion para alternar menu, le agrega o quita la clase "cerrado" al body
function alternarMenu() {
    document.body.classList.toggle("cerrado");
}

/* agrega un evento al hacer click en  el boton seleccionado anteriormente,
y al registrar el click llama a la funcion alternarMenu */
boton.addEventListener("click", alternarMenu);

// agrega un evento al hacer click en cada enlace, usando una funcion flecha para llamar a "navegar" con la seccion correcta
linkInicio.addEventListener('click', () => navegar('inicio'));
linkCursos.addEventListener('click', () => navegar('cursos'));
linkContacto.addEventListener('click', () => navegar('contacto'));
linkPerfil.addEventListener('click', () => navegar('perfil'));
linkProfesores.addEventListener('click', () => navegar('profesores'));
linkLogin.addEventListener('click', () => navegar('login'));

// carga inicio como pagina principal
navegar('inicio');