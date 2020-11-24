'use strict'

//npm install [package] - Para restaurar pacotes
//npm install [package] --save-dev   - Para salvar dependências de desenvolvimento
//Add essa linha no package.json ("dev": "nodemon index.js") para rodar usando nodemon
//npm run dev *Rodar usando a linha add acima, o que substitui o node index.js

//Declaração de dependências
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes.js');

app.use(bodyParser.urlencoded({ extended: true }));
//Configurar conversão das informações que chegam em uma requisição
app.use(bodyParser.json());

//Configurar arquivo de rotas
app.use('/', routes);

//Definindo a porta de escuta
const PORTA = 1234;
app.listen(PORTA, function() 
{
    console.log("Servidor rodando na porta " + PORTA);
});