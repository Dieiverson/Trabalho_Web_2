const mongoose = require("mongoose");
const { stringify } = require("querystring");

const senhaSchema = new mongoose.Schema({
  
   
    idEstabelecimento: 
    {
        type: Number,
        required: [true, "O campo nome é obrigatório."]
    },
    idPessoa: 
    {
        type: Number,
        required: [true, "O campo CNPJ é obrigatório."]
    },
    senha: 
    {
        type: String,
        required: [true, "O campo senha é obrigatório."]
    },
    
});

module.exports = mongoose.model("senha", senhaSchema);