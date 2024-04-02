const express = require('express');
const router = express.Router();

router.get('/login', (req,res) =>
{
    //renderizamos el home, que tiene la extension .hbs
    res.render('login');
})

module.exports = router;