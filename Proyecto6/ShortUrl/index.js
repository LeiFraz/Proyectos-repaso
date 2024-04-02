const express = require('express')
const app = express();
//llamamos a la variable de entorno con el process.env
const port = process.env.PORT || 5000;

//
require('dotenv').config();
require('./database/db');

/* TRABAJAR CON SISTEMAS DE PLANTILLAS */
//create, recibe las configuraciones de express-handlebars
const {create} = require('express-handlebars');

//renombramos la extension a .hbs para no tener que escribirlo por completo handlebars
const hbs = create({
    extname: '.hbs',
    partialsDir: ["views/components"]
})

//tomamos el motor de plantillas
app.engine('.hbs', hbs.engine);
//la extension va a ser .hbs
app.set('view engine', '.hbs');
//y que va a estar dentro de la carpeta VIEWS
app.set('views', './views');


/* MIDDLEWARE: interceptan la info antes de la respuesta del cliente */
app.use("/", require('./routes/home'));
app.use("/auth", require('./routes/auth'));
app.use(express.static(__dirname + '/public'));

/* PUERTO */
app.listen(port, () =>
{
    console.log("funcionando en el puerto " + port)
})