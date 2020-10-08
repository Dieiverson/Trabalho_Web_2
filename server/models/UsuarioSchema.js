const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    usuario: 
    {
        type: String,
        required: [true, "O campo usuario é obrigatório."]
    },
    nome: 
    {
        type: String,
        required: [true, "O campo nome é obrigatório."]
    },
    cpf: 
    {
        type: String,
        required: [true, "O campo CPF é obrigatório."]
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
});

module.exports = mongoose.model("Usuarios", usuarioSchema);