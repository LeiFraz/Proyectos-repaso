/*  COMANDOS:
    ---------
    NODE = para ejecutar algun archivo (node app)
    NPM INIT = para iniciar el package.json
    NPM I = para detectar las dependencias del proyecto 
    NPM I DEPENDENCIA = para instalar una dependencia (npm i moment@2.19.1 - una version especifica)
    NPM UPDATE = para actualizar todas las dependencias (npm update moment - una dependencia en especifico)
    NPM UNINSTALL = para desinstalar una dependencia (nop uninstall moment)
    NPM LIST -G = lista de todos los programas GLOBALES instalados (npm list -g)
    NPM I -G COWSAY = instala una dependencia global de una vaca que habla (npm i -g cowsay)
    NPX COWSAY TEXTO = busca en el servidor la dependencia y lo muestra, no lo instala 
                        (npx cowsay vengo del Server)
    NPM I -D NODEMON = dependencia de desarrollo, sirve para que el servidor escuche/preste
                        atención a los cambios(npm i -D nodemon)
    NPM RUN START = ejecuta el script START en el package.json
    */

const {empleados, salarios} = require('./empleados');

empleados.forEach(e => 
    {
        console.log(`${e}`)
    })
salarios.forEach(s => 
    {
        console.log(`${s}`)
    });
    
        