-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE overwatch;
USE overwatch;

CREATE TABLE IF NOT EXISTS usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    nickname VARCHAR(45) NOT NULL UNIQUE,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    dataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS heroi(
idHeroi INT PRIMARY KEY AUTO_INCREMENT,
nomeHeroi VARCHAR(45) NOT NULL,
vidaBase INT NOT NULL,
danoBase INT NOT NULL,
tipoHeroi VARCHAR(45) NOT NULL,
fkUsuario INT,
FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE IF NOT EXISTS partida (
idPartida INT PRIMARY KEY AUTO_INCREMENT,
porcentagemAcerto INT NOT NULL,
porcentagemCritico INT NOT NULL,
eliminacoes INT NOT NULL DEFAULT 0,
mortes INT NOT NULL DEFAULT 0,
assistencias INT NOT NULL DEFAULT 0,
fkHeroi INT,
FOREIGN KEY (fkHeroi) REFERENCES heroi(idHeroi)
);