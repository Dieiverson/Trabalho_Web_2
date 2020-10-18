const usuario = require("../models/UsuarioSchema.js");

class UsuarioController 
{
    async Cadastrar(req, res) 
    {
        var nomeUsuario = req.body.usuario;
        //console.log(nomeUsuario);
        var user = await usuario.find({ usuario: nomeUsuario });
        if (user[0] != null) {
            console.log("Não inseriu");
            return res.status(404).send("Usuário já existe. Tente outro usuário.")
        } else {
            console.log("Inseriu");
            var resultado = await usuario.create(req.body);
            return res.status(200).json(resultado);
        }
    }

    async Get(req, res) 
    {
        var result = await usuario.find({}); //Find sem parâmetro para trazer todos
        res.status(200).json(result);
    }
    async Update(req, res) 
    {
        var user = req.body.user;
        var user = await usuario.find({ cpf: cpfUsuario });
        if (user[0] != null) 
        {
            console.log("Foi!");
            var result = await usuario.update(req.body);
            return res.status(200).json(result);
        }
         else 
        {
            console.log("Não foi");
            return res.status(404).send("Essa pessoa não existe. A registre no sistema primeiro");
        }
    }
 //Remover
    async Remover(req, res) 
    {
        var cpfUser = req.params.cpfUsuario;
        var result = await usuario.findOneAndRemove({ cpf: cpfUser});
        return res.status(200).json(result);
    }

    async Login(req, res) 
    {
        var user = req.params.usuario;
        var pass = req.params.senha;
        var result = await usuario.find({ $and: [{ usuario: user }, { senha: pass }] },
            function(err, doc) 
            {
                if (err)
                    return res.send(500, { error: err });
            });
       return res.status(200).json(result);
    }
}

module.exports = new UsuarioController();