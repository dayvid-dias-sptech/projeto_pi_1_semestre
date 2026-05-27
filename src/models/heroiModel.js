var database = require("../database/config");

function cadastrar(nomeHeroi, vidaBase, danoBase, tipoHeroi, fkUsuario) {
    console.log("ACESSEI O HEROI MODEL \n function cadastrar():", nomeHeroi, vidaBase, danoBase, tipoHeroi, fkUsuario);

    var instrucaoSql = `
        INSERT INTO heroi (nomeHeroi, vidaBase, danoBase, tipoHeroi, fkUsuario) VALUES ('${nomeHeroi}', ${vidaBase}, ${danoBase}, '${tipoHeroi}', ${fkUsuario});
    `;

    console.log("Executando a instrucao SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT idHeroi, nomeHeroi
        FROM heroi
        WHERE fkUsuario = ${idUsuario}
    `;

    console.log("Executando a instrucao SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listarPorUsuario
};
