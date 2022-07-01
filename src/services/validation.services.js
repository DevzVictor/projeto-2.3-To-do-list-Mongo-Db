const mongoose = require('mongoose');

function validTarefa(tarefa) {
  if (!tarefa.tarefa) {
    return false;
  } else {
    return true;
  }
}

function validId(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return false;
  } else {
    return true;
  }
}

function chosenTarefa(tarefa) {
  if (!tarefa) {
    return false;
  } else {
    return true;
  }
}

function showTarefas(tarefas) {
  if (tarefas.length == 0) {
    return false;
  } else {
    return true;
  }
}

function validUpdateTarefa(paleta) {}

module.exports = {
  validTarefa,
  validUpdateTarefa,
  validId,
  chosenTarefa,
  showTarefas,
};
