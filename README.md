# <img src="http://saest.ufpa.br/portal/images/saest.png" width="55px"> 
![Version](https://img.shields.io/badge/version-1.0-green.svg)

# MVP SAEST Selection

SIGAEST é um sistema gerencial de assistência estudantil dos estudantes universitários da Universidade Federal do Pará (UFPA).

<img src="https://github.com/matheuseabra/SAEST-selection/blob/master/src/images/sigaest-dashboard.png" width="100%">

## Funcionalidades (1° iteração)

- Dashboard Admin
- Autenticação (Login e Logout)
- Cadastro de Usuários
- Listagem de Usuários
- Exclusão de Usuários


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

<img src="https://github.com/matheuseabra/SAEST-selection/blob/master/src/images/arquitetura.png" width="65%">


## Estrutura de pastas

O projeto está estruturado da seguinte maneira:

- src
  - _actions     
  - _components
  - _constants
  - _helpers
  - _reducers
  - _services (containers)
  - styles
  - images
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
bootstrap | Framework para layouts responsivos

## Guia de Estilo

### Tipografia

- font: 'Open Sans', sans-serif
- font-light: 300
- font-bold: 700

- font-size-sm: 14px
- font-size-md: 16px
- font-size: 18px

### Paleta de cores primária

- blue-light: #B3D0E7
- blue-dark: #337AB7
- yellow: #ECC633
- pink: #C32B66

### Secundárias

- white: #FFF
- white-opaque: #F5F5F5
- grey: #DDDDDD
- dark-grey: #464646
- black: #212121

### Títulos

- h1: 36px
- h2: 24px
- h3: 18px
- h4: 12px

### Breakpoints de dispotivos (responsividade) 

- sm: 480px
- md: 678px
- lg: 768px

## Sugestões

Se você tiver alguma sugstão ou encontrar algum bug, favor criar um issue no repositório

## Sobre

Este projeto foi desenvolvido por Matheus Seabra:  
  - github.com/matheuseabra
  - https://matheuseabra.github.io/


