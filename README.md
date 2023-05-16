
#  Bot API


##  Descrição

  

API criada para atendimento da Tendenci no site e para salvar os dados do cliente.

  

##  Estrutura de Arquivos



├── server.js

├── package.json

├── models/

| ├── index.js

| └── chat.js

├── routes/

| └── chat.routes.js

└── controllers/

└── chat.controller.js

  

##  Instalação

  

git clone https://github.com/guilhermeruj/botTendenci.git

  

##Entre no diretório

  

cd botTendenci

  

##Instale as dependências

  

npm install

  

##Execução

  

Para iniciar o servidor, execute:

  

npm start

  

O servidor estará rodando na porta 3030 ou na porta definida na variável de ambiente PORT.

  

#  Uso
  **Rota**
[POST /api/chats]
Cria um novo chat.  

##  Parâmetros da requisição:

- nome: String 

- telefone: String

- assunto: String

- Resposta: Retorna o objeto do chat criado.]
## Contribuição
Por favor, leia o **CONTRIBUTING.md** para detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de pull.

# Licença
**All Rights Reserved**
Consulte LINCESE.md