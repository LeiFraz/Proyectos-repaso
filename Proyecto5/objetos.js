/*ARRAY*/
const frutas = ['Sandia'];
frutas.push('Manzana');
console.log(frutas);

frutas.pop();
console.log(frutas)

frutas.unshift('Pera');
console.log(frutas) 

frutas.shift();
console.log(frutas)

const numAzar = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(numAzar(201,100))

/*OBJECTOS*/
const gato = {
    nombre: "Hector",
    edad: 10,
    duerme: true,
    enemigos: ["agua", "perros"],
    comer(alimento){
        console.log(
            `${this.nombre} esta comiendo ${alimento}`
        )
    },
    listarEnemigos(){
        this.enemigos.forEach( (item) => console.log(item));
    }
}

console.log(gato.nombre);
console.log(gato["edad"]);
console.log(gato.enemigos[0]);

/*CRUD*/
gato.color = "Negro"; //Create
console.log(gato.color); //Read
gato.edad = 5; //Update
delete gato.duerme; //Delete
console.log(gato);

/*HAS OWN PROPERTY*/
console.log(gato.hasOwnProperty("edad"));

/*USO DE METODOS*/
gato.comer("Pollo");
gato.listarEnemigos();

/*ITERACION OBJETOS FOR IN */
for (const item in gato) { //muestra solo las propiedades
    console.log(item)
}

for (const item in gato) { //muestra los valores de las propiedades
    console.log(gato[item])
}

// USO DE OBJET.VALUES PARA ITERAR

console.log(Object.values(gato))
Object.values(gato).forEach( (item) => console.log(item));

/* DESTRUCTURING */

// const nombreGato = gato.nombre;

//aplicamos un alias al nombre para evitar conflictos con alguna variables existente
// si no existe le ponemos un valor por defecto
const { nombre: nombreGato, duerme: duermeGato = true, edad} = gato;

console.log(nombreGato, duermeGato, edad);