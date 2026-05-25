var database = require("../database/config")


function buscarHeroiMaisUtilizado() {
    var instrucaoSql = `
        SELECT h.nomeHeroi, COUNT(p.idPartida) AS quantidadePartidas
        FROM partida p
        JOIN heroi h ON p.fkHeroi = h.idHeroi
        GROUP BY h.idHeroi, h.nomeHeroi
        ORDER BY quantidadePartidas DESC;
    `;

    return database.executar(instrucaoSql);
}

function buscarPrecisaoPorHeroi() {
    var instrucaoSql = `
        SELECT h.nomeHeroi, AVG(p.porcentagemAcerto) AS mediaAcerto
        FROM partida p
        JOIN heroi h ON p.fkHeroi = h.idHeroi
        GROUP BY h.idHeroi, h.nomeHeroi
        ORDER BY mediaAcerto DESC;
    `;

    return database.executar(instrucaoSql);
}

function buscarMediaEliminacoesPorHeroi() {
    var instrucaoSql = `
        SELECT h.nomeHeroi, AVG(p.eliminacoes) AS mediaEliminacoes
        FROM partida p
        JOIN heroi h ON p.fkHeroi = h.idHeroi
        GROUP BY h.idHeroi, h.nomeHeroi
        ORDER BY mediaEliminacoes DESC;
    `;

    return database.executar(instrucaoSql);
}

function buscarKdaPorHeroi() {
    var instrucaoSql = `
        SELECT 
            h.nomeHeroi,
            AVG((p.eliminacoes + p.assistencias) / NULLIF(p.mortes, 0)) AS kda
        FROM partida p
        JOIN heroi h ON p.fkHeroi = h.idHeroi
        GROUP BY h.idHeroi, h.nomeHeroi
        ORDER BY kda DESC;
    `;

    return database.executar(instrucaoSql);
}

function buscarKmaPorHeroi() {
    var instrucaoSql = `
        SELECT 
            h.nomeHeroi,
            AVG(p.eliminacoes) AS mediaEliminacoes,
            AVG(p.mortes) AS mediaMortes,
            AVG(p.assistencias) AS mediaAssistencias
        FROM partida p
        JOIN heroi h ON p.fkHeroi = h.idHeroi
        GROUP BY h.idHeroi, h.nomeHeroi;
    `;

    return database.executar(instrucaoSql);
}

function buscarTop5PartidasKda() {
    var instrucaoSql = `
        SELECT 
            p.idPartida,
            h.nomeHeroi,
            ((p.eliminacoes + p.assistencias) / NULLIF(p.mortes, 0)) AS kda
        FROM partida p
        JOIN heroi h ON p.fkHeroi = h.idHeroi
        ORDER BY kda DESC
        LIMIT 5;
    `;

    return database.executar(instrucaoSql);
}

function buscarPrecisaoCriticaPorHeroi() {
    var instrucaoSql = `
        SELECT h.nomeHeroi, AVG(p.porcentagemCritico) AS mediaCritico
        FROM partida p
        JOIN heroi h ON p.fkHeroi = h.idHeroi
        GROUP BY h.idHeroi, h.nomeHeroi
        ORDER BY mediaCritico DESC;
    `;

    return database.executar(instrucaoSql);
}



module.exports = {
    buscarHeroiMaisUtilizado,
    buscarPrecisaoPorHeroi,
    buscarMediaEliminacoesPorHeroi,
    buscarKdaPorHeroi,
    buscarKmaPorHeroi,
    buscarPrecisaoCriticaPorHeroi,
    buscarTop5PartidasKda
};