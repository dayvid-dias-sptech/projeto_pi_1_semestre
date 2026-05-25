var heroiModel = require("../models/heroiModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeHeroi = req.body.nomeHeroiServer;
    var arma = req.body.armaServer;
    var vidaBase = req.body.vidaBaseServer;
    var danoBase = req.body.danoBaseServer;
    var defesaBase = req.body.defesaBaseServer;
    var velocidadeBase = req.body.velocidadeBaseServer;
    var tipoHeroi = req.body.tipoHeroiServer;
    var historiaHeroi = req.body.historiaHeroiServer;
    var fotoHeroi = req.body.fotoHeroiServer;

    // Faça as validações dos valores
    if (nomeHeroi == undefined) {
        res.status(400).send("Nome do Herói está undefined!");
    } else if (vidaBase == undefined) {
        res.status(400).send("Vida Base do Herói está undefined!");
    } else if (danoBase == undefined) {
        res.status(400).send("Dano Base do Herói está undefined!");
    } else if (tipoHeroi == undefined) {
        res.status(400).send("Tipo do Herói está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        heroiModel.cadastrar(nomeHeroi, vidaBase, danoBase, tipoHeroi)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarQuantidadePorTipo(req, res) {
    heroiModel.buscarQuantidadePorTipo()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar quantidade de heróis por tipo.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarAtributosHerois(req, res) {
    heroiModel.buscarAtributosHerois()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar atributos dos heróis.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    buscarQuantidadePorTipo,
    buscarAtributosHerois
}