function mostrarCampos()
{
    /* llamado al select y los div's */
    let select = document.getElementById('servicios');
    let cAnimales = document.getElementsByClassName('campoAnimales');
    let cAcuario = document.getElementsByClassName('campoAcuario');

    /* borrar atributo required de los elementos del div.campoAnimales*/
    let cantidadAnimales = document.getElementById('cantidadAnimales');
    let raza = document.getElementById('raza');
    let peso = document.getElementById('peso');
    let animalDomestico = document.getElementById('animalDomestico');
    let animalAgresivo = document.getElementById('animalAgresivo');
    let clienteSi = document.getElementById('clienteSi');
    let sucursalEntrega = document.getElementById('sucursalEntrega');
    let sucursalRetiro = document.getElementById('sucursalRetiro');

    cantidadAnimales.removeAttribute('required');
    raza.removeAttribute('required');
    peso.removeAttribute('required');
    animalDomestico.removeAttribute('required');
    animalAgresivo.removeAttribute('required');
    clienteSi.removeAttribute('required');
    sucursalEntrega.removeAttribute('required');
    sucursalRetiro.removeAttribute('required');

    // /* borrar atributo required de los elementos del div.campoAcuario*/
    let altoAcuario = document.getElementById('altoAcuario');
    let anchoAcuario = document.getElementById('anchoAcuario');
    let cantPeces = document.getElementById('cantPeces');
    let domicilioAcuario = document.getElementById('domicilioAcuario');

    altoAcuario.removeAttribute('required');
    anchoAcuario.removeAttribute('required');
    cantPeces.removeAttribute('required');
    domicilioAcuario.removeAttribute('required');


/* vemos que selecciono el usuario, de pasada repaso la estructura switch */
    switch (select.value) {
        case '':
            /* en caso de que cambie de seleccion y vuelva a la que es por defecto */
            cAnimales[0].setAttribute('style','display: none');
            cAnimales[1].setAttribute('style', 'display: none');
            cAcuario[0].setAttribute('style', 'display: none');
            cAcuario[1].setAttribute('style', 'display: none');
            break;
        case '0':
        case '1':
        case '2': 
        case '3':
            /* las opciones del 0 al 3 son si elige animales */

            /* agarrar todos los div con la clase campoAnimales y mostramos,
            y a su vez ocultamos el de campoAcuario*/
            cAnimales[0].setAttribute('style', 'display: block');
            cAnimales[1].setAttribute('style', 'display: block');
            cAcuario[0].setAttribute('style', 'display: none');
            cAcuario[1].setAttribute('style', 'display: none');

            /* seteamos el campo required en verdadero */
            cantidadAnimales.setAttribute('required', true);
            raza.setAttribute('required', true);
            peso.setAttribute('required', true);
            animalDomestico.setAttribute('required', true);
            animalAgresivo.setAttribute('required', true);
            clienteSi.setAttribute('required', true);
            sucursalEntrega.setAttribute('required', true);
            sucursalRetiro.setAttribute('required', true);
            break;
        case '4':
            /* en caso de que elija la opcion de limpieza de acuario */

            /* agarrar todos los div con la clase campoAcuario y mostrarlos,
            y a su vez ocultamos el de campoanimales*/
            cAcuario[0].setAttribute('style', 'display: block');
            cAcuario[1].setAttribute('style', 'display: block');
            cAnimales[0].setAttribute('style','display: none');
            cAnimales[1].setAttribute('style', 'display: none');

            /*seteamos el campo required en verdadero */
            altoAcuario.setAttribute('required', true);
            anchoAcuario.setAttribute('required', true);
            cantPeces.setAttribute('required', true);
            domicilioAcuario.setAttribute('required', true);
            break;
        default:
            break;
    }

}

function verificar()
{
    /* obtenemos los div*/
    let cAnimales = document.getElementsByClassName('campoAnimales');
    let cAcuario = document.getElementsByClassName('campoAcuario');

    /* se utilizan varias veces*/
    let cantidadAnimales = document.getElementById('cantidadAnimales');
    let peso = document.getElementById('peso');
    let altoAcuario = document.getElementById('altoAcuario');
    let anchoAcuario = document.getElementById('anchoAcuario');
    
    /*chequeamos cual de los dos campos esta visiblesi el de animales o el de acuario */
    if(cAnimales[0].checkVisibility())
    {
        /* realizar la verificacion de los campos */
        let raza = document.getElementById('raza');

        if(parseInt(cantidadAnimales.value) >= 4 || parseInt(cantidadAnimales.value) < 1)
        {
            alert('la cantidad de animales a ingresar debe ser de 1 a 3');
            return false;
        }
        if(raza.value.length < 4)
        {
            alert('la raza tiene que tener mas de 4 caracteres');
            return false;
        }
        if(parseInt(peso.value) > 60 || parseInt(peso.value) == 0){
            alert('El peso del animal debe ser superior a 0 y menor o igual a 60Kg')
            return false;
        }

    }else if(cAcuario[0].checkVisibility())
    {
        
        let cantPeces = document.getElementById('cantPeces');
        let domicilioAcuario = document.getElementById('domicilioAcuario');

        if(parseInt(altoAcuario.value) > 10 || parseInt(anchoAcuario.value) >10)
        {
            alert('El alto y ancho del acuario debe ser como maximo de 10x10');
            return false;
        }
        if(parseInt(cantPeces.value) > 12)
        {
            alert('La cantidad de peces dentro del acuario debe ser menor a 13')
            return false;
        }
        if (domicilioAcuario.value.length < 7) {
            alert('ingrese un domicilio con más de 7 caracteres');
            return false;
        }
    }else{
        /*en caso de que falle algo regresamos falso para que no se envie
        esto por si el usuario intenta sacar el atributo required del select inicial */
        return false;
    }

    /*realizamos los calculos de lo que tendria que pagar */
    let select = document.getElementById('servicios').value;
    let sumatoria= 0;
    switch(select)
    {
        case '0':
            
            /* tiene que ser el peso de cada animal, aun no esta programado */
            //'peluqueria 300, hasta 25Kg. 28'
            sumatoria = 300 * parseInt(cantidadAnimales.value);
            if(parseInt(peso.value) > 25)
            {
                sumatoria += 28*parseInt(cantidadAnimales.value);
            }
             
            break;
        case '1':
            /*baño 250, 35kg. 15*/
            sumatoria = 250 * parseInt(cantidadAnimales.value);
            if(parseInt(peso.value) > 35)
            {
                sumatoria += 15*parseInt(cantidadAnimales.value);
            }
            break;
        case '2':
            'vacunacion 150, 55 por la vacuna'
            sumatoria = 150* parseInt(cantidadAnimales.value) + 55;
            break;
        case '3':
            '180 por mascota'
            sumatoria = 180 * parseInt(cantidadAnimales.value);
            break;
        case '4':
            '125 por metro cuadrado'
            sumatoria = 125 * (parseInt(altoAcuario.value) * parseInt(anchoAcuario.value));
            break;
        default:
            break;
    }
    alert(`se envio correctamente el formulario. \n El total a pagar es de ${sumatoria}`);
    return true;
}