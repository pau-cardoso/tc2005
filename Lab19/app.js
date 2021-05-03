const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();

const rutasPerros = require('./routes/perros');
const rutasGuarderia = require('./routes/guarderia');
const rutasUsers = require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', 'views');

//Para accerder fácilmente a los datos de las formas
app.use(bodyParser.urlencoded({extended: false}));
//Para acceder a los valores de las cookies
app.use(cookieParser());

// Para trabajar con sesiones 
app.use(session({
    secret: 'dnamndlkjnlksan', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));
app.use(csrfProtection); 

app.use('/perros', rutasPerros);
app.use('/guarderia', rutasGuarderia);
app.use('/users', rutasUsers);

app.use( '/preguntas', (request, response, next) => {
    response.render('pregunta', {
        titulo: 'Preguntas',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

app.use( '/sobremi', (request, response, next) => {
    response.render('Lab1');
});

app.get( '/', (request, response, next) => {
    console.log(request.session);
    response.render('home', {
        titulo: 'Home',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

app.use( (request, response, next) => {
    response.status(404);
    response.render('error404', {
        titulo: 'Error 404',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
});

app.listen(8080);