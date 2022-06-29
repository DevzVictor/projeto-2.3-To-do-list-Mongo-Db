const express = require('express');
const route = express.Router();

const tarefasController = require('../controllers/tarefas.controllers');

route.get('/find-tarefas', tarefasController.findAllTarefasController);
route.get('/find-tarefas/:id', tarefasController.findByIdTarefasController);
route.post('/create', tarefasController.createTarefasController);
route.put('/update/:id', tarefasController.updateTarefasController);
route.delete('/delete/:id', tarefasController.deleteTarefasController);

module.exports = route;
