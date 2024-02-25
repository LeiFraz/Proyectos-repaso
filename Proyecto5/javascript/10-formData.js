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