const estabelecimento = require("../models/EstabelecimentoSchema.js");

class EstabelecimentoController 
{

async CadastrarEstabelecimento(req, res) 
{
    //var  estabelecimento  = req.body;
    //console.log(nomeUsuario);
    var user = await estabelecimento.find({ cnpj: req.body.cnpj });
    if (user[0] != null) 
    {
        console.log("Não inseriu");
        return res.status(404).send("Este estabelecimento já existe. Tente outro.")
    } else {
        console.log("Inseriu");
        var resultado = await estabelecimento.create(req.body);
        return res.status(200).json(resultado);
    }
}
async ListarEstabelecimento(req, res) 
{
    var result = await estabelecimento.find({});
    if (!result) 
    {
        return res.status(404).send("Não há estabelecimentos cadastrados")
    }
        console.log("Inseriu");
        console.log(result);
        var resultado = await estabelecimento.create(result);
        return res.status(200).json(resultado);
}

async RemoverEstabelecimento(req, res) 
{
    var cnpjEstab = req.params.cnpjEstabelecimento;
    var result = await estabelecimento.findOneAndDelete({ cnpj: cnpjEstab });
    return res.status(200).json(result);
}
}

module.exports = new EstabelecimentoController();