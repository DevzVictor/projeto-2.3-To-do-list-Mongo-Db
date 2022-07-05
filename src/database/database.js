const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o mongoDB, erro ${error}`),
    );
};

module.exports = connectToDatabase;
