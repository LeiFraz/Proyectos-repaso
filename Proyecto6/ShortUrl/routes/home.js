const express = require('express');
const router = express.Router();

router.get('/', (req, res) => 
{
    const urls = [
        { origin: 'www.miurls.com/1', shortUrl: 'jskldfa1'},
        { origin: 'www.miurls.com/2', shortUrl: 'jskldfa2'},
        { origin: 'www.miurls.com/3', shortUrl: 'jskldfa3'}
    ]
    res.render('home', {urls});
})

module.exports = router;