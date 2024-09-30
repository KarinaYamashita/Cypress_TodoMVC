# Automação dos testes e2e no website todoMVC usando Cypress :clipboard:

Esse repositório contém uma aplicação para testes e2e para o website: **[todoMVC](https://todomvc.com/examples/react/dist/)**. A automação dos testes foi realizada utilizando como linguagem de programação Javascript e POM( page Object Model).

![alt text](/READMEImage/image.png)

Resultados obtidos:
![alt text](/READMEImage/report.png)

## Estrutura

Para o desenvolvimento deste projeto a estrutura de diretórios é:

- support/elements: diretório responsável por armazenar os arquivos dos objetos que contém o mapeamento dos elementos da aplicação.

- support/pageObjects: diretório que contém as classes, nas quais são armazenados os métodos e asserções empregados.

- e2e: diretório responsável por armazenar os arquivos de testes para cada uma das funcionalidades testadas.

## Pré-requisitos:

Para que seja possível executar este projeto é necessário ter instalado:

- Node

- Cypress


## Instalação

Utilizando o Terminal/Console:

1. Clone o projeto : `git@github.com:KarinaYamashita/Cypress_TodoMVC.git`

2. Acesse a pasta raiz do projeto

3. Execute o comando: `npm init`

4. Execute o comando: `npm run cy:open`

## Gerando report
Para gerar o report no formato exibido na imagem abaixo. Insira os seguites comandos no terminal:
1. npx mochawesome-merge "cypress/results/*.json" > mochawesome.json

2. npx marge mochawesome.json

![alt text](/READMEImage/prettyReport.png)

Referência utilizada: https://docs.cypress.io/guides/tooling/reporters#Reporter-Options

## Autora :princess:

- Karina Yamashita 


