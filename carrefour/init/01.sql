DROP DATABASE IF EXISTS carrefour;

CREATE DATABASE carrefour;

USE carrefour;

CREATE TABLE IF NOT EXISTS tipo (
    tipoId int not null AUTO_INCREMENT,
    nome varchar(300) not null,
	PRIMARY KEY (tipoId)
);


CREATE TABLE IF NOT EXISTS credito (
    creditoId int NOT NULL AUTO_INCREMENT,
    nome varchar(300) NOT NULL,
	valor decimal(10,2) NOT NULL,
    tipoId int NOT NULL,
    PRIMARY KEY (creditoId),
    FOREIGN KEY (tipoId) REFERENCES tipo(tipoId)
);

CREATE TABLE IF NOT EXISTS debito (
    debitoId int NOT NULL AUTO_INCREMENT,
    nome varchar(300) NOT NULL,
	valor decimal(10,2) NOT NULL,
    tipoId int NOT NULL,
    PRIMARY KEY (debitoId),
    FOREIGN KEY (tipoId) REFERENCES tipo(tipoId)
);


insert into tipo(nome) values("Aluguel");
insert into tipo(nome) values("Energia");
insert into tipo(nome) values("Manutenção");
insert into tipo(nome) values("Pagamento de funcionários");
insert into tipo(nome) values("Pagamento de fornecedores");
insert into tipo(nome) values("Recebimento de clientes");
insert into tipo(nome) values("Vale transporte");
insert into tipo(nome) values("Vale Refeição");

