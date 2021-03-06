require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./src/routes/tarefas.routes');
const connectToDatabase = require('./src/database/database');

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/tarefas', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
