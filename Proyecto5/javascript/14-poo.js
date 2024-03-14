/* PROTOTIPO */

// function Persona (nombre){
//     this.nombre = nombre;

//     this.saludar = function () {
//         return `${this.nombre} dice Hola!!!`;
//     }
// }

// Persona.prototype.saludarIngles = function(){
//     return `${this.nombre} say hi`;
// }

// const persona1 = new Persona("Pablo");
// const persona2 = new Persona("Carlos");

// console.log(persona1.saludar());
// console.log(persona2.saludarIngles());

/* CLASES */
class Persona {
    
    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    Saludar(){
        return `${this.nombre} dice Hola!!!`;
    }

    get getNombre()
    {
        return this.nombre;
    }
    set setNombre(nombre)
    {
        this.nombre = nombre
    }

    //método statico funciona con el nombre de la clase, no con la instancia
    static probarSaludo(nombre)
    {
        return `${nombre} probando saludo`;
    }
}

// const p1 = new Persona("Pablo");
// console.log(p1.getNombre);
// p1.setNombre = "Carlos";
// console.log(p1.getNombre);

// console.log(Persona.probarSaludo("Fran"));

/* EXTENDER UNA CLASE */
class Estudiante extends Persona{

    // constructor(nombre,edad,notas = [])
    // {
    //     super(nombre,edad);
    //     this.notas = notas; // || []
    // }

    //propiedad privada
    #notas = []

    set setNotas(nota)
    {
        this.#notas.push(nota);
    }

    get getNotas()
    {
        return this.#notas;
    }
}

// const e1 = new Estudiante("Pablo", 20, [9]);
const e1 = new Estudiante("Pablo", 20);
console.log(e1);
e1.setNotas = 7;
e1.setNotas = 8;
e1.setNotas = 6;
console.log(e1.getNotas)