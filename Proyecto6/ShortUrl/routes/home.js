const express = require('express');
const router = express.Router();

//importamos la funcion de las url que nos manda el controlador del home
const { leerUrls, agregarUrl} = require('../controllers/homeController');

router.get('/', leerUrls);
router.post('/', agregarUrl);

module.exports = router;