const senhaSchema = require("../models/senhaSchema.js");

class SenhaController {

    async gerarSenha(req, res) {
        let senha = "";
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        senha = result;
        const { idEstabelecimento, idPessoa } = req.body;

        try {
            await senhaSchema.create({
                idEstabelecimento,
                idPessoa,
                senha
            })

            return res.status(201).json({ senha })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: 'Ocorreu um erro ao gerar senha' })
        }
    }
}

module.exports = new SenhaController();