const express = require('express');
const route = express.Router();
const tarefasController = require('../controllers/tarefas.controllers');

route.get('/all-tarefas', tarefasController.findAllTarefasController);
route.get('/find-tarefas/:id', tarefasController.findByIdTarefasController);
route.post('/create-tarefas', tarefasController.createTarefasController);
route.put('/update-tarefas/:id', tarefasController.updateTarefasController);
route.delete('/delete-tarefas/:id', tarefasController.deleteTarefasController);

module.exports = route;
