var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nomeHeroi, vidaBase, danoBase, tipoHeroi, fkUsuario) {
    console.log("ACESSEI O HERÓI MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeHeroi, vidaBase, danoBase, tipoHeroi, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO heroi (nomeHeroi, vidaBase, danoBase, tipoHeroi, fkUsuario) VALUES ('${nomeHeroi}', ${vidaBase}, ${danoBase}, '${tipoHeroi}', ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuantidadePorTipo() {
    var instrucaoSql = `
        SELECT tipoHeroi, COUNT(*) AS quantidade
        FROM heroi
        GROUP BY tipoHeroi;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAtributosHerois() {
    var instrucaoSql = `
        SELECT nomeHeroi, vidaBase, danoBase
        FROM heroi;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT idHeroi, nomeHeroi
        FROM heroi
        WHERE fkUsuario = ${idUsuario}
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrar,
    buscarQuantidadePorTipo,
    buscarAtributosHerois,
    listarPorUsuario
};