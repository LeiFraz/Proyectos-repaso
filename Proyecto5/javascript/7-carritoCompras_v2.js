const carrito = document.querySelector("#carrito");
const btnsFruta = document.querySelectorAll(".card .btn");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();

// console.log(carrito)
// console.log(btnsFruta)
// console.log(template)

//almacenamos los productos
const carritoObj = [];

//metodo para añadir productos
const agregarCarrito = (e) => {
    // console.log(e.target.dataset.fruta)

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }

    //verificar si existe el producto dentro del array
    const indice = carritoObj.findIndex((item) =>
        item.id === producto.id);

    //agregar al carrito
    if (indice === -1 ) {
        carritoObj.push(producto);
    } else {
        carritoObj[indice].cantidad ++;
    }
    
    pintarCarrito(carritoObj);
} 


//pintamos el carrito en el template
const pintarCarrito = (array) => {

    //para que no se repitan los productos c/vez que se presiona el boton
    carrito.textContent = "";

    //para poder transformar el objeto en un array para poder recorrerlo con un forEach
    array.forEach(item => {
        //clonamos el template
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;

        //añadimos el clone al fragment
        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment);
}

//recorremos los botones y le agregamos el evento para añadir productos
btnsFruta.forEach((btn) => {
    btn.addEventListener("click", agregarCarrito);
})