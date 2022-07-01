const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  tarefa: {
    type: String,
    require: true,
  },
});

const Tarefa = mongoose.model('todolists', TarefaSchema);

module.exports = Tarefa;
