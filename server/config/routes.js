const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController.js");


//router.get("/", usuarioController.Get);
router.post("/Cadastrar", usuarioController.Cadastrar);
router.get("/Login/:usuario/:senha", usuarioController.Login);

module.exports = router;