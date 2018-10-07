<img src="http://saest.ufpa.br/portal/images/saest.png" width="45px"> 

# MVP SIGAEST (SAEST Selection)
![Version](https://img.shields.io/badge/version-1.0-green.svg)

SIGAEST é um  Sistema Gerêncial de Assistência Estudantil dos estudantes universitários da Universidade Federal do Pará.

### Painel do administrador
<img src="https://github.com/matheuseabra/SAEST-selection/blob/master/src/images/sigaest-dashboard.png" width="100%">

### Crie sua conta
<img src="https://github.com/matheuseabra/SAEST-selection/blob/master/src/images/cadastro.png" width="100%">

### Realize login
<img src="https://github.com/matheuseabra/SAEST-selection/blob/master/src/images/login.png" width="100%">


## Funcionalidades (Requisitos 1° iteração)
- Cadastro de Usuários :heavy_check_mark:
- Listagem de Usuários :heavy_check_mark:
- Exclusão de Usuários :heavy_check_mark:
- Deve existir uma sessão para autenticação :heavy_check_mark:
- Telas restritas devem estar protegidas de acesso, caso não exista sessão ou autenticação :heavy_check_mark:
- Usuário irá poder fazer logoff :heavy_check_mark:
- Painel do administrador :heavy_check_mark:
- O administrador poderá ver todos os alunos cadastrados no sistema. :heavy_check_mark:
- O administrador poderá editar suas informações. (em implementação)
- O administrador poderá criar, excluir e editar editais ao sistema. (em implementação)


## Como executar localmente

Dê um fork ou faça download do repositório para a pasta de sua escolha, depois entre na pasta raiz do projeto e digite os seguintes comandos pelo terminal:

Instale as dependências: 

```javascript
npm install
```
Inicie o projeto:

```javascript
npm start
```

## Arquitetura

A aplicação utiliza React para compor a UI em componentes, e Redux para gerenciar o "state" (dados) que esses componentes exibem. O Redux é uma biblioteca para gerência de estado de aplicações-cliente que segue os princípios da arquitetura Flux, criada pelo Facebook.

Abaixo está um diagrama simples de como o Redux funciona junto com o React:

<img src="https://github.com/matheuseabra/SAEST-selection/blob/master/src/images/arquitetura.png" width="65%">

## Estrutura de pastas

A aplicação está estruturada da seguinte maneira:

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
redux | Gerência de estado da aplicação
redux-thunk | Middleware para ações assíncronas
redux-react-session | Criação de sessão com Redux
react-redux | Integração do React com Redux
redux-form | Criação de formulários com Redux
redux-logger | Logger para Redux  
react-icons | Ícones para React   
react-router-dom | Gerência de Rotas
history | Cria um histórico de navegação no browser
bootstrap | Framework css para layouts responsivos

## Guia de Estilo

### Tipografia

- font: 'Open Sans', sans-serif
- font-light: 300
- font-bold: 700

- font-size-sm: 14px
- font-size-md: 16px
- font-size-lg: 18px

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

### Breakpoints de dispositivos (responsividade) 

- sm: 480px
- md: 678px
- lg: 768px

## Sugestões

Se você tiver alguma sugstão ou encontrar algum bug, favor criar um issue no repositório

## Autor

Este projeto foi desenvolvido por Matheus Seabra:  
  - github.com/matheuseabra
  - https://matheuseabra.github.io/


