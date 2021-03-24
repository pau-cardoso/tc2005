// Librerias
const express = require('express');
const router = express.Router();
const path = require('path');
const isAuth = require('../util/is-auth');

const usersController = require('../controllers/users_controller');

router.get('/login', usersController.getLogin);

router.post('/login', usersController.postLogin);

router.get('/logout', isAuth, usersController.getLogout);

router.get('/register', usersController.getRegister);

router.post('/register', usersController.postRegister);

module.exports = router;