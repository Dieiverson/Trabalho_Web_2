const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController.js");
const estabelecimentoController = require ("../controllers/EstabelecimentoController.js");
const senhaController = require ("../controllers/senhaController.js")

//router.get("/", usuarioController.Get);
router.post("/Cadastrar", usuarioController.Cadastrar);
router.post("/Deletar/:cpfUsuario", usuarioController.Remover);
router.get("/Login/:usuario/:senha", usuarioController.Login);
router.post("/CadastrarEstabelecimento", estabelecimentoController.CadastrarEstabelecimento);
router.get("/listar", estabelecimentoController.ListarEstabelecimento);
router.post("/senha/gerar", senhaController.gerarSenha);
module.exports = router;