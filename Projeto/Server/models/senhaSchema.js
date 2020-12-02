const mongoose = require("mongoose");
const { stringify } = require("querystring");

const senhaSchema = new mongoose.Schema({

    idEstabelecimento: {
        type: String,
        required: [false, "O campo id é obrigatório."]
    },
    idPessoa: {
        type: String,
        required: [false, "O campo CNPJ é obrigatório."]
    },
    senha: {
        type: String,
        required: [false, "O campo senha é obrigatório."]
    },
    data: {
        type: Date,
        default: new Date()
    }

});

module.exports = mongoose.model("senha", senhaSchema);