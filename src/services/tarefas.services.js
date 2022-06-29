const tarefas = [
  {
    id: 1,
    tarefa: 'Lavar moto',
  },
  {
    id: 2,
    tarefa: 'Ir no medico',
  },
  {
    id: 3,
    tarefa: 'Ir no mercado',
  },
];

const findAllTarefasService = () => {
  return tarefas;
};

const findByIdTarefasService = (id) => {
  const tarefa = tarefas.find((tarefa) => tarefa.id === id);
  return tarefa;
};

const createTarefaService = (newTarefa) => {
  const newId = tarefas.length + 1;
  newTarefa.id = newId;
  tarefas.push(newTarefa);
  return newTarefa;
};

const updateTarefasService = (id, tarefaEdited) => {
  tarefaEdited['id'] = id;
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id);
  tarefas[tarefaIndex] = tarefaEdited;
  return tarefaEdited;
};

const deleteTarefasService = (id) => {
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id);
  return tarefas.splice(tarefaIndex, 1);
};

module.exports = {
  findAllTarefasService,
  findByIdTarefasService,
  createTarefaService,
  updateTarefasService,
  deleteTarefasService,
};
