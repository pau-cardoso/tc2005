// Librerias
const express = require('express');
const router = express.Router();

router.get('/precios', (request, response, next) => {
    response.render('guarderiaPrecios');
});

router.use( '/', (request, response, next) => {
    response.render('guarderia');
});

module.exports = router;