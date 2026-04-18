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
    contenedor.innerHTML = `
    <div id=seccion-inicio>
        <h1 class="titulo-inicio">Bienvenido</h1>
        <p class="parrafo-inicio">Le damos la bienvenida al aula virtual de la Universidad Nacional</p>

        
    </div>
    `;
}

function cargarCursos() {
    contenedor.innerHTML = `<h1>cursos</h1><p>Lista de materias</p>`;
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