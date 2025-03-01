const express = require('express');
const homeController = require('../controllers/homeController');
const vacantesController = require('../controllers/vacantesController');
const usuariosController = require('../controllers/usuariosController');

const router = express.Router();

module.exports = () => {
  router.get('/', homeController.showJobs);

  router.get('/vacantes/nueva', vacantesController.formularioVacante);
  router.post('/vacantes/nueva', vacantesController.agregarVacante);

  router.get('/vacantes/:url', vacantesController.mostrarVacante);

  router.get('/vacantes/editar/:url', vacantesController.formEditarVacante);
  router.post('/vacantes/editar/:url', vacantesController.editarVacante);

  router.get('/crear-cuenta', usuariosController.formCrearCuenta);
  router.post('/crear-cuenta', usuariosController.crearUsuario);
  return router;
}