//inputs del formulario
const formulario = document.querySelector('#formulario');

//alerts
const alertNombre = document.querySelector('#alertNombre');
const alertEdad = document.querySelector('#alertEdad');
const alertExito = document.querySelector('#alertExito');
//cards
const cardsEstudiantes = document.querySelector('#cardsEstudiantes');
const cardsProfesores = document.querySelector('#cardsProfesores');
//templates
const templateEstudiantes = document.querySelector('#templateEstudiantes').content;
const templateProfesores = document.querySelector('#templateProfesores').content;

//arreglo de estudiantes y profesores
const estudiantes = [];
const profesores = [];

//EVENTO BOTONES DE LAS CARDS
document.addEventListener('click', e =>
{
    // console.log(e.target.dataset.nombre);
    if(e.target.dataset.nombre)
    {
        // console.log(e.target.matches('.btn-success'))
        if(e.target.matches('.btn-success'))
        {
            estudiantes.map(item =>
            {
                //se deberia comprobar segun el id, no segun el nombre, es solo para probar rapido
                if(item.nombre === e.target.dataset.nombre)
                {
                    item.setEstado = true;
                }
                return item;
            })
        }
        if(e.target.matches('.btn-danger'))
        {
            estudiantes.map(item => 
                {
                    if(item.nombre === e.target.dataset.nombre)
                    {
                        item.setEstado = false;
                    }
                    return item;
                })
        }
        Persona.pintarPersonaUI(estudiantes, 'Estudiante');
    }

})

//CLASE PERSONA
class Persona
{
    constructor(nombre,edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    //recorremos el arreglo para ir mostrando todas las cards
    static pintarPersonaUI(personas, tipo)
    {
        if(tipo === 'Estudiante')
        {
            cardsEstudiantes.textContent = '';
            const fragment = document.createDocumentFragment();

            personas.forEach(item => {
                fragment.appendChild(item.agregarNuevoEstudiante());
            });
            cardsEstudiantes.appendChild(fragment);
        }
        if(tipo === 'Profesor')
        {
            cardsProfesores.textContent = ''
            const fragment = document.createDocumentFragment();

            personas.forEach((item) => 
            {
                fragment.appendChild(item.agregarNuevoProfesor());
            })

            cardsProfesores.appendChild(fragment);
        }
        
    }
}

//CLASE ESTUDIANTE
class Estudiante extends Persona{
    #estado = false;
    #estudiante = "Estudiante";

    set setEstado(estado)
    {
        this.#estado = estado;
    }

    get getEstudiante(){
        return this.#estudiante;
    }

    agregarNuevoEstudiante()
    {
        const clone = templateEstudiantes.cloneNode(true);
        clone.querySelector('h5 .text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.getEstudiante;
        clone.querySelector('.lead').textContent = this.edad;

        if(this.#estado)
        {
            clone.querySelector('.badge').className = 'badge bg-success';
            clone.querySelector('.btn-success').disabled = true;
            clone.querySelector('.btn-danger').disabled = false;
        }else{
            clone.querySelector('.badge').className = 'badge bg-danger';
            clone.querySelector('.btn-success').disabled = false;
            clone.querySelector('.btn-danger').disabled = true;
        }
        clone.querySelector('.badge').textContent = this.#estado? 'Aprobado': 'Reprobado';

        //el data tendria que ser un id aleatorio o consecutivo del anterior para identificarlo
        //para ir probando le pongo que sea con el nombre, cada uno tendria que tener un nombre distinto
        clone.querySelector('.btn-success').dataset.nombre = this.nombre;
        clone.querySelector('.btn-danger').dataset.nombre = this.nombre;

        return clone;
    }
}

//CLASE PROFESOR
class Profesor extends Persona{

    #profesor = 'Profesor';

    agregarNuevoProfesor()
    {
        const clone = templateProfesores.cloneNode(true);
        clone.querySelector('h5').textContent = this.nombre;
        clone.querySelector('.card-body .lead').textContent = this.edad;
        clone.querySelector('h6').textContent = this.#profesor;

        return clone; 
    }
}


//EVENTO DEL FORMULARIO
formulario.addEventListener('submit', e =>
{
    e.preventDefault();

    const datos = new FormData(formulario);
    const [nombre,edad,opcion] = [...datos.values()];
    // console.log(nombre,edad,opcion)

    if(opcion === 'Estudiante')
    {
        const estudiante = new Estudiante(nombre,edad)
        estudiantes.push(estudiante);
        Persona.pintarPersonaUI(estudiantes,opcion);
    }

    if(opcion === 'Profesor')
    {
        const profesor = new Profesor(nombre, edad);
        profesores.push(profesor);
        Persona.pintarPersonaUI(profesores,opcion)
    }


})