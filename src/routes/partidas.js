var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

router.get("/heroi-mais-utilizado", function (req, res) {
    partidaController.buscarHeroiMaisUtilizado(req, res);
});

router.get("/media-eliminacoes", function (req, res) {
    partidaController.buscarMediaEliminacoesPorHeroi(req, res);
});

router.get("/kda-por-heroi", function (req, res) {
    partidaController.buscarKdaPorHeroi(req, res);
});

router.get("/kma-por-heroi", function (req, res) {
    partidaController.buscarKmaPorHeroi(req, res);
});

router.get("/precisao-critica", function (req, res){
    partidaController.buscarPrecisaoCriticaPorHeroi(req, res);
});

router.get("/top-5-partidas-kda", function (req, res) {
    partidaController.buscarTop5PartidasKda(req, res);
});

router.post("/cadastrar", function (req, res) {
    partidaController.cadastrar(req, res);
})

module.exports = router 
