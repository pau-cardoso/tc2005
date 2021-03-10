const Perro = require('../models/Perro');

exports.getNuevoPerro = (request, response, next) => {
    response.render('nuevoPerro', {
        titulo: 'Nuevo perro',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevoPerro = (request, response, next) => {
    const nuevoPerro = new Perro(request.body.nombre);
    nuevoPerro.save();
    response.setHeader( 'Set-Cookie', ['ultimo_perro =' + nuevoPerro.nombre + '; HttpOnly'] );
    response.redirect('/perros');
}

exports.get = (request, response, next) => {
    const perros = Perro.fetchAll();
    console.log('Cookie: ' + request.get('Cookie'));
    console.log(request.get('Cookie').split('=')[1]);
    // Con cookie parser
    console.log(request.cookies);
    console.log(request.cookies.ultimo_perro);
    response.render('perros', {
        perros: perros,
        titulo: 'Perros',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};
