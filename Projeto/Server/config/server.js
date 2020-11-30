'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configurar arquivo de rotas
app.use('/', routes);

//Definindo a porta de escuta
const PORTA = 1234;
app.listen(PORTA, function() {
    console.log("Servidor rodando na porta " + PORTA);
});