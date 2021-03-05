// Librerias
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

router.use(bodyParser.urlencoded({extended: false}));

const perros = ['Boyo', 'Mina', 'Luke', 'Sam', 'Jade', 'Kira'];

perros.forEach(perro => {
    fs.appendFileSync('perros.txt', perro+"\n");
});

router.get('/nuevo-perro', (request, response, next) => {
    response.send('<h1>Añadir perro</h1><form action="nuevo-perro" method="POST"><input type="text" name="nombre"><input type="submit" value="Registrar perro en guarderia"></form>');
});

router.post('/nuevo-perro', (request, response, next) => {
    perros.push(request.body.nombre);
    fs.appendFileSync('perros.txt', request.body.nombre+"\n");
    response.redirect('/perros');
});

router.use( '/', (request, response, next) => {
    let html = '<h1>Perros en guarderia</h1><ul>';
    perros.forEach(perro => {
        html += '<li>' + perro + '</li>';
    });
    html += '</ul>'
    response.send(html);
})

module.exports = router;