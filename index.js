require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./src/routes/tarefas.routes');
const swaggerRoutes = require('./src/swagger/swagger.route');
const connectToDatabase = require('./src/database/database');

connectToDatabase();

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/tarefas', routes);
app.use('/api-docs', swaggerRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
