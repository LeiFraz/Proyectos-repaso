
document.addEventListener("DOMContentLoaded", () => {

    /* SELECCIONA POR ID */
    console.log(document.getElementById("tituloLorem").textContent);
    
    /* SELECCIONA UN ID, CLASE, ETIQUETA O VIAJAR A UN NODO*/
    //querySelector y querySelectorAll se utiliza como el css
    console.log(document.querySelector("#tituloLorem"));
    console.log(document.querySelector(".text-primary"));
    console.log(document.querySelector("h1"));

    console.log(document.querySelectorAll(".text-danger"));
    console.log(document.querySelectorAll(".container .text-danger"));
});