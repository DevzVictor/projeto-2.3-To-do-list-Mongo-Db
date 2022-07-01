
const { default: mongoose } = require('mongoose');
const tarefasService = require('../services/tarefas.services');
const validationService = require('../services/validation.services');

const findAllTarefasController = async (req, res) => {
  const allTarefas = await tarefasService.findAllTarefasService();
  if(allTarefas.length == 0){
    return res.status(404).send({message: "Não existe nehuma tarefa"})
  } 
  res.send(allTarefas);
};

const findByIdTarefasController = async (req, res) => {
  const idParam = req.params.id;
  const validId = validationService.validId(idParam);
  if (validId) {
    const tarefaEscolhida = await tarefasService.findByIdTarefasService(idParam);
    const chosenTarefa = validationService.chosenTarefa(tarefaEscolhida);
    if (chosenTarefa) {
      res.status(200).send(tarefaEscolhida);
    } else {
      return res.status(404).send({ message: 'Tarefa não encontrada!' });
    }
  } else {
    return res.status(400).send({ message: 'ID invalido!' });
  }
};

const createTarefasController = async (req, res) => {
  const tarefa = req.body;
  const validTarefa = validationService.validTarefa(tarefa);
  if (validTarefa) {
    const newTarefa = await tarefasService.createTarefaService(tarefa);
    return res.status(201).send({ message: 'Tarefa criada com sucesso', data: newTarefa });
  } else {
    return res.status(400).send({ message: 'Não envie uma tarefa vazia!' });
  }
};

const updateTarefasController = async (req, res) => {
  const idParam = req.params.id;
  const validId = validationService.validId(idParam)
  if(validId){
    const tarefaEdit = req.body;
    const validTarefa = validationService.validTarefa(tarefaEdit);
    if(validTarefa){
      const updatedTarefa = await tarefasService.updateTarefasService(idParam,tarefaEdit);
      return res.status(200).send(updatedTarefa);
    } else {
      return res.status(404).send({message: "Não envie a tarefa em branco"})
    }
  } else {
    return res.status(400).send({ message: 'ID invalido!' });
  }
};

const deleteTarefasController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
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
