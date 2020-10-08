const mongoose = require('mongoose');

const db = mongoose.connect(
    "mongodb+srv://rogimenon:rogimenon170201@clusterprova.aguum.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

mongoose.connection.on("connected", function() {
    console.log("Conectado com banco de dados...")
});

mongoose.connection.on("disconnected", function() {
    console.log("Desconectado com banco de dados...")
});

mongoose.connection.on("error", function(error) {
    console.log("Algum erro aconteceu com a conexão do banco: \n" + error)
});

module.exports = db;