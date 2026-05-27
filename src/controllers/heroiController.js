var heroiModel = require("../models/heroiModel");

function cadastrar(req, res) {
    var nomeHeroi = req.body.nomeHeroiServer;
    var vidaBase = req.body.vidaBaseServer;
    var danoBase = req.body.danoBaseServer;
    var tipoHeroi = req.body.tipoHeroiServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (nomeHeroi == undefined) {
        res.status(400).send("Nome do Heroi esta undefined!");
    } else if (vidaBase == undefined) {
        res.status(400).send("Vida Base do Heroi esta undefined!");
    } else if (danoBase == undefined) {
        res.status(400).send("Dano Base do Heroi esta undefined!");
    } else if (tipoHeroi == undefined) {
        res.status(400).send("Tipo do Heroi esta undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Usuario do Heroi esta undefined!");
    } else {
        heroiModel.cadastrar(nomeHeroi, vidaBase, danoBase, tipoHeroi, fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listarPorUsuario(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("ID do usuario esta undefined!");
    } else {
        heroiModel.listarPorUsuario(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao listar os herois do usuario! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar,
    listarPorUsuario
};
