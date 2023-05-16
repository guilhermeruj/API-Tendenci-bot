API criada para o atendimento da Tendenci no site e salvar os dados do cliente.



├── server.js
├── package.json
├── models/
| ├── index.js
| └── chat.js
├── routes/
| └── chat.routes.js
└── controllers/
└── chat.controller.js

markdown
Copy code

## Dependências

- express
- body-parser
- cors
- mysql2
- nodemon
- sequelize

## Uso

1. Certifique-se de ter o Node.js instalado.
2. Execute `npm install` para instalar as dependências.
3. Configure as credenciais do banco de dados MySQL em `db/conn.js`.
4. Execute `npm start` para iniciar o servidor na porta 3030.

## Rotas

- POST /api/chats: Cria um novo registro de chat.

## Autor

Guilherme Rosa

## Licença

ISC

# Bot Tendenci API
## Descrição

API criada para atendimento da Tendenci no site e para salvar os dados do cliente.

## Estrutura de Arquivos
.
├── server.js
├── package.json
├── models/
|   ├── index.js
|   └── chat.js
├── routes/
|   └── chat.routes.js
└── controllers/
    └── chat.controller.js
## Instalação

git clone https://github.com/guilhermeruj/botTendenci.git

##Entre no diretório

cd botTendenci

##Instale as dependências

npm install

##Execução

Para iniciar o servidor, execute:

npm start

O servidor estará rodando na porta 3030 ou na porta definida na variável de ambiente PORT.

# Uso
## Rota

[POST /api/chats]

Cria um novo chat.

## Parâmetros da requisição:

- [nome: String]
- [telefone: String]
- [assunto: String]
- [Resposta:]
- [Retorna o objeto do chat criado.]

##Contribuição

Por favor, leia o [CONTRIBUTING.md] para detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de pull.

#Licença
[SC]