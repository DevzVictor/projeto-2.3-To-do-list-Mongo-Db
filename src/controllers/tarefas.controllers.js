const tarefasService = require('../services/tarefas.services');
const validationService = require('../services/validation.services');

const findAllTarefasController = async (req, res) => {
  const allTarefas = await tarefasService.findAllTarefasService();
  if (allTarefas.length == 0) {
    return res.status(404).send({ message: 'Não existe nehuma tarefa' });
  }
  res.send(allTarefas);
};

const findByIdTarefasController = async (req, res) => {
  const idParam = req.params.id;
  const selectTarefa = await tarefasService.findByIdTarefasService(idParam);
  const chosenTarefa = validationService.chosenTarefa(selectTarefa);
  if (chosenTarefa) {
    res.status(200).send(selectTarefa);
  } else {
    return res.status(404).send({ message: 'Tarefa não encontrada!' });
  }
};

const createTarefasController = async (req, res) => {
  const tarefa = req.body;
  const newTarefa = await tarefasService.createTarefaService(tarefa);
  return res.status(201).send({ message: 'Tarefa criada com sucesso', data: newTarefa });
};

const updateTarefasController = async (req, res) => {
  const idParam = req.params.id;
  const tarefaEdit = req.body;
  const updatedTarefa = await tarefasService.updateTarefasService(idParam,tarefaEdit,);
  return res.status(200).send(updatedTarefa);
};

const deleteTarefasController = async (req, res) => {
  const idParam = req.params.id;
  await tarefasService.deleteTarefasService(idParam);
  res.send({ message: 'Tarefa deletada com sucesso!' });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefasController,
  createTarefasController,
  updateTarefasController,
  deleteTarefasController,
};
