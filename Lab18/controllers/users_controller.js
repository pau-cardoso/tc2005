const { request } = require("express");
const User = require('../models/User');

exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicia sesion',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    })
};


exports.postLogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;
    response.redirect('/perros');
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