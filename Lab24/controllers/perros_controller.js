const Perro = require('../models/Perro');

exports.getNuevoPerro = (request, response, next) => {
        response.render('nuevoPerro', {
        titulo: 'Nuevo perro',
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevoPerro = (request, response, next) => {
    const image = request.file;
    if (!image) {
        return response.status(422).redirect('/');
    }

    const nuevoPerro = new Perro(request.body.nombre_perro, image.filename);
    nuevoPerro.save()
        .then(() => {
			response.setHeader( 'Set-Cookie', ['ultimo_perro =' + nuevoPerro.nombre + '; HttpOnly'] );
			response.redirect('/perros');
    	}).catch(err => console.log(err));
}

exports.getPerro = (request, response, next) => {
	const id = request.params.perro_id;
    Perro.fetchOne(id)
        .then(([rows, fieldData]) => {
            response.render('perroIndividual', {
                perros: rows,
                titulo: 'Perro',
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });
};


exports.postPerro = (request, response, next) => {
	const newName = request.body.nuevoNombre; 
	const id = request.params.perro_id;
    Perro.editName(newName, id)
        .then(([rows, fieldData]) => {
            response.redirect('/perros');
        })
        .catch(err => {
            console.log(err);
        });
};


exports.postBuscar = (request, response, next) => {
    response.status(200).json({message: "Respuesta asincrona"});
};


exports.getPerros = (request, response, next) => {
    Perro.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('perros', {
                perros: rows,
                titulo: 'Perro',
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });
};
