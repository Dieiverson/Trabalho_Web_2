const mongoose = require("mongoose");
const endereco = new mongoose.Schema({
    pais: {
        type: String,
        required: [false]
    },
    estado: {
        type: String,
        required: [false]
    },
    cidade: {
        type: String,
        required: [false]
    },
    bairro: {
        type: String,
        required: [false]
    },
    rua: {
        type: String,
        required: [false]
    },
    numero: {
        type: Number,
        required: [false]
    },
});

module.exports = endereco;