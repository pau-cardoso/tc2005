const { request } = require("express");
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicia sesion',
        error: request.session.error,
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    })
};


exports.postLogin = (request, response, next) => {
    request.session.error = "";
    const username = request.body.usuario;
    User.fetchOne(username)
        .then(([rows, fieldData]) => {
            if (rows.length < 1) {
                request.session.error = "El usuario y/o contrasena no coinciden";
                response.redirect('/users/login');
            } else {
                bcrypt.compare(request.body.password, rows[0].password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.usuario = request.body.usuario;
                            return request.session.save(err => {
                                response.redirect('/perros');
                            });
                        }
                        request.session.error = "El usuario y/o contrasena no coinciden";
                        response.redirect('/users/login');
                    }).catch(err => {
                        request.session.error = "El usuario y/o contrasena no coinciden";
                        response.redirect('/users/login');
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
};


exports.getLogout = (request, response, next) => {
    request.session.destroy((err) => {
        console.log(err);
        console.log('Logout');
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};


exports.getRegister = (request, response, next) => {
    response.render('register', {
        titulo: 'Registrate',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};


exports.postRegister = (request, response, next) => {
    const nuevoUser = new User(request.body.nombre, request.body.usuario, request.body.password);
    nuevoUser.save()
        .then(() => {
			response.redirect('/perros');
    	}).catch(err => console.log(err));
}