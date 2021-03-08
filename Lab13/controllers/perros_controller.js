const perros = ['Boyo', 'Mina', 'Luke', 'Sam', 'Jade', 'Kira'];


exports.getNuevoPerro = (request, response, next) => {
    response.render('nuevoPerro');
};

exports.postNuevoPerro = (request, response, next) => {
    perros.push(request.body.nombre);
    response.redirect('/perros');
}

exports.get = (request, response, next) => {
    response.render('perros', {
        perros: perros
    });
};
