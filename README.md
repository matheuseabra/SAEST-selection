# <img src="http://saest.ufpa.br/portal/images/saest.png" width="55px"> 
![Version](https://img.shields.io/badge/version-1.0-green.svg)

# MVP SAEST Selection

SIGAEST é um sistema gerencial de assistência estudantil dos estudantes universitários da Universidade Federal do Pará (UFPA).

Screenshots...

## Features (v 1.0)
- Cadastro de Usuários
- Listagem de Usuários
- Exclusão de Usuários
- Autenticação (Login e Logout)
- Dashboard Admin

## Como executar localmente

Dê um fork ou faça download do repositório para a de sua escolha, depois entre na pasta raiz do projeto pelo terminal:

Instale as dependências: 

```javascript
npm install
```
Inicie o projeto:

```javascript
npm start
```

## Arquitetura

É uma aplicação-cliente usando React como UI + Redux para gerência de estado + Autenticação usando JWT (JSON Web Token).

<img src="https://github.com/matheuseabra/SAEST-selection/blob/master/Untitled%20Diagram.png" width="65%">


## Estrutura de pastas

O projeto está estruturado da seguinte maneira:

- src
  - _actions     
  - _components
  - _constants
  - _helpers
  - _reducers
  - _services
  - styles
  - index.jsx
 
  

## Libs

Abaixo estão todas as libs usadas na aplicação até o momento, e suas respectivas funcionalidades

Nome | Função da lib 
|:---:| :-----:|
redux | Gerência de estado
redux-thunk | Middleware para ações assíncronas
redux-react-session | Criação de sessão com redux
react-redux | Integração do React com Redux
react-icons | Ícones para React   
react-router-dom | Gerência de Rotas
history | Cria um histórico de navegação no browser

## Problemas

Se você tiver encontrar algum problema ou bug, favor criar um issue no repositório

## Sobre

Este projeto foi desenvolvido por Matheus Seabra:  
  - github.com/matheuseabra
  - https://matheuseabra.github.io/


