const express = require('express');
const route = express.Router();
const tarefasController = require('../controllers/tarefas.controllers');
const {validId,validObjectBody} = require('../middlewares/tarefa.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/all-tarefas', tarefasController.findAllTarefasController);
route.get(
  '/find-tarefas/:id',
  validId,
  tarefasController.findByIdTarefasController,
);
route.post(
  '/create-tarefas',
  validObjectBody,
  tarefasController.createTarefasController,
);
route.put(
  '/update-tarefas/:id',
  validId,
  validObjectBody,
  tarefasController.updateTarefasController,
);
route.delete(
  '/delete-tarefas/:id',
  validId,
  tarefasController.deleteTarefasController,
);

module.exports = route;
