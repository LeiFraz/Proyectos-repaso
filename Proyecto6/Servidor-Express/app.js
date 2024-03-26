const express = require('express');
const app = express();
const port = 5000;

/* MIDDLEWARE */
//para utilizar la carpeta public que contiene todo lo del Frontend
app.use(express.static('public'));
//para poder recibir los datos enviados desde un formulario con POST(que van al body)
app.use(express.urlencoded({extended: true}));


/* RUTAS */ 
//el '/' es la principal (localhost:5000)
app.get('/', (req,res) => {
    res.send('enviando la respuesta desde express')
});

//(localhost:5000/prueba)
app.get('/prueba', (req, res) =>
{
    res.send('este es un sitio de prueba');
})

//con get se utiliza el REQ.QUERY
// app.get('/formulario', (req, res) =>
// {
//     console.log(req.query);
//     res.send('formulario enviado... Bienvenido ' + req.query.nombre + "!!!")
// })

//con post se utiliza REQ.BODY
app.post('/formulario', (req, res) =>
{
    // console.log(req.body);
    const {nombre, apellido} = req.body;

    // if(!nombre || !apellido) return res.send('no existen los datos');
    //podemos redirigir la respuesta a otra pagina
    if(!nombre || !apellido) return res.redirect('/error.html');

    res.send('formulario enviado... Bienvenido ' + req.body.nombre + "!!!")
})

app.listen(port, ()=> console.log(`use el puerto ${port}`));