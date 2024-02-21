const cajitas = document.querySelectorAll('.border');

/* STOP PROPAGATION = evita que los demas eventos se activen, frena la propagación del evento */
// cajitas.forEach((caja) => caja.addEventListener("click", (e) => {
    
//     e.stopPropagation();
//     console.log("me diste click y use STOP PROPAGATION")
//     }
//     ));

const formulario = document.querySelector('form');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("me hiciste click y use PREVENT DEFAULT")
})

/* Delegación de Eventos */

//puede seleccionarse un contenedor como el propio documento si es necesario
const document = document.querySelector('.container');

document.addEventListener("click", (e) =>
{
    //Delegacion de eventos con ID
    if(e.target.id === "padre"){
        console.log("hiciste click al padre con el ID")
    }

    //Delegacion de eventos con MATCHES
    if(e.target.matches(".border-secondary"))
    {
        console.log("hiciste click al hijo con MATCHES")
    }

    //Delegacion de eventos con DATASET
    
    if(e.target.dataset.div === "divNieto")
    {
        console.log("hiciste click al nieto con DATASET")
    }

})