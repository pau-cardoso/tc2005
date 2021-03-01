const { response, request } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});

app.use( (request, response, next) => {
    console.log('Middleware!');
    next(); // Le permite a la peticion avanzar hacia el siguiente middleware
});

app.use( '/personajes', (request, response, next) => {
    response.send('<h1>Personajes</h1>');
})

app.use( '/', (request, response, next) => {
    response.send('<h1>Hola mundo</h1>');
})

app.use( (request, response, next) => {
    console.log('Otro middleware!');
    response.send('Hola mundo!'); // manda la respuesta
});

app.listen(3000);