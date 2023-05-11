DROP DATABASE IF EXISTS carrefourad;

CREATE DATABASE carrefourad;

USE carrefourad;

CREATE TABLE IF NOT EXISTS user (
    userId int NOT NULL AUTO_INCREMENT,
    nome varchar(300) NOT NULL,
	login varchar(100) NOT NULL,
	senha varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	telefone varchar(15) NOT NULL,
    PRIMARY KEY (userId)
);


INSERT INTO `user` ( `nome`, `login`, `senha`, `email`, `telefone`) VALUES ('Geraldo Grise', 'geraldo', 'geraldo@123', 'geraldogrise@hotmail.com', '(71) 9999-9999');

