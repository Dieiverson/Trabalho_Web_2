const usuario = require("../models/UsuarioSchema.js");

class UsuarioController {
    async Cadastrar(req, res) {
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

    async Get(req, res) {
        {
            var result = await usuario.find({});
            if (!result) {
                return res.status(404).send("Não há usuários cadastrados")
            }
            console.log("Inseriu");
            console.log(result);
            var resultado = await usuario.create(result);
            return res.status(200).json(resultado);
        }
    }

    async Update(req, res) {
        var user = req.body;
        var cpfUser = user.cpf;
        //console.log(req.body);
        const update = {
            "$set": {
                "usuario": user.usuario,
                "nome": user.nome,
                "cpf": user.cpf,
                "senha": user.senha,
                "enderecos": [{
                    "pais": user.enderecos[0].pais,
                    "estado": user.enderecos[0].estado,
                    "cidade": user.enderecos[0].cidade,
                    "bairro": user.enderecos[0].bairro,
                    "rua": user.enderecos[0].rua,
                    "numero": user.enderecos[0].numero
                }]
            }
        };
        var resultado = await usuario.findOneAndUpdate({ cpf: cpfUser }, update);
        return res.status(200).json(resultado);
    }

    async Remover(req, res) {
        var cpfUser = req.params.cpfUsuario;
        var result = await usuario.findOneAndRemove({ cpf: cpfUser });
        return res.status(200).json(result);
    }

    async Login(req, res) {
        var user = req.body.usuario;
        var pass = req.body.senha;
        console.log(req.body);

        var result = await usuario.find({ $and: [{ usuario: user }, { senha: pass }] },
            function(err, doc) {
                if (err)
                    return res.send(500, { error: err });
            });
        return res.status(200).json(result);
    }
}

module.exports = new UsuarioController();