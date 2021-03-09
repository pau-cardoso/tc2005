const Perro = require('../models/Perro');

exports.getNuevoPerro = (request, response, next) => {
    response.render('nuevoPerro', {
        titulo: 'Nuevo perro'
    });
};

exports.postNuevoPerro = (request, response, next) => {
    const nuevoPerro = new Perro(request.body.nombre);
    nuevoPerro.save();
    response.setHeader( 'Set-Cookie', ['ultimo_perro =' + nuevoPerro.nombre] );
    response.redirect('/perros');
}

exports.get = (request, response, next) => {
    const perros = Perro.fetchAll();
    console.log('Cookie: ' + request.get('Cookie'));
    console.log(request.get('Cookie').split('=')[1]);
    response.render('perros', {
        perros: perros,
        titulo: 'Perros'
    });
};
