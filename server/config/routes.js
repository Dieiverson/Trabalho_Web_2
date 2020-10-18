const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController.js");
const estabelecimentoController = require ("../controllers/EstabelecimentoController.js");
const senhaController = require ("../controllers/senhaController.js")

//Usuario
router.post("/Cadastrar", usuarioController.Cadastrar);
router.post("/Deletar/:cpfUsuario", usuarioController.Remover);
router.get("/Login/:usuario/:senha", usuarioController.Login);

//Estabelecimento
router.post("/CadastrarEstabelecimento", estabelecimentoController.CadastrarEstabelecimento);
router.post("/DeletarEstabelecimento/:cnpjEstabelecimento", estabelecimentoController.RemoverEstabelecimento);
router.get("/listar", estabelecimentoController.ListarEstabelecimento);
router.post("/senha/gerar", senhaController.gerarSenha);
module.exports = router;