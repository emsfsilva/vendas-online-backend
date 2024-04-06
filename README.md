<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


INSTALANDO O NEST (DIGITAR NO CMD DO WINDOWS DENTRO DA PASTA DO PROJETO)
**npm i -g @nestjs/cli**

 -----------COMANDOS DO GIT ------------------
CLONANDO (LINKAR) O PROJETO QUE ESTA NO GIT PARA INICIAR. DIGITAR DENTRO DA PASTA DO PROJETO NO CMD DO WINDOWS
**git clone**

MOSTRAR O ESTATUS DO PROJETO NO GIT
**git status**

PREPARANDO PARA ADCIONAR NO GIT
**git add .**

PREPARANDO O COMMIT NO GIT COM UMA MENSAGEM
**git commit -m "feat:start project"**

ENVIANDO AS ALTERAÇÕES
**git push**


-----------COMANDOS DO PROJETO ------------------

INICIAR O PROJETO NO MODO DEV
**npm run start:dev**

CRANDO MOLUDOS PELO TERMINAL
(São pastas que ficam no SRC)
**nest g module nomedapasta**

CRAINDO AS MIGRATIONS (SCRIPT QUE CRIA OU ALTERA A TABELA NO BANCO)
./src/migration/create_table_user (SIGINIFICA A PASTA QUE SERA CRIADA)
**npx typeorm migration:create ./src/migration/nome_da_migration(sem TS)**
EXEMPLO: npx typeorm migration:create ./src/migration/create-table-category


-----------DEPENDENCIAS INSTALADAS NO PROJETO ------------------

DEPENDENCIA PARA CRIPTOGRAFAR A SENHA

**npm i bcrypt**
**npm i -D @types/bcrypt**

DEPENDENCIA PARA A CONECXÃO DO BANCO DE DADOS
**npm i --save @nestjs/config**

DEPENDENCIA DO GERENCIADOR DO BANCO DE DADOS
**npm install --save typeorm pg @nestjs/typeorm**

DEPENDENCIA PARA CHACHE DOS ESTADOS (carregamento rapido)
**npm install cache-manager**

DEPENDENCIA PARA VALIDAR O USUARIO LOGADO
**npm i --save class-validator class transformer**

DEPENDENCIA PARA AUTENTICAÇÃO
**npm install --save @nestjs/passport passport passport-local**
**npm install --save-dev @types/passport-local**
**npm install --save @nestjs/jwt passport-jwt**
**npm install --save-dev @types/passport-jwt**




