// Librerias
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const isAuth = require('../util/is-auth');

const perrosController = require('../controllers/perros_controller');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/nuevo-perro', isAuth, perrosController.getNuevoPerro);

router.post('/nuevo-perro', isAuth, perrosController.postNuevoPerro );

router.get('/:perro_id', isAuth, perrosController.getPerro);

router.post('/:perro_id', isAuth, perrosController.postPerro);

router.get( '/', isAuth, perrosController.getPerros);

module.exports = router;