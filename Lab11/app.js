const { response, request } = require('express');
const express = require('express');
const app = express();
const rutasPerros = require('./routes/perros');
const rutasGuarderia = require('./routes/guarderia');

app.use('/perros', rutasPerros);
app.use('/guarderia', rutasGuarderia);

app.use( '/home', (request, response, next) => {
    let html = '<h1>Bienvenido a la guarderia de perros</h1>';
    html += '<h3>Las rutas son:</h3>';
    html += '<p><ul><li>/home</li><li>/perros</li><li>/perros/nuevo-perro</li><li>/guarderia</li><li>/guarderia/precios</li></ul></p>';
    response.send(html);
});

app.use( (request, response, next) => {
    response.status(404);
    response.send('Error 404: Page not found');
});

app.listen(3000);