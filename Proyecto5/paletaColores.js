const inputColor = document.querySelector("#inputColor");
const btnVisualizar = document.querySelector("#btnVisualizar");
const textHexa = document.querySelector("#textHexa");
const fondoHexa = document.querySelector("#fondoHexa");

btnVisualizar.addEventListener("click", () => {
    textHexa.textContent = inputColor.value;
    fondoHexa.style.backgroundColor = inputColor.value;

    //api del navegador para copiar el codigo hexadecimal en el portapapeles
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
})
