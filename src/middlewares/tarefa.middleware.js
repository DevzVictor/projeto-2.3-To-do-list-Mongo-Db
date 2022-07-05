const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const tarefa = req.body;
  if (!tarefa.tarefa) {
    return res.status(400).send({message: 'Não envie uma tarefa vazia!'})
  };
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
