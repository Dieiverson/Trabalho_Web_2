const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController.js");
const estabelecimentoController = require("../controllers/EstabelecimentoController.js");
const senhaController = require("../controllers/senhaController.js")

//Usuario
router.get("/Listar", usuarioController.Get);
router.post("/Cadastrar", usuarioController.Cadastrar);
router.post("/Deletar/:cpfUsuario", usuarioController.Remover);
router.get("/Login/:usuario/:senha", usuarioController.Login);
router.post("/Alterar", usuarioController.Update);

//Estabelecimento
router.post("/CadastrarEstabelecimento", estabelecimentoController.CadastrarEstabelecimento);
router.post("/DeletarEstabelecimento/:cnpjEstabelecimento", estabelecimentoController.RemoverEstabelecimento);
router.get("/ListarEstabelecimento", estabelecimentoController.ListarEstabelecimento);
router.post("/senha/gerar", senhaController.gerarSenha);
router.post("/AlterarEstabelecimento", estabelecimentoController.AlterarEstabelecimento);
module.exports = router;