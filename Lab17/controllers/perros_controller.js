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
    Perro.fetchAll()
        .then(([rows, fieldData]) => {
            const perros = [];
            for (let perro of rows) {
                perros.push({
                    nombre: perro.nombre, 
                    imagen: perro.imagen
                })
            }
            console.log(perros);
            response.render('perros', {
                perros: perros,
                titulo: 'Perros',
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });

};
