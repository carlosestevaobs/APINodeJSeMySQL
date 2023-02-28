const express = require('express');
const router = express.Router();

// para a rota enxergar o carroController
const CarroController = require('./controllers/CarroController');

//os dados serão recebidos
router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
// os dados serão inseridos
router.post('/carro', CarroController.inserir);

module.exports = router;
