const cards = document.querySelector("#card-dinamicas");
const templateCard = document.querySelector("#template-card").content;

/* Una vez cargue el sitio por completo recien hace la busqueda */
document.addEventListener("DOMContentLoaded", () =>
{
    fetchData();
});

/* Buscamos en la API la información */
const fetchData = async () => {
    try{
        loadingData(true);

        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        
        pintarCard(data);
    }catch(e){
        console.log(e)
    }finally{
        loadingData(false)
    }
}

/* Colocamos la información en el template y luego lo ponemos en el documento */
const pintarCard = (data) => {
    
    const fragment = document.createDocumentFragment();

    data.results.forEach(item => {
        console.log(item)
        const clone = templateCard.firstElementChild.cloneNode(true);
        //clone.querySelector('img').src = item.image;
        clone.querySelector('.card-img-top').setAttribute('src',item.image);
        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;

        fragment.appendChild(clone);
    });

    cards.appendChild(fragment);
}

/* Mostramos u Ocultamos el texto "cargando" con su spinner*/
const loadingData = (estado) => {
    const loading = document.querySelector("#loading");

    if(estado)
    {
        loading.classList.remove("d-none");
    }else{
        loading.classList.add("d-none");
    }
}