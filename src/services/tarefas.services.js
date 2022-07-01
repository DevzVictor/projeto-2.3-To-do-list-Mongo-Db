const Tarefa = require('../models/Tarefa');

const findAllTarefasService = async () => {
  const tarefas = await Tarefa.find();
  return tarefas;
};

const findByIdTarefasService = async (id) => {
  const tarefa = await Tarefa.findById(id);
  return tarefa; 
};

const createTarefaService = async (newTarefa) => {
  const tarefaCreated = await Tarefa.create(newTarefa);
  return tarefaCreated;
};

const updateTarefasService = async (id, tarefaEdited) => {
  const tarefaUpdate = await Tarefa.findByIdAndUpdate(id, tarefaEdited).setOptions({returnOriginal: false})
  return tarefaUpdate;
};

const deleteTarefasService = async (id) => {
  return await Tarefa.findByIdAndDelete(id);
};

module.exports = {
  findAllTarefasService,
  findByIdTarefasService,
  createTarefaService,
  updateTarefasService,
  deleteTarefasService,
};
