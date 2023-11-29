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



    switch (select.value) {
        case '':
            cAnimales[0].setAttribute('style','display: none');
            cAnimales[1].setAttribute('style', 'display: none');
            cAcuario[0].setAttribute('style', 'display: none');
            cAcuario[1].setAttribute('style', 'display: none');
            break;
        case '0':
        case '1':
        case '2': 
        case '3':
            /* agarrar todos los div con la clase campoAnimales */
            cAnimales[0].setAttribute('style', 'display: block');
            cAnimales[1].setAttribute('style', 'display: block');
            cAcuario[0].setAttribute('style', 'display: none');
            cAcuario[1].setAttribute('style', 'display: none');

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
            /* agarrar todos los div con la clase campoAcuario */
            cAcuario[0].setAttribute('style', 'display: block');
            cAcuario[1].setAttribute('style', 'display: block');
            cAnimales[0].setAttribute('style','display: none');
            cAnimales[1].setAttribute('style', 'display: none');

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
    /* obtenemos los div */
    let cAnimales = document.getElementsByClassName('campoAnimales');
    let cAcuario = document.getElementsByClassName('campoAcuario');
    
    /* realizar la verificacion de los campos */
    if(cAnimales[0].checkVisibility())
    {
        let cantidadAnimales = document.getElementById('cantidadAnimales');
        let raza = document.getElementById('raza');
        let peso = document.getElementById('peso');

        if(parseInt(cantidadAnimales.value) >= 4 )
        {
            alert('la cantidad de animales a ingresar debe ser de max. 3');
            return false;
        }
        if(raza.value.length < 4)
        {
            alert('la raza tiene que tener mas de 4 caracteres');
            return false;
        }
        if(parseInt(peso.value) > 60){
            alert('El peso del animal debe ser menor o igual a 60Kg')
            return false;
        }

    }else if(cAcuario[0].checkVisibility())
    {
        let altoAcuario = document.getElementById('altoAcuario');
        let anchoAcuario = document.getElementById('anchoAcuario');
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
    }
    return true;
}