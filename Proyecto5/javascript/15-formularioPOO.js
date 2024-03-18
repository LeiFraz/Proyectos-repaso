//templates
const templateProfesores = document.querySelector('#templateProfesores').content;
const templateEstudiantes = document.querySelector('#templateEstudiantes').content;
//cards
const cardsEstudiantes = document.querySelector('#cardsEstudiantes');
const cardsProfesores = document.querySelector('#cardsProfesores');
//formulario
const formulario = document.querySelector('#formulario');
//alerts
const alertNombre = document.querySelector('#alertNombre');
const alertEdad = document.querySelector('#alertEdad');

//expresion regular
const regNombre = /^[a-zA-Z]*$/;
const regEdad = /^(1[8-9]|[2-3][0-9]|4[0-6])$/;

//arreglo de estudiantes y personas
const estudiantes = [];
const profesores = [];

//EVENTO BOTONES DE LAS CARDS
document.addEventListener('click', (e) =>
{
    // console.log(e.target.dataset.nombre)
    if(e.target.dataset.uid)
    {   
        if (e.target.matches('.btn-success')) {
            estudiantes.map(item =>
                {
                    //se deberia comprobar segun el id, no segun el nombre, es solo para probar rapido
                    if (item.uid === e.target.dataset.uid) {
                        item.setEstado = true;
                    }
                    return item;
                });
        }
        if (e.target.matches('.btn-danger')) {
            estudiantes.map(item =>
                {
                    if (item.uid === e.target.dataset.uid) {
                        item.setEstado = false;
                    }
                    return item;
                });
        }
        Persona.pintarPersonaUI(estudiantes,'Estudiante');
    }
    
})

//CLASE PERSONA
class Persona{
    constructor(nombre,edad)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.uid = `${Date.now()}`;
    }

    //recorremos el arreglo para ir mostrando todas las cards
    static pintarPersonaUI(personas, tipo)
    {
        if (tipo === 'Estudiante') {
            const fragment = document.createDocumentFragment();
            cardsEstudiantes.textContent = '';
            personas.forEach(item => {
                fragment.appendChild(item.agregarNuevoEstudiante());
            });
            cardsEstudiantes.appendChild(fragment);
        }

        if (tipo === 'Profesor') {
            const fragment = document.createDocumentFragment();
            cardsProfesores.textContent = '';
            personas.forEach(item => {
                fragment.appendChild(item.agregarNuevoProfesor());
            });
            cardsProfesores.appendChild(fragment);
        }
    }
}

//CLASE PROFESOR
class Profesor extends Persona{
    #profesor = 'Profesor';

    agregarNuevoProfesor()
    {
        const clone = templateProfesores.cloneNode(true);
        clone.querySelector('h5 .text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.#profesor;
        clone.querySelector('.lead').textContent = this.edad;

        return clone
    }
}

//CLASE ESTUDIANTE
class Estudiante extends Persona{
    #estudiante = 'Profesor';
    #estado = false;

    set setEstado(estado)
    {
        this.#estado = estado;
    }

    agregarNuevoEstudiante()
    {
        const clone = templateEstudiantes.cloneNode(true);
        clone.querySelector('h5 .text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.#estudiante;
        clone.querySelector('p').textContent = this.edad;

        if(this.#estado)
        {
            clone.querySelector('h5 .badge').className = "badge bg-success";
            clone.querySelector('.btn-success').disabled = true;
            clone.querySelector('.btn-danger').disabled = false;
        }else{
            clone.querySelector('h5 .badge').className = "badge bg-danger";
            clone.querySelector('.btn-success').disabled = false;
            clone.querySelector('.btn-danger').disabled = true;
        }
        
        clone.querySelector('h5 .badge').textContent = this.#estado? 'Aprobado':'Desaprobado';

        //el data tendria que ser un id aleatorio o consecutivo del anterior para identificarlo
        //para ir probando le pongo que sea con el nombre, cada uno tendria que tener un nombre distinto
        clone.querySelector('.btn-success').dataset.uid = this.uid;
        clone.querySelector('.btn-danger').dataset.uid = this.uid;

        return clone
    }
}

//MANEJO DE ERRORES
const mostrarErrores = (errores) =>
{
    errores.forEach(item => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
    });
}

const buscarErrores = (nombre,edad) =>
{
    const errores = [];

    if(!regNombre.test(nombre) || !nombre.trim())
    {
        errores.push({
            tipo: alertNombre,
            msg: "Ingrese un nombre válido, solo letras y sin espacios"
        })
    }else{
        alertNombre.classList.add('d-none');
    }

    if(!regEdad.test(edad) || !edad.trim())
    {
        errores.push({
            tipo: alertEdad,
            msg: "Ingrese una edad válida, entre 18 y 46"
        })
    }else{
        alertEdad.classList.add('d-none');
    }

    if(errores.length != 0)
    {
        mostrarErrores(errores)
        return true;
    }else{
        return false
    }
}

//EVENTO FORMULARIO
formulario.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const datos = new FormData(formulario);
    const [nombre, edad, seleccion] = [...datos.values()]; 

    if (!buscarErrores(nombre,edad)) {
        if (seleccion === 'Estudiante') {
            const estudiante = new Estudiante(nombre,edad);
            estudiantes.push(estudiante);
            Persona.pintarPersonaUI(estudiantes, seleccion);
        }
        if (seleccion === 'Profesor') {
            const profesor = new Profesor(nombre,edad);
            profesores.push(profesor);
            Persona.pintarPersonaUI(profesores, seleccion);
        }
    }

    
})