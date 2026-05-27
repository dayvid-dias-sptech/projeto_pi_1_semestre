var express = require("express");
var router = express.Router();

var heroiController = require("../controllers/heroiController");

//Recebendo os dados do html e direcionando para a função cadastrar de heroiController.js
router.post("/cadastrar", function (req, res) {
    heroiController.cadastrar(req, res);
})

router.post("/listar-por-usuario", function (req, res) {
    heroiController.listarPorUsuario(req, res);
});

module.exports = router;
