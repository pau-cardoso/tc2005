const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const rutasPerros = require('./routes/perros');
const rutasGuarderia = require('./routes/guarderia');
const rutasUsers = require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', 'views');

//Para accerder fácilmente a los datos de las formas
app.use(cookieParser());

// Para trabajar con sesiones 
app.use(session({
    secret: 'dnamndlkjnlksan', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));


app.use('/perros', rutasPerros);
app.use('/guarderia', rutasGuarderia);
app.use('/users', rutasUsers);

app.use( '/home', (request, response, next) => {
    response.render('Home', {
        titulo: 'Home',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

app.use( '/sobremi', (request, response, next) => {
    response.render('Lab1');
});

app.use( '/', (request, response, next) => {
    response.render('pregunta', {
        titulo: 'Preguntas',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

app.use( (request, response, next) => {
    response.status(404);
    response.send('Error 404: Page not found');
});

app.listen(3000);