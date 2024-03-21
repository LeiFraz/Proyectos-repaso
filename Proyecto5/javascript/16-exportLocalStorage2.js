/* EXPORTAR CON NOMBRE 
-----------------------*/
const manzana = "Manzana";

function pintarPera()
{
    console.log("Pera");
}

const pintarFrutilla = () =>
{
    console.log("frutilla");
}

class Fruta {
    constructor(nombre)
    {
        this.nombre = nombre;
    }
}
export {manzana,pintarPera,pintarFrutilla,Fruta}

/* EXPORTAR POR DEFECTO: solo exporta un solo elemento en todo el archivo 
------------------------*/
// export default naranja = "naranja";
const naranja = "naranja";
export default naranja;