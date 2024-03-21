/* IMPORT CON NOMBRES: las constantes, funciones y clases del otro archivo y lo mostramos 
-----------------------*/
import {manzana, pintarPera as pera,pintarFrutilla,Fruta} from "./16-exportLocalStorage2.js"

console.log(manzana);
pera();
pintarFrutilla();
const cereza = new Fruta("cereza");
console.log(cereza);

/* IMPORTAMOS POR DEFECTO: ponemos el nombre que queremos y sin las llaves, solo acepta un elemento no varios
--------------------------*/
import naranja from "./16-exportLocalStorage2.js"
console.log(naranja)

/* LOCAL STORAGE: guarda hasta 5Mb de strings o Json parseados a String 
-----------------*/

//creamos la clave y su valor
localStorage.setItem("mandarina", "Mandarina");

//obtenemos la clave que queremos y la asignamos a una constante para luego mostrarla
const mandarina = localStorage.getItem("mandarina");
console.log(mandarina);

//elimina la clave y su valor
localStorage.removeItem("mandarina")

//elimina todas las claves y valores guardados
localStorage.clear();

//por lo general cuando se utiliza el LocalStorage se hace en una sentencia IF
localStorage.setItem('sandia', 'Sandia')
if (localStorage.getItem('sandia')) {
    const sandia = localStorage.getItem('sandia');
    console.log(sandia);
}

/* JSON 
----------- */
const frutas = [
    {
        nombre: "Manzana",
        color: "Rojo"
    },
    {
        nombre: "Pera",
        color: "Verde"
    },
    {
        nombre: "Banana",
        color: "Amarillo"
    },
    {
        nombre: "Cereza",
        color: "Bordo"
    },
]

localStorage.setItem('frutas', JSON.stringify(frutas));

if(localStorage.getItem('frutas'))
{
    const frutasDesdeLocalStorage = JSON.parse(localStorage.getItem('frutas'))
    console.log(frutasDesdeLocalStorage);
}