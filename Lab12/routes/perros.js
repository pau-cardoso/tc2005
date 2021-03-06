// Librerias
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

const perros = ['Boyo', 'Mina', 'Luke', 'Sam', 'Jade', 'Kira'];

router.get('/nuevo-perro', (request, response, next) => {
    response.render('nuevoPerro');
});

router.post('/nuevo-perro', (request, response, next) => {
    perros.push(request.body.nombre);
    response.redirect('/perros');
});

router.use( '/', (request, response, next) => {
    response.render('perros', {perros: perros});
})

module.exports = router;