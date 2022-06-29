const tarefasService = require('../services/tarefas.services');
const validationService = require('../services/validation.services');

const findAllTarefasController = (req, res) => {
  const allTarefas = tarefasService.findAllTarefasService();
  const showTarefas = validationService.showTarefas(allTarefas);
  if(showTarefas){
    return res.status(200).send(allTarefas);
  } else {
    return res.status(404).send({message: "Não existe nehuma tarefa"})
  }
};

const findByIdTarefasController = (req, res) => {
  const idParam = Number(req.params.id);
  const validId = validationService.validId(idParam);
  if (validId) {
    const tarefaEscolhida = tarefasService.findByIdTarefasService(idParam);
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

const createTarefasController = (req, res) => {
  const tarefa = req.body;
  const validTarefa = validationService.validTarefa(tarefa);
  if (validTarefa) {
    const newTarefa = tarefasService.createTarefaService(tarefa);
    return res.status(201).send({ message: 'Tarefa criada com sucesso', data: newTarefa });
  } else {
    return res.status(400).send({ message: 'Não envie uma tarefa vazia!' });
  }
};

const updateTarefasController = (req, res) => {
  const idParam = Number(req.params.id);
  const validId = validationService.validId(idParam)
  if(validId){
    const tarefaEdit = req.body;
    const validTarefa = validationService.validTarefa(tarefaEdit);
    if(validTarefa){
      const updatedTarefa = tarefasService.updateTarefasService(idParam,tarefaEdit);
      return res.status(200).send(updatedTarefa);
    } else {
      return res.status(404).send({message: "Não envie a tarefa em branco"})
    }
  } else {
    return res.status(400).send({ message: 'ID invalido!' });
  }
};

const deleteTarefasController = (req, res) => {
  const idParam = req.params.id;
  tarefasService.deleteTarefasService(idParam);
  res.send({ message: 'Tarefa deletada com sucesso!' });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefasController,
  createTarefasController,
  updateTarefasController,
  deleteTarefasController,
};
