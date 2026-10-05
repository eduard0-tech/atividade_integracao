const express = require('express');
const controllerFornecedores = require('../controllers/controllerFornecedores');

const router = express.Router();

router.get('/fornecedores', controllerFornecedores.getFornecedores);
router.post('/fornecedores', controllerFornecedores.store);
router.get('/fornecedores/:id', controllerFornecedores.getById);

module.exports = router;
