// Librerias
const express = require('express');
const router = express.Router();

router.get('/precios', (request, response, next) => {
    response.render('guarderiaPrecios', {
        titulo: 'Precios'
    });
});

router.use( '/', (request, response, next) => {
    response.render('guarderia', {
        titulo: 'Guarderia Owa Owa'
    });
});

module.exports = router;