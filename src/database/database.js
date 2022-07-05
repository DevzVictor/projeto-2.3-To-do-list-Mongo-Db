const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://root:admin@api-todolist.z4f7c.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o mongoDB, erro ${error}`),
    );
};

module.exports = connectToDatabase;
