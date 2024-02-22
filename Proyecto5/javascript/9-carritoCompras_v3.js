const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');
const fragment = document.createDocumentFragment();

//creamos los eventos, con la delegacion de eventos
document.addEventListener("click", (e) =>
{
    // console.log(e.target.matches('.card .btn-outline-primary'))
    if(e.target.matches('.card .btn-outline-primary'))
    {
        // console.log("añadir al carrito")
        agregarCarrito(e);
    }

    //verificamos si existe el boton añadido dinamicamente desde el template
    // console.log(e.target.matches(".list-group-item .btn-success"))
    if(e.target.matches("#carrito .list-group-item .btn-success")){
        btnAumentar(e)
    }

    if(e.target.matches("#carrito .list-group-item .btn-danger")){
        btnDisminuir(e)
    }
})

//almacenamos los productos
let carritoObj = [];

//metodo para añadir productos
const agregarCarrito = (e) => {
    // console.log(e.target.dataset.fruta)
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    }
    
    //verificar si existe el producto dentro del array
    const indice = carritoObj.findIndex((item) =>
        item.id === producto.id);

    //agregar al carrito
    if (indice === -1 ) {
        carritoObj.push(producto);
    } else {
        carritoObj[indice].cantidad ++;
        // carritoObj[indice].precio += producto.precio;
        //  console.log(carritoObj[indice].precio)
    }
    
    pintarCarrito();
} 


//pintamos el carrito en el template
const pintarCarrito = () => {

    //para que no se repitan los productos c/vez que se presiona el boton
    carrito.textContent = "";

    //para poder transformar el objeto en un array para poder recorrerlo con un forEach
    carritoObj.forEach(item => {
        //clonamos el template

        // El firstElementChild tira error por que tenemos dos hijos en el template, 2 li
        // const clone = template.content.firstElementChild.cloneNode(true);
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent = item.precio * item.cantidad;

        //añadimos a los botones de agregar/quitar su dataset de manera dinamica
        clone.querySelector(".btn-danger").dataset.id = item.id;
        clone.querySelector(".btn-success").dataset.id = item.id;

        //añadimos el clone al fragment
        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment);

    pintarFooter();
}

const pintarFooter = () => {
    // console.log("pintar footer");
    footer.textContent = "";

    let total = carritoObj.reduce((acc, valorActual) => acc + (valorActual.precio*valorActual.cantidad), 0)
    // carritoObj.forEach((item) =>
    // {
    //     contador += (item.precio * item.cantidad)
    // })

    if(total > 0)
    {
        const clone = templateFooter.content.firstElementChild.cloneNode(true);
        clone.querySelector(".card .lead span").textContent = total;
        footer.appendChild(clone);
    }else{
        footer.textContent = "";
    }
    
}

const btnAumentar = (e) =>
{
    console.log("agrego una ", e.target.dataset.id);

    carritoObj = carritoObj.map((item) => {
        if(item.id === e.target.dataset.id){
            item.cantidad++;
        }
        return item
    });

    pintarCarrito();
}

const btnDisminuir = (e) =>
{
    console.log("saco una ", e.target.dataset.id);

    carritoObj = carritoObj.filter((item) => {
        if(item.id === e.target.dataset.id){
            if(item.cantidad > 0)
            {
                item.cantidad--;

                if(item.cantidad === 0)
                {
                    return
                }
            }
            
        }
        return item
        
    });

    pintarCarrito();
}