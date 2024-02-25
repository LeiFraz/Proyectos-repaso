/* FORM DATA = nos ayuda a capturar facilmente los inputs, en este caso de un formulario.
    Lo malo de esto, es que no se pueden añadir clases a los inputs, para eso se debe si o si
    utilizar el querySelector o el getElementById */
const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', (e) =>
{
    e.preventDefault()

    //obtenemos todos los inputs del formulario
    const inputs = new FormData(formulario);

    for(let item of inputs)
    {
        console.log(item)
    }

    console.log(inputs.get("inputNombre"));
    console.log(inputs.get("inputEmail"));
})