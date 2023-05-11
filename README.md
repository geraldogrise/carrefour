# Carrefoiur desafio
## Fluxo de Caixa
![desenho](desenho.png)

## Tecnologias

- Node js
- TypeORM
- Jest
- Swagger
- MySql
- Docker
- Prometheus
- Grafana

## Instalação
Para instalar todo o ambiente do sistema deve utilizar o comando dentro da pasta carrefour na pasta principal do projeto
![pasta](pastas.png)
```sh
docker-compose up 
```
Pode executar também o arquivo docker.cmd

Com todas as aplicações executando normalmente segue os acessos

| Aplicação | Host |  login | senha
| ------ | ------ | ------ | ------ 
| phpmyadmin | http://localhost:8089/index.php | root | carrefour@123
| CarrefourApi | http://localhost:9000/api-docs/swagger/ | ------ | ------
| UserApi | http://localhost:9001/api-docs/swagger/ | ------ | ------
| Grafana | http://localhost:3000 | admin | admin
| Promethus | http://localhost:9090 | ------ | ------
   

