const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
var cookieParser = require('cookie-parser');

const rutasPerros = require('./routes/perros');
const rutasGuarderia = require('./routes/guarderia');
const rutasUsers = require('./routes/users');

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/perros', rutasPerros);
app.use('/guarderia', rutasGuarderia);
app.use('/users', rutasUsers);

app.use( '/home', (request, response, next) => {
    response.render('Home', {
        titulo: 'Home'
    });
});

app.use( '/sobremi', (request, response, next) => {
    response.render('Lab1');
});

app.use( '/', (request, response, next) => {
    response.render('pregunta', {
        titulo: 'Preguntas'
    });
});

app.use( (request, response, next) => {
    response.status(404);
    response.send('Error 404: Page not found');
});

app.listen(3000);