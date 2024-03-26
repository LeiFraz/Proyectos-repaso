const express = require('express')
const app = express();
const port = 5000;

//utilizo fileSystem
const fs = require('fs');

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res)=>
{
    res.send('Esta es la pagina de inicio desde express');
});

app.post('/formulario', (req,res)=>
{
    const {nombre, apellido} = req.body;

    if(!nombre || !apellido) return res.redirect('/error.html');

    fs.writeFile(`archivos/${nombre}.txt`, apellido, e =>
    {
        if (e) return res.send('No se pudo crear el archivo');

        res.send('Archivo creado');
        //para descargar un archivo, se le pasa la ruta absoluta
        //res.download(___dirname + `/archivos/${nombre}.txt`)
    })
})

app.listen(port, () =>
{
    console.log(`Se esta corriendo el server en el puerto ${port}`);
})
