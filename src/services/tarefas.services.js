const Tarefa = require('../models/Tarefa');

const findAllTarefasService = async () => {
  const allTarefas = await Tarefa.find();
  return allTarefas;
};

const findByIdTarefasService = async (idParam) => {
  const oneTarefa = await Tarefa.findById(idParam);
  return oneTarefa;
};

const createTarefaService = async (newTarefa) => {
  const createdTarefa = await Tarefa.create(newTarefa);
  return createdTarefa;
};

const updateTarefasService = async (idParam, editTarefa) => {
  const updateTarefa = await Tarefa.findByIdAndUpdate(
    idParam,
    editTarefa,
  ).setOptions({ returnOriginal: false });
  return updateTarefa;
};

const deleteTarefasService = async (idParam) => {
  return await Tarefa.findByIdAndDelete(idParam);
};

module.exports = {
  findAllTarefasService,
  findByIdTarefasService,
  createTarefaService,
  updateTarefasService,
  deleteTarefasService,
};
