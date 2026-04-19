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
        <div class="imagenes-container">
            <img src="./css/componentes/img/925547ab210b12e869b3f331e63b54f3.jpg" alt="imagen-estudio" class="imagen-estudio">
        </div>
        <p class="speech-informativo">Bienvenidos al portal de alumnos. Acá vas a encontrar toda la información sobre las mesas de exámenes, fechas administrativas y el cronograma de la Universidad.</p>
        <h1 class ="header-cronograma"> CRONOGRAMA TENTATIVO AÑO CURRICULAR</h1>
        <div class="cronograma-grid">
            <div class="hijo-grid">
                <div class="hijo-header">Enero</div>
                    <div class="card-body">Receso estival.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Febrero</div>
                    <div class="card-body">Mesas de examen e inscripcion a materias del 1er cuatrimestre.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Marzo</div>
                    <div class="card-body">Inicio de cursada y charla de bienvenida para ingresantes.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Abril</div>
                    <div class="card-body">Periodo de primeros parciales y entrega de trabajos prácticos.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Mayo</div>
                    <div class="card-body">Mesas especiales de examen y trámites de equivalencias.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Junio</div>
                    <div class="card-body">Cierre del primer cuatrimestre y firma de actas.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Julio</div>
                    <div class="card-body">Receso invernal y turno de exámenes finales.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Agosto</div>
                    <div class="card-body">Inicio del segundo cuatrimestre e inscripciones.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Septiembre</div>
                    <div class="card-body">Semana del estudiante y eventos institucionales.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Octubre</div>
                    <div class="card-body">Periodo de segundos parciales y coloquios</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Noviembre</div>
                    <div class="card-body">Finalización de clases y entrega de proyectos finales.</div>
            </div>
            
            <div class="hijo-grid">
                <div class="hijo-header">Diciembre</div>
                    <div class="card-body">Turnos de exámenes finales y cierre del ciclo lectivo.</div>
            </div>
        </div>    
    </div>
    `;
}

function cargarCursos() {
    contenedor.innerHTML = `<h1>cursos</h1><p>Lista de materias</p>`;
}

function cargarContacto() {
    contenedor.innerHTML = `
        <section class="seccion-contacto">
            <h1 class="titulo-contacto">Contactanos</h1>
            
            <div class="cards-container">
                <article class="card-contacto">
                    <div class="card-icono">
                        <i class='bx bx-map-pin'></i>
                    </div>
                    <h3>Atencion Presencial</h3>
                    <p>11 de abril 461</p>
                    <p>Oficina 3, Primer Piso</p>
                </article>

                <article class="card-contacto">
                    <div class="card-icono">
                        <i class='bx bx-laptop'></i>
                    </div>
                    <h3>Atencion Virtual</h3>
                    <p><strong>Mail:</strong><br> consultasutnfrbb@gmail.com</p>
                    <p><strong>Teléfonos:</strong><br> 4553826 <br> 2915236442</p>
                </article>
            </div>
        </section>
    `;
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