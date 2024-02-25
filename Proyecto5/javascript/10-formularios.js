/*EXPRESIONES REGULARES = /patron/flag */

/*  i = ignora mayuscar y minusculas, es indiferente 
    g = busqueda global, sigue buscando coincidencias en vez de pararse al encontrar una
    m = multilinea, permite a ^ y $ tratar los finales de linea \r o \n
    [] = caracteres especiales
    | = establece alternativa, lo que esta a la izquierda o lo que esta a la derecha
    [0-9] = un digito del 0 al 9
    [A-Z] = una letra mayuscula de la A a la Z
    [a-z] = una letra minuscula de la A a la Z
    [A-Za-z0-9] = caracter alfanumerico (letra Mayuscula, Minuscula o digito)
    ^\d+$ = solo digitos
    ^[a-zA-Z]*$ = solo letras
    [a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5} = para emails*/

/*NOTACION LITERAL*/
// const regExp = /leonardo|[ue]/
// const regExp = /^\d+$/
const regExp = /^[a-zA-Z]*$/

/*NOTACION DE OBJETO*/
// const regExpObj = new RegExp("leonardo", "i");

//metodo test, busca la expresion dentro de la cadena, si algo coincide devuelve true.
// console.log(regExp.test("jkvakr-leonardo-asdlk u-e"));
// console.log(regExp.test("06530"));
// console.log(regExp.test("asdkejoq"))

/* FORMULARIO */
const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#inputNombre');
const inputEmail = document.querySelector('#inputEmail');
const alertNombre = document.querySelector('#alertNombre');
const alertEmail = document.querySelector('#alertEmail');
const alertExito = document.querySelector('#alertExito');


/* EXPRESION REGULAR */
const regNombre = /^[a-zA-Z]*$/;
const regEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-z0-9_-]+([.][a-z0-9_-]+)*[.][a-z]{2,5}/


/* MOSTRAR ALERTA EXITO */
const mostrarAlertaExito = () => 
{
    alertExito.classList.remove('d-none');
    alertExito.textContent = "Formulario enviado con éxito";
}

/* MOSTRAR ALERTA ERRORES */
const mostrarAlertaErrores = (errores) =>
{
    errores.forEach(item => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
    });
}

/* EVENTO DEL BOTON DEL FORMULARIO */
formulario.addEventListener('submit', e => 
{
    e.preventDefault();

    alertExito.classList.add('d-none');

    /* CREAMOS EL OBJETO DE ERRORES */
    const errores = []
    
    // console.log(inputNombre.value);
    // console.log(inputEmail.value);
    
    //verifica si hay caracteres que sean espacios
    // console.log(!inputNombre.value.trim())

    if(!regNombre.test(inputNombre.value) || !inputNombre.value.trim())
    {
        inputNombre.classList.add('is-invalid')
        //console.log("Ingrese un nombre válido")
        errores.push({
            tipo: alertNombre,
            msg: "Formato no válido en el campo nombre, solo letras"
        })   
    }else{
        inputNombre.classList.add('is-valid');
        inputNombre.classList.remove('is-invalid');
        alertNombre.classList.add('d-none');
    }

    if (!regEmail.test(inputEmail.value) || !inputEmail.value.trim())
    {
        inputEmail.classList.add('is-invalid')
        //console.log("Ingrese un correo válido")
        errores.push({
            tipo: alertEmail,
            msg: "Formato no válido en el campo email"
        })
    }else{
        inputEmail.classList.add('is-valid');
        inputEmail.classList.remove('is-invalid');
        alertEmail.classList.add('d-none');
    }

    if(errores.length !== 0)
    {
        mostrarAlertaErrores(errores);
        return
    }

    console.log("Formulario enviado");
    mostrarAlertaExito();
})
