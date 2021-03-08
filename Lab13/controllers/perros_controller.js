const Perro = require('../models/Perro');

exports.getNuevoPerro = (request, response, next) => {
    response.render('nuevoPerro');
};

exports.postNuevoPerro = (request, response, next) => {
    const nuevoPerro = new Perro(request.body.nombre);
    nuevoPerro.save();
    response.redirect('/perros');
}

exports.get = (request, response, next) => {
    const perros = Perro.fetchAll();
    response.render('perros', {
        perros: perros
    });
};
