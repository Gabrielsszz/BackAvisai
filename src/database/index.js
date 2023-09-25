const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Admindatabase01:adminpass012@gs..@avsdatebase.z4al7nb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", {}, (error)=>{
    if(error){
        console.log('Falha ao executar a conexão com mongodb');
        console.log(error);
        return;
    }

    console.log('conexão com mongodb estável');
})


mongoose.Promise = global.Promise;

module.exports = mongoose;