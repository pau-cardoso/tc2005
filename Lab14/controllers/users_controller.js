const { request } = require("express");

exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicia sesion'
    })
};

exports.postLogin = (request, response, next) => {

};