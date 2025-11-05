# API Sistema Financeiro

Um esqueleto simples de API em Node.js focado em funcionalidades financeiras. O servidor principal está em `src/app.js` e utiliza Express. Este README descreve como instalar, executar e contribuir para o projeto.

## Tecnologias

- Node.js (recomenda-se v18+)
- Express
- CORS
- dotenv (utilizado para carregar variáveis de ambiente — listado como devDependency)

## Pré-requisitos

- Node.js v18+ (ou versão LTS atual)
- npm (ou yarn/pnpm)

> Assunção: o projeto usa `dotenv` como dependência de desenvolvimento. Caso sua aplicação utilize variáveis de ambiente em produção, configure-as no ambiente de execução.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/sCube-dv/api-sistema-financeiro.git
cd api-sistema-financeiro
```

2. Instale dependências:

```bash
npm install
# ou, se preferir:
# yarn install
# pnpm install
```

## Execução

O `package.json` define o script `dev` que inicia a aplicação em modo de desenvolvimento com watch:

```bash
npm run dev
```

Para executar em produção (sem script `start` definido), você pode rodar diretamente o arquivo principal:

```bash
node ./src/app.js
```

Se você optar por usar variáveis de ambiente, crie um arquivo `.env` na raiz com as chaves necessárias (ex.: PORT, DB_URL, etc.). O projeto lista `dotenv` como devDependency, então durante o desenvolvimento será possível carregar `.env` automaticamente se `src/app.js` estiver configurado para isso.

## Estrutura do projeto

Uma visão rápida dos arquivos e pastas principais:

- `package.json` — manifesto do projeto e scripts
- `src/app.js` — ponto de entrada do servidor Express

Adicione mais pastas (routes, controllers, models, services) conforme o projeto crescer.

## Como contribuir

1. Faça um fork do repositório.
2. Crie uma branch com sua feature/bugfix: `git checkout -b feat/minha-feature`.
3. Faça commits pequenos e descritivos.
4. Abra um Pull Request descrevendo a mudança.

## Testes

No momento não há testes automatizados configurados. É recomendável adicionar um conjunto mínimo de testes (por exemplo com Jest ou Mocha) antes de ampliar funcionalidades.

## Licença

Este projeto está licenciado sob a licença ISC (ver `package.json`).

## Contato

Autor: Samuel Santos

Repositório: https://github.com/sCube-dv/api-sistema-financeiro

--

Se quiser, eu posso também:

- Gerar um exemplo de `.env` baseado em chaves que o `src/app.js` utiliza (posso analisar o arquivo e propor variáveis).
- Adicionar um script `start` no `package.json` para facilitar deploy em produção.

Diga qual dessas opções você prefere que eu faça a seguir.