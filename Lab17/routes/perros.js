// Librerias
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const perrosController = require('../controllers/perros_controller');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/nuevo-perro', perrosController.getNuevoPerro);

router.post('/nuevo-perro', perrosController.postNuevoPerro );

router.get( '/', perrosController.get);

module.exports = router;