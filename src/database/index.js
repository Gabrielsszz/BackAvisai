const mongoose = require('mongoose');

 
mongoose.connect("mongodb+srv://Admindatabase013:adminpass012@gs..@avsdatebase.z4al 7nb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", {})  
    .then(() => {
    console.log('Conexão com MongoDB estabelecida com sucesso');
  })
  .catch((error) => {
    console.error('Falha ao executar a conexão com o MongoDB');
    console.error(error);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;