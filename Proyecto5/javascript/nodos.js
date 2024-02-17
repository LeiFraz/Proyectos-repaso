const lista = document.querySelector("#lista");
const lista2 = document.querySelector("#lista2");
const lista3 = document.querySelector("#lista3");
const lista4 = document.querySelector("#lista4");

const arrayPaises = ["Argentina", "Chile", "Brazil", "Mexico", "Ecuador"];

const fragment = document.createDocumentFragment();
/* LISTA 1 */
/*FRAGMENT = evitamos el reflow en el bucle del forEach

REFLOW = seria cuando se escribe/borra continuamente el DOM, cuando se utiliza el textContent/innerHtml
y luego el appendChild... en este caso es mejor utilizar TEXTCONTENT por motivos de seguridad*/
// const fragment = new DocumentFragment;

arrayPaises.forEach((pais) => {
    const li = document.createElement("li");
    li.textContent = pais;

    /* si se quiere añadir en orden inverso, el ultimo va primero y el primero va ultimo */
    // const referenceNode = fragment.firstChild;
    // fragment.insertBefore(li, referenceNode);

    fragment.appendChild(li);
});

lista.appendChild(fragment);


/* LISTA 2 */

/*<li class="list">
    <b>Pais: </b>
    <span class="text-primary"> aqui va el pais</span>
</li> */


arrayPaises.forEach((pais) => {
    const li = document.createElement("li");
    li.className = "list";

    const b = document.createElement("b");
    b.textContent = "Pais: ";

    const span = document.createElement("span");
    span.className = "text-primary";
    span.textContent = pais;

    li.appendChild(b);
    li.appendChild(span);

    fragment.appendChild(li);
});

lista2.appendChild(fragment);

/* LISTA 3 */

let template = "";

arrayPaises.forEach((pais) => {
    template += `<li class="list">
    <b>Pais: </b>
    <span class="text-primary"> ${pais}</span>
    </li>`;
});

lista3.innerHTML = template;

/* LISTA 4 */

//obtenemos el TEMPLATE
const liTemplate = document.querySelector("#liTemplate");

//creamos un evento, si agregamos e como parametro, le podemos poner en el log, e.target y obtener el elemento
const clickPaises = (e) => console.log("hiciste click en el pais", e.target)

arrayPaises.forEach((pais) => {
    //clonamos el template, y se añade el firstElementChild por si hay o se añaden eventos 
    const clone = liTemplate.content.firstElementChild.cloneNode(true);

    //dentro del clon, buscamos la etiqueta span y le agregamos el pais del arreglo
    clone.querySelector("span").textContent = pais;

    clone.addEventListener(("click"), clickPaises);

    //ponemos el clon dentro del fragment para evitar el reflow
    fragment.appendChild(clone);

});

lista4.appendChild(fragment);