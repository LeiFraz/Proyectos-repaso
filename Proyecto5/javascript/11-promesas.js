const posts = [
    {
        "userId" : 1,
        "id": 1,
        "title": "El señor de los anillos",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eligendi iure eius quia vel voluptates eum repudiandae. Dolore, quos eos!"
    },
    {
        "userId" : 1,
        "id": 2,
        "title": "Avatar",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eligendi iure eius quia vel voluptates eum repudiandae. Dolore, quos eos!"
    },
    {
        "userId" : 1,
        "id": 3,
        "title": "Star Wars",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eligendi iure eius quia vel voluptates eum repudiandae. Dolore, quos eos!"
    }
];

/*                                  CALLBACK 
                                -----------------*/

/*  Creamos una arrowFunction, en los parametros ponemos lo que necesitamos buscar (el id del post) y luego
    la funcion callback.  Luego buscamos en el array, el post que coincida con el id:
    
    SI EXISTE: se llama al callback, se pasa el 1er parametro como NULL (el cual indicaria si hay error), y 
    el POST como 2do parámetro. 
    NO EXISTE: se llama al callback y se le pasa el msj de error. */

const findPostById = (id, callback) => {
    const post = posts.find(item => item.id === id)

    if(post)
    {
        callback(null, post)
    }else{
        callback("no se encontro el POST con id " + id)
    }
    
}

/*  Llamamos a la funcion, colocamos el ID y luego como iria el callback, se hace otra ARROW FUNCTION,
    donde el 1er parámetro seria el ERROR y el 2do el POST. Si hay un error (su valor no fue NULL) se retorna
    un consoleLog con el error, de lo contrario se muestra el post */

findPostById(1, (error, post) => 
{
    if(error)
    {
        return console.log(error)
    }

    console.log(post);
})


/* PROBANDO A ENCONTRAR VARIOS POST */
const idPosts = [1,3,4];
const postArray = []; 

const findPostsById = (callback) => {

    //se recorren ambos arreglos, tanto el que tiene los POST como el que tiene los ID
    posts.forEach(post => {
        idPosts.forEach(item => {
            if(post.id === item)
            {
                postArray.push(post);
            }
        })
        
    });
    
    if(postArray.length !== 0){
        callback(null, postArray)
    }else{
        callback("No se encontraron los POST's")
    }
}

findPostsById((err, arreglo) => {
    if(err)
    {
        return console.log(err)
    }

    console.log("Se encontraron los siguientes POST: ");
    console.log(arreglo)
})

/*                                  PROMESAS 
                                -----------------*/

// const buscarPostPorId = (id) =>
// {
//     const post = posts.find(item => item.id === id);

//     return new Promise((resolve, reject) => {
//         if(post){
//             resolve(post)
//         }else{
//             reject("No se encontró el id " + id)
//         }
//     });
// }

const buscarPostPorId = id => new Promise((resolve,reject) => 
{
    const post = posts.find(item => item.id === id);

    if(post)
    {
        resolve(post)
    }else{
        reject("No se encontró el id " + id)
    }
})

buscarPostPorId(1)
    .then(post => console.log(post))
    .catch(e => console.log(e));

//también se pueden tener ,then encadenados, al llamarlos una y otra vez
// buscarPostPorId(2)
//     .then(post => {
//         console.log(post)
//         return buscarPostPorId(3)
//     })
//     .then(post => {
//         console.log(post)
//         return buscarPostPorId(4);
//     })
//     .catch(e => console.log(e))

/*                                  ASYNC - AWAIT
-                                -------------------*/
/*  El ASYNC puede funcionar si un AWAIT
    Pero el AWAIT nunca puede funcionar sin un ASYNC

    El ASYNC devuelve una promesa o crea una promesa
    Siempre que se utiliza el AWAIT debe ser con PROMESAS*/

const buscarPostPorIdConEspera = id => new Promise((resolve,reject) => 
{

    setTimeout(() => {
        const post = posts.find(item => item.id === id);

        if(post)
        {
            resolve(post)
        }else{
            reject("No se encontró el id " + id)
        }
    }, 2000);

    
})

const buscar = async (id) =>
{
    try {
        // const post = await buscarPostPorIdConEspera(id);
        // console.log(post);
        
        //en caso de que se deban ejecutar varias promesas, y que estas no dependan de otras promesas.
        //hay que tener cuidado, si una promesa falla va directo al catch, por lo que si queriamos
        //mostrar la información, no se va a visualizar.
            const resPosts = await Promise.all([
            buscarPostPorIdConEspera(1),
            buscarPostPorIdConEspera(2)
        ]) 
        console.log(resPosts[0].title, resPosts[1].title)
    } catch (error) {
        console.log(error)
    }
    
}

buscar(4);

// buscarPostPorIdConEspera(1)
//     .then(post => console.log(post))
//     .catch(e => console.log(e));



/* EJEMPLO LIMPIO PARA VERIFICAR SI ENTENDI */
const frutas = [
    {
        "nombre": "Naranja",
        "id": 1
    },
    {
        "nombre": "Banana",
        "id": 2
    },
    {
        "nombre": "Kiwi",
        "id": 3
    }
];

const buscarFruta = id => new Promise((resolve, reject) => 
{
    setTimeout(() => {
        const fruta = frutas.find(item => item.id === id);

        if (fruta)
        {
            resolve(fruta);
        }else{
            reject("no se encontró la fruta con el id " + id)
        }

    }, 1000);
});

const mostrarFruta = async id => {
    try {
        
        const fruta = await buscarFruta(id)
        console.log(fruta);

    } catch (error) {
        console.log(error)
    }
}

mostrarFruta(3)