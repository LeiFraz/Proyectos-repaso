function crearNumeroRandom() {
    /* llamado a los inputs que se utilizan */
    let inputOculto = document.getElementById('numeroRandom');
    let intento = document.getElementById('intento');
    let resultado = document.getElementById('resultado');

    /* Habilitar y Deshabilitar botones e input*/
    let btnJugar = document.getElementById('btnJugar');
    let btnAdivinar = document.getElementById('btnAdivinar');
    let btnRendirse = document.getElementById('btnRendirse');
    let inputNumero = document.getElementById('numero');

    btnJugar.setAttribute('disabled',true);
    btnAdivinar.removeAttribute('disabled');
    btnRendirse.removeAttribute('disabled');
    inputNumero.removeAttribute('disabled');

    /* quitar estilo del resultado*/
    resultado.classList.remove('ganaste');
    resultado.classList.remove('perdiste');

    /* crear numero random */
    let numero = Math.round(Math.random()*100);
    inputOculto.value = numero;

    /* seteo los valores por defecto al iniciar el juego */
    intento.innerHTML = 0;
    inputNumero.value = '';
    resultado.innerHTML = '';

}

function terminarJuego() {
    
    let intento = document.getElementById('intento');
    let resultado = document.getElementById('resultado');
    let inputNumero = document.getElementById('numero');
    let inputOculto = document.getElementById('numeroRandom');
    
    intento.innerHTML = '';
    resultado.innerHTML = `El número era el ${inputOculto.value}.`;
    resultado.classList.add('perdiste');
    inputNumero.value = '';

    /* Habilitar y Deshabilitar botones y error*/
    let btnJugar = document.getElementById('btnJugar');
    let btnAdivinar = document.getElementById('btnAdivinar');
    let btnRendirse = document.getElementById('btnRendirse');
    let error = document.getElementById('error');

    btnJugar.removeAttribute('disabled');
    btnAdivinar.setAttribute('disabled',true);
    btnRendirse.setAttribute('disabled',true);
    inputNumero.setAttribute('disabled',true);
    error.setAttribute('style','display: none');
    
}

function adivinarNumero() {
    /* inputs */
    let inputNumero = document.getElementById('numero');
    let inputOculto = document.getElementById('numeroRandom');
    let intento = document.getElementById('intento');
    let resultado = document.getElementById('resultado');

    /* botones */
    let btnAdivinar = document.getElementById('btnAdivinar');
    let btnRendirse = document.getElementById('btnRendirse');
    let btnJugar = document.getElementById('btnJugar');

    /* error */
    let error = document.getElementById('error');
    
    /* se verifica que ingrese un numero */
    if (inputNumero.value == '') {
        error.innerHTML = 'Debe ingresar un número';
        error.setAttribute('style','display: block');
    }else{
        
        /* condiciones para ver si acierta o no */
        error.setAttribute('style','display: none');
        if(parseInt(inputNumero.value) > parseInt(inputOculto.value))
        {
            resultado.innerHTML = `El número ${inputNumero.value} es mayor!!!`;
            intento.innerHTML = parseInt(intento.innerHTML) + 1;

        }else if(parseInt(inputNumero.value) < parseInt(inputOculto.value))
        {
            resultado.innerHTML = `El número ${inputNumero.value} es menor!!!`;
            intento.innerHTML = parseInt(intento.innerHTML) + 1;
            
        }else{
            resultado.innerHTML = `Felicitaciones!!! Adivinsate el número.`;
            resultado.classList.add('ganaste');

            btnAdivinar.setAttribute('disabled', true);
            btnRendirse.setAttribute('disabled',true);
            btnJugar.removeAttribute('disabled');
        }
    }

    /* verificamos la cantidad de intentos */
    if(parseInt(intento.innerHTML) == 10){
        resultado.innerHTML = `Perdiste!!! el número era el ${inputOculto.value}.`;
        resultado.classList.add('perdiste');

        btnAdivinar.setAttribute('disabled', true);
        btnRendirse.setAttribute('disabled',true);
        btnJugar.removeAttribute('disabled');

    }

}