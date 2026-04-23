// crea una variable llamada menu, y agarra elemento con clase .menu-desplegable del html
const menu = document.querySelector(".menu-desplegable");

// crea una variable llamada boton, y agarra elemento con clase .menu-boton del html
const boton = document.querySelector(".menu-boton");

// crea una variable llamada boton, y agarra elemento con clase contenedor-principal del html
const contenedor = document.getElementById("contenedor-principal");

// crea variables para cada enlace del menu, agarrando los elementos por su clase del html
const linkInicio = document.querySelector(".pag-inicio");
const linkCursos = document.querySelector(".pag-cursos");
const linkContacto = document.querySelector(".pag-contacto");
const linkPerfil = document.querySelector(".pag-perfil");
const linkProfesores = document.querySelector(".pag-profesores");
const linkLogin = document.querySelector(".pag-login");

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
  contenedor.innerHTML = `
    <div class="seccion-cursos">

        <h1 class="titulo-cursos">Cursos</h1>

        <h2>Mis cursos</h2>
        <div class="mis-cursos">
            <div class="card-curso">
                <h3 class="card-curso-titulo">Programacion 3</h3>
                <p class="card-curso-desc">Horario: 18:00 - 22:00</p>
                <p class="card-curso-equipo">Profesor: Gustavo Ramoscelli</p>
                <p class="card-curso-equipo">Ayudante: Maria Victoria Ruiz</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Base de datos 2</h3>
                <p class="card-curso-desc">Horario: 18:00 - 22:00</p>
                <p class="card-curso-equipo">Profesor: Joel Partida</p>
                <p class="card-curso-equipo">Ayudante: F. Damián Ene</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Metodologia de sistemas 1</h3>
                <p class="card-curso-desc">Horario: 18:00 - 22:00</p>
                <p class="card-curso-equipo">Profesor: Sebastián Fell</p>
                <p class="card-curso-equipo">Ayudante: Javier Kinter</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Ingles 2</h3>
                <p class="card-curso-desc">Horario: 18:00 - 22:00</p>
                <p class="card-curso-equipo">Profesor: Agustina Cortalezzi</p>
                <p class="card-curso-equipo">Ayudante: Carla Allende</p>
                <button class="btn-curso">Ver curso</button>
            </div>
        </div>

        <hr class="separador-seccion">

        <h2>Todos los cursos</h2>
        <div class="todos-cursos">
            <div class="card-curso">
                <h3 class="card-curso-titulo">Programacion 1</h3>
                <p class="card-curso-desc">Horario: 8:00 - 12:00</p>
                <p class="card-curso-equipo">Profesor: Damián Ene</p>
                <p class="card-curso-equipo">Ayudante: Ricardo Menna</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Programacion 2</h3>
                <p class="card-curso-desc">Horario: 8:00 - 12:00</p>
                <p class="card-curso-equipo">Profesor: Damián Ene</p>
                <p class="card-curso-equipo">Ayudante: Nicolás Andreis</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Arquitectura y Sistemas operativos</h3>
                <p class="card-curso-desc">Horario: 8:00 - 12:00</p>
                <p class="card-curso-equipo">Profesor: Mateo Menvielle</p>
                <p class="card-curso-equipo">Ayudante: Damián Ene</p>
                <button class="btn-curso">Ver curso</button>
            </div>
            <div class="card-curso">
                <h3 class="card-curso-titulo">Matematicas</h3>
                <p class="card-curso-desc">Horario: 8:00 - 12:00</p>
                <p class="card-curso-equipo">Profesor: Paula Senra</p>
                <p class="card-curso-equipo">Ayudante: Mariana Valentini</p>
                <button class="btn-curso">Ver curso</button>
            </div>
        </div>
    </div>
    `;

  /* mensaje cuando se hace click en el boton */
  const botones = contenedor.querySelectorAll(".btn-curso");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      alert("Este curso no esta disponible actualmente");
    });
  });
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
                    <p><strong>Telefonos:</strong><br> 4553826 <br> 2915236442</p>
                </article>
            </div>
        </section>
    `;
}

function cargarPerfil() {
  contenedor.innerHTML = `<h1>perfil</h1><p>datos del usuario</p>`;
}

function cargarProfesores() {
  contenedor.innerHTML = `
    <section class = "seccion-profesores">
        
        <h1 class = "titulo-profesores">Profesores</h1>
        <h2> Mis profesores</h2>

        <div class = "profesores-container">

            <article class = "profesor-card">
                <h3>Gustavo Ramoscelli</h3>
                <h3>Materia: Programacion 3</h3>
                <p>Mail: gustavoramoscelli@gmail.com</p>
                <p>Horario: Lunes y miercoles de 18 a 22</p>
            </article>

            <article class = "profesor-card"> 
                <h3>Joel Partida</h3>
                <h3>Materia: Base de datos 2 </h3>
                <p>Mail: partidajoel.mail@gmail.com</p>
                <p>Horario: Viernes de 18 a 22</p>
            </article>

            <article class = "profesor-card">
                <h3>Sebastian Fell</h3>
                <h3>Materia: Metadologia de sistemas 1</h3>
                <p>Mail: fellsebastian@yahoo.com.ar</p>
                <p>Horario:Jueves de 18 a 22</p>
            </article>

            <article class = "profesor-card">
                <h3>Agustina Cortalezzi</h3>
                <h3>Materia:Ingles 1</h3>
                <p>Mail:acortalezzi@frbb.utn.edu.ar</p>
                <p>Horario:Martes de 18 a 22</p>
            </article>
        </div>

        <hr class="separador-seccion">

        <h2 class = "titulo-ayudantes">Ayudantes</h2>
        <div class = "profesores-container">

            <article class = "profesor-card">
                <h3>Maria Victoria Ruiz</h3>
                <h3>Materia:Programacion 3</h3>
                <p>Mail:ma.victoria.2509@gmail.com</p>
                <p>Horario:Lunes y miercoles de 18 a 22</p>
            </article>

            <article class = "profesor-card">
                <h3>Ene Fernando Damián</h3>
                <h3>Materia:Base de datos 2</h3>
                <p>Mail:fernandod.ene@gmail.com</p>
                <p>Horario:Viernes de 18 a 22</p>
            </article>

            <article class = "profesor-card">
                <h3>Ene Kinter Javier</h3>
                <h3>Materia:Metadologia de sistemas 1</h3>
                <p>Mail:javierekinter@gmail.com</p>
                <p>Horario:Jueves de 18 a 22</p>
            </article>

            <article class = "profesor-card">
                <h3>Carla Allende </h3>
                <h3>Materia:Ingles 1</h3>
                <p>Mail:carlaallende@frbb.utn.edu.ar</p>
                <p>Horario:Martes de 18 a 22</p>
            </article>
        </div>

        <hr class="separador-seccion">
        
        <h2 class = "titulo-todos" > Todos los profesores y ayudantes</h2>
        <div class = "profesores-container">

            <article class = "profesor-card">
                <h3>Ene Fernando Damián</h3>
                <h3>Materia:Programacion 1</h3>
                <p>Mail: fernandod.ene@gmail.com</p>
                <p>Horario:Martes y Miércoles de 9 a 13hs</p>
                <p>Ayudante:Ricardo Menna</p>
                <p>Mail:ricardomenna.uns@gmail.com</p>
            </article>

            <article class = "profesor-card">
                <h3>Ene Fernando Damián</h3>
                <h3>Materia:Programacion 2</h3>
                <p>Mail:fernandod.ene@gmail.com</p>
                <p>Horario:Miércoles y Jueves de 8.30 a 12hs</p>
                <p>Ayudante: Nicolás Andreis</p>
                <p>Mail: - - </p>
            </article>

            <article class = "profesor-card">
                <h3>Mateo Menvielle</h3>
                <h3>Materia:Arquitectura y Sistemas Operativos</h3>
                <p>Mail:mateomenvielle@hotmail.com</p>
                <p>Horario:Viernes de 9 a 12:30 hs</p>
                <p>Ayudante: - -</p>
                <p>Mail: - - </p>
            </article>

            <article class = "profesor-card">
                <h3>Paula Senra</h3>
                <h3>Materia:Matematicas 1</h3>
                <p>Mail:paulasenra@frbb.utn.edu.ar</p>
                <p>Horario:Lunes de 9 a 13</p>
                <p>Ayudante: Valentini Mariano</p>
                <p>Mail: valentiniimariana@gmail.com</p>
            </article>
        </div>
    </section>
    `;
}

function cargarLogin() {
  contenedor.innerHTML = `
    <section class="seccion-login">
        <h1 class="titulo-login">Iniciar Sesión</h1>

        <form class="form-login">
            <div class="campo">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Ingrese su email" required>
            </div>

            <div class="campo">
                <label for="input-nombre">Nombre</label>
                <input type="text" id="input-nombre" name="nombre" placeholder="Ingrese su nombre" required>
            </div>

            <div class="campo">
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required>
            </div>

            <button type="submit" class="btn-login">Ingresar</button>
        </form>
    </section>
    `;
}

// define una funcion que recibe el nombre de la seccion y usa un switch para ejecutar la funcion de carga correspondiente
function navegar(seccion) {
  /* selecciona todos los obejtos con clase .inicio-link y les quita la clase "activo" si es que la tienen*/
  document.querySelectorAll(".inicio-link").forEach((link) => {
    link.classList.remove("activo");
  });

  /* agrega clase "activo" dependiendo la pagina que cargue */
  const linkActivo = document.querySelector(`.pag-${seccion}`);
  if (linkActivo) {
    linkActivo.classList.add("activo");
  }

  switch (seccion) {
    case "inicio":
      cargarInicio();
      break;
    case "cursos":
      cargarCursos();
      break;
    case "contacto":
      cargarContacto();
      break;
    case "perfil":
      cargarPerfil();
      break;
    case "profesores":
      cargarProfesores();
      break;
    case "login":
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
linkInicio.addEventListener("click", () => navegar("inicio"));
linkCursos.addEventListener("click", () => navegar("cursos"));
linkContacto.addEventListener("click", () => navegar("contacto"));
linkPerfil.addEventListener("click", () => navegar("perfil"));
linkProfesores.addEventListener("click", () => navegar("profesores"));
linkLogin.addEventListener("click", () => navegar("login"));

// carga inicio como pagina principal
navegar("inicio");
