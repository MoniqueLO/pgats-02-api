# API de Teste de Serviço

Esta API permite realizar operações de login, registro de usuários, consulta de usuários e transferência de valores, com regras básicas para aprendizado de testes e automação.

## Instalação

1. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express
   ```

2. Inicie o servidor:
   ```powershell
   node server.js
   ```

## Endpoints

- `POST /register`: Registra um novo usuário. Campos obrigatórios: `username`, `password`. Opcional: `isFavorecido` (boolean).
- `POST /login`: Realiza login. Campos obrigatórios: `username`, `password`.
- `GET /users`: Lista todos os usuários registrados.
- `POST /transfer`: Realiza transferência de valores. Campos obrigatórios: `from`, `to`, `amount`.
- `GET /transfers`: Lista todas as transferências realizadas.
- `GET /api-docs`: Documentação Swagger da API.

## Regras de Negócio

- Não é permitido registrar usuários duplicados.
- Login exige usuário e senha válidos.
- Transferências acima de R$ 5.000,00 só podem ser feitas para usuários marcados como "favorecido".

## Testes

Para testar a API com Supertest, importe o `app.js` em seu arquivo de teste.

## Observações

- O banco de dados é em memória, os dados são perdidos ao reiniciar o servidor.
- A API foi criada para fins de aprendizado e automação de testes.
