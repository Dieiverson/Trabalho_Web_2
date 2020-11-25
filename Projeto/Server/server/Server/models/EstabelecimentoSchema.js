const mongoose = require("mongoose");
const { stringify } = require("querystring");

const estabelecimentoSchema = new mongoose.Schema(
{
  
    nome: 
    {
        type: String,
        required: [true, "O campo nome é obrigatório."]
    },
    cnpj: 
    {
        type: String,
        required: [true, "O campo CNPJ é obrigatório."]
    },
    senha: 
    {
        type: String,
        required: [true, "O campo senha é obrigatório."]
    },
    dataCadastro: 
    {
        type: Date,
        default: Date.now
    },
    enderecos:
    {
        type: String
    },
    telefone: 
    {
        type: String
    }
});

module.exports = mongoose.model("estabelecimento", estabelecimentoSchema);