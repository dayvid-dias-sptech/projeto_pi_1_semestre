var express = require("express");
var router = express.Router();

var heroiController = require("../controllers/heroiController");

//Recebendo os dados do html e direcionando para a função cadastrar de heroiController.js
router.post("/cadastrar", function (req, res) {
    heroiController.cadastrar(req, res);
})

router.get("/quantidade-por-tipo", function (req, res) {
    heroiController.buscarQuantidadePorTipo(req, res);
});

router.get("/atributos", function (req, res) {
    heroiController.buscarAtributosHerois(req, res);
});

module.exports = router;