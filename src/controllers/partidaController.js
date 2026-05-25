var partidaModel = require("../models/partidaModel");

function buscarHeroiMaisUtilizado(req, res) {
    partidaModel.buscarHeroiMaisUtilizado()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPrecisaoPorHeroi(req, res) {
    partidaModel.buscarPrecisaoPorHeroi()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarMediaEliminacoesPorHeroi(req, res) {
    partidaModel.buscarMediaEliminacoesPorHeroi()
    .then(function (resultado) {
        res.status(200).json(resultado);
    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarKdaPorHeroi (req, res) {
    partidaModel.buscarKdaPorHeroi()
    .then(function (resultado) {
        res.status(200).json(resultado);
    })
    .catch(function (erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarKmaPorHeroi (req, res) {
    partidaModel.buscarKmaPorHeroi()
    .then( function (resultado){
        res.status(200).json(resultado)
    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}


function buscarPrecisaoCriticaPorHeroi(req, res) {
    partidaModel.buscarPrecisaoCriticaPorHeroi()
    .then(function (resultado) {
        res.status(200).json(resultado);
    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarTop5PartidasKda(req,res) {
    partidaModel.buscarTop5PartidasKda()
    .then(function (resultado) {
        res.status(200).json(resultado);
    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage)
    })
}

module.exports = {
    buscarHeroiMaisUtilizado,
    buscarPrecisaoPorHeroi,
    buscarMediaEliminacoesPorHeroi,
    buscarKdaPorHeroi,
    buscarKmaPorHeroi,
    buscarPrecisaoCriticaPorHeroi,
    buscarTop5PartidasKda
}