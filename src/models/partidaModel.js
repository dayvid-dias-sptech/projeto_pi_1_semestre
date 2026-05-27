var database = require("../database/config")


function buscarHeroiMaisUtilizado() {
    var instrucaoSql = `
        SELECT h.nomeHeroi, h.tipoHeroi, COUNT(p.idPartida) AS quantidadePartidas
        FROM partida p
        JOIN heroi h ON p.fkHeroi = h.idHeroi
        GROUP BY h.idHeroi, h.nomeHeroi, h.tipoHeroi
        ORDER BY quantidadePartidas DESC LIMIT 1;
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

function cadastrar(fkHeroi, porcentagemAcerto, porcentagemCritico, eliminacoes, mortes, assistencias, resultadoPartida) {
    var instrucaoSql = `
        INSERT INTO partida (porcentagemAcerto, porcentagemCritico, eliminacoes, mortes, assistencias, resultadoPartida, fkHeroi) VALUES (${porcentagemAcerto}, ${porcentagemCritico}, ${eliminacoes}, ${mortes}, ${assistencias}, ${resultadoPartida}, ${fkHeroi});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarHeroiMaisUtilizado,
    buscarMediaEliminacoesPorHeroi,
    buscarKdaPorHeroi,
    buscarKmaPorHeroi,
    buscarPrecisaoCriticaPorHeroi,
    buscarTop5PartidasKda,
    cadastrar
};
