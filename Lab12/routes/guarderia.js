// Librerias
const express = require('express');
const router = express.Router();

router.get('/precios', (request, response, next) => {
    let html = '<h1>Precios</h1>';
    html += '<ul><li><strong>Por noche:</strong> $200</li>';
    html += '<li><strong>Baño:</strong> $150</li>';
    html += '<li><strong>Peluqueria:</strong> $225</li>';
    html += '<li><strong>Pool party:</strong> $50 la entrada</li>';
    html += '</ul>';
    response.send(html);
});

router.use( '/', (request, response, next) => {
    let html = '<h1>Guarderia Owa Owa</h1>';
    html += '<p>Somos una guarderia para perros fundada en el 2015.</p>'
    html += '<p>Somos reconocidos por ser la guarderia favorita de Pudgy</p>'
    html += '<h3>Bienvenidos!</h3>'
    response.send(html);
});

module.exports = router;