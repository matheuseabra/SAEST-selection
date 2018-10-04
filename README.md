# MVP SAEST Selection

## O que é?

SIGAEST é um sistema de gerência para assistência estudantil dos estudantes da UFPA.

## Screenshots

...

## Funcionalidades (v 1.0)
- Cadastro de Usuários
- Listagem de Usuários
- Exclusão de Usuários
- Autenticação (Login e Logout)
- Dashboard Admin

## Como executar localmente

Dê um fork ou download do repositório para a uma pasta de sua escolha, entre na pasta raiz do projeto pelo terminal:

Instale as depedências 

```javascript
npm install
```
Inicie o projeto

```javascript
npm start
```

## Arquitetura

É uma aplicação cliente usando React como UI + Redux para gerência de estado + Autenticação usando JWT (JSON Web Token).

## Estrutura de pastas

O projeto está estruturado da seguinte maneira:

- src
  - _actions     
  - _components
  - _helpers
  - _reducers
  - App.js
  - Router.js
  - styles
  

## Libs

Abaixo estão todas as libs usadas na aplicação até o momento, e suas respectivas funcionalidades

Nome | Função 
|:---:| :-----:|

redux | Status container
redux-thunk | Middleware for asynchronous actions
redux-logger | 
react-redux | Linking React to Redux
react-icons | Ícones
react-dom | 
react-router-dom |
history | Cria histórico de navegação no browser

## Problemas

Se você tiver encontrar algum problema ou bug, favor criar um issue no repositório

## Sobre

The project was developed to serve as the final project for the course of Computer Engineer of UFPa. Align subjects of Software Engineer, Programming, Agile Methods and Software Architecture.

It was developed by the following student:

- Matheus Seabra  
  - github.com/matheuseabra
  - https://matheuseabra.github.io/


