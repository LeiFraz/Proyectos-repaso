const mongoose = require('mongoose');
//como instalamos la dependencia nanoid la utilizamos, nos genera un string aleatorio.
const { nanoid } = require('nanoid');
//usamos la clase Schema dentro de mongoose
const { Schema } = mongoose;


//creamos el esquema que queremos en la base de datos, serían los campos que van dentro de una tabla
const urlSchema = new Schema({
    origin: {
        type: String,
        unique: true,
        required: true
    },
    shortURL: {
        type: String,
        unique: true,
        required: true,
        default: nanoid(6)
    }
})

//Creamos el modelo y lo exportamos, le indicamos como se va a llamar la tabla y le pasamos el esquema
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;