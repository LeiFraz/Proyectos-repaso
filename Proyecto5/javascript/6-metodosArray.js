/* MAP = trae los elementos 
----------------------------*/
const frutas = ["🍉","🍊","🍎","🥝","🍏","🍐","🍒","🍍","🍋"];

const frutasNuevas = frutas.map((fruta) => { return fruta});
console.log(frutasNuevas);

/*FILTER = sirve para trae los elementos que cumplan con la condicion o para eliminar elementos  
----------------------------*/
const users = [
    {id: 1, name: "Jhon", age: 33},
    {id: 2, name: "Brian", age: 24},
    {id: 3, name: "Jhon", age: 19}
]

const usersNuevos = users.filter((user) => user.age > 30);
console.log(usersNuevos);

const userFiltrado = users.filter((user) => user.id !== 3)
console.log(userFiltrado)
    
/*FIND = nos sirve para buscar un elemento 
----------------------------*/

const brian = users.find((user) => user.id === 2)
console.log(brian)

//aplicamos DESTRUCTURING
const {name} = users.find((user) => user.id === 2)
console.log(name);

/*SOME = se utiliza para verificar si al menos un elemento cumple con la condicion y devuelve un booleano
----------------------------*/
const existe = users.some((user) => user.id === 2)
console.log(existe)

/*FIND INDEX = devuelve el indice del primer elemento que cumple la condicion, en caso contrario devuelve -1 
----------------------------*/
const indice = users.findIndex((user) => user.id === 2)
console.log(indice)

/*SLICE = devuelve una copia de una parte del array 
----------------------------*/
const parteArray = frutas.slice(4,8)
console.log(parteArray)

/*CONCAT = se utiliza para unir 2 o mas arrays
----------------------------*/
const union = frutas.concat(users);
console.log(union)

/*SPREAD OPERATOR = podemos traer elementos de un arreglo especificando de otra manera, con "..."
----------------------------*/
const operadorSpread = [...frutas, ...users]
console.log(operadorSpread)

/*REDUCE = el valor devuelto de la funcion se asigna a un acumulador, este se recuerda en cada iteración 
y en la ultima instancia, se convierte en el valor final.
También nos sirve para hacer que un arreglo se ordene, cuando tiene muchos arreglos dentro innecesarios
----------------------------*/
const numeros = [1,2,3,4,5,6]

const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual)
console.log(sumarTodos)

const arrayNumero = [
    [0,1],
    [2,3],
    [4,5]
];

const soloNumeros = arrayNumero.reduce((acc, current) => acc.concat(current))
console.log(soloNumeros)

//FLAT hace lo mismo, pero puedo indicar hasta que profundidad del arreglo ir
const arrayNumero2 = [
    [0,1],
    [2,3],
    [4,5,[6,7,8,[9,10]]],
];
let arrayFlat = arrayNumero2.flat();
console.log(arrayFlat)
arrayFlat = arrayNumero2.flat(2)
console.log(arrayFlat)
arrayFlat = arrayNumero2.flat(3)
console.log(arrayFlat)

/*SPLIT = convierte una cadena de texto en un array, los elementos son separados mediante el caracter indicado*/
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dic";

const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

/* JOIN = convertir un array en un string y separar los elementos por un caracter */
const nuevoTexto = arrayMeses.join("-");
console.log(nuevoTexto);
