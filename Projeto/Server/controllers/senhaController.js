const senhaSchema = require("../models/senhaSchema.js");

class SenhaController 
{

async gerarSenha (req, res) 
{

const { idEstabelecimento, idPessoa } = req.body;
const senha = Math.floor(Math.random() * (999 - 1)) + 1;
try 
{
  await senhaSchema.create(
    {
    idEstabelecimento,
    idPessoa,
    senha
    })

  return res.status(201).json({ senha })
} catch( err ) 
{
    console.log ( err );
  return res.status(500).json({ error: 'Ocorreu um erro ao gerar senha' })
}
}
}

module.exports = new SenhaController();