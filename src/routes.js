const express = require('express');
const router = express.Router();

// para a rota enxergar o carroController
const CarroController = require('./controllers/CarroController');

//pegar todos os registros de carros

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);

module.exports = router;
