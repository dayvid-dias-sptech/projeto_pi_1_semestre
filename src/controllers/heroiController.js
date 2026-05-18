var heroiModel = require("../models/heroiModel");
var aquarioModel = require("../models/aquarioModel");

// function autenticar(req, res) {
//     var email = req.body.emailServer;
//     var nickname = req.body.nicknameServer;
//     var senha = req.body.senhaServer;

//     if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está indefinida!");
//     } else {

//         usuarioModel.autenticar(email, senha)
//             .then(
//                 function (resultadoAutenticar) {
//                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

//                     if (resultadoAutenticar.length == 1) {
//                         console.log(resultadoAutenticar);

//                         aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].idUsuario)
//                             .then((resultadoAquarios) => {
//                                 if (resultadoAquarios.length > 0) {
//                                     res.json({
//                                         id: resultadoAutenticar[0].id,
//                                         email: resultadoAutenticar[0].email,
//                                         nome: resultadoAutenticar[0].nome,
//                                         nickname: resultadoAutenticar[0].nickname,
//                                         senha: resultadoAutenticar[0].senha,
//                                         aquarios: resultadoAquarios
//                                     });
//                                 } else {
//                                     res.status(204).json({ aquarios: [] });
//                                 }
//                             })
//                     } else if (resultadoAutenticar.length == 0) {
//                         res.status(403).send("Email e/ou senha inválido(s)");
//                     } else {
//                         res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

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

module.exports = {
    //autenticar,
    cadastrar
}