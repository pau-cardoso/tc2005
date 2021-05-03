// Librerias
const express = require('express');
const router = express.Router();

router.get('/precios', (request, response, next) => {
    response.render('guarderiaPrecios', {
        titulo: 'Precios',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

router.use( '/', (request, response, next) => {
    response.render('guarderia', {
        titulo: 'Guarderia Owa Owa',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

module.exports = router;