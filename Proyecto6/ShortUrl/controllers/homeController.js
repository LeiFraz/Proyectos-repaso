/*creamos la carpeta controlador para separar las funcionalidades*/

const Url = require('../models/Url');

//la funcion que estaba en el app.get('/', ) lo sacamos y lo colocamos aqui
const leerUrls = async(req,res) =>
{
    const urls = [
        { origin: 'www.miurls.com/1', shortUrl: 'jskldfa1'},
        { origin: 'www.miurls.com/2', shortUrl: 'jskldfa2'},
        { origin: 'www.miurls.com/3', shortUrl: 'jskldfa3'}
    ]
    res.render('home', {urls});
}

const agregarUrl = async(req,res) => {
    const {origin} = req.body;
    
    //para añadir contenido se necesita el modelo que tenemos en models/Url.js
    try {

        //le tenemos que pasar el origin y el shorturl
        const url = new Url({origin: origin});
        //lo guardamos en la base de datos
        await url.save();

        // console.log(url);
        res.redirect('/');
    } catch (error) {
        console.log(error)
        res.send('error algo falló');
    }
};

//exportamos para que en la ruta home se utilice
module.exports = {
    leerUrls, agregarUrl
}