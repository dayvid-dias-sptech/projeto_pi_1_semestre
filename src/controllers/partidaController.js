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

function buscarKdaPorHeroi(req, res) {
    partidaModel.buscarKdaPorHeroi()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        })
}

function buscarKmaPorHeroi(req, res) {
    partidaModel.buscarKmaPorHeroi()
        .then(function (resultado) {
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

function buscarTop5PartidasKda(req, res) {
    partidaModel.buscarTop5PartidasKda()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        })
}

function cadastrar(req, res) {
    var fkHeroi = req.body.fkHeroiServer;
    var porcentagemAcerto = req.body.porcentagemAcertoServer;
    var porcentagemCritico = req.body.porcentagemCriticoServer;
    var eliminacoes = req.body.eliminacoesServer;
    var mortes = req.body.mortesServer;
    var assistencias = req.body.assistenciasServer;
    var resultadoPartida = req.body.resultadoPartidaServer;

    if (fkHeroi == undefined) {
        res.status(400).send("Herói está undefined!");
    } else if (porcentagemAcerto == undefined) {
        res.status(400).send("Porcentagem de acerto está undefined!");
    } else if (porcentagemCritico == undefined) {
        res.status(400).send("Porcentagem de crítico está undefined!");
    } else if (eliminacoes == undefined) {
        res.status(400).send("Eliminações está undefined!");
    } else if (mortes == undefined) {
        res.status(400).send("Mortes está undefined!");
    } else if (assistencias == undefined) {
        res.status(400).send("Assistências está undefined!");
    } else if (resultadoPartida == undefined) {
        res.status(400).send("Resultado da partida está undefined!");
    } else {
        partidaModel.cadastrar(
            fkHeroi,
            porcentagemAcerto,
            porcentagemCritico,
            eliminacoes,
            mortes,
            assistencias,
            resultadoPartida
        )
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao cadastrar a partida! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarHeroiMaisUtilizado,
    buscarPrecisaoPorHeroi,
    buscarMediaEliminacoesPorHeroi,
    buscarKdaPorHeroi,
    buscarKmaPorHeroi,
    buscarPrecisaoCriticaPorHeroi,
    buscarTop5PartidasKda,
    cadastrar
}