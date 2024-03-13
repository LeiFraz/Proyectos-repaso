
/* AJAX = Javascript Asíncrono + XML (ahora usamos JSON)
Incluye:
    - HTML  -CSS    -JavaScript -Dom    -Json   -XMLHTTPREQUEST(ahora FETCH)  

Cuando se combinan estas tecnologías estamos usando el modelo AJAX    */

/* FETCH API 
    - API es una interfaz para recuperar recursos 
    - FETCH es una interfaz para hacer solicitudes AJAX en JAVASCRIPT, usado para hacer una
    solicitud a una API*/

//Copiamos la URL, la peticion es usando GET (por que solo obtenemos informacion)
const url = "https://jsonplaceholder.typicode.com/posts/";

/*  - el 1er parametro de FETCH es la ruta de acceso por lo general la URL (este devuelve siempre una promesa)
    - Luego de que nos devuelve el resultado hay que formatear la respuesta a JSON
    - Usamos el DATA para mostrar el contenido*/
    
// fetch(url)
//     .then((res) => res.json())
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

const findPostById = async (id) => {
    try
    {
        //podemos pasar la url y concatenarle otra cadena para completar la url
        const res = await fetch(url + id)
        const post = await res.json()

        console.log(post)
    }catch(e){
        console.log(e)
    }
}

findPostById(2)

/* PROBANDO POKEAPI.CO */

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data))