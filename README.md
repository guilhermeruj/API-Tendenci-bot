
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

## Licença

Todos os direitos sobre este projeto estão reservados. Nenhuma permissão é concedida para uso, cópia, modificação ou distribuição do código-fonte, sem a autorização prévia por escrito do detentor dos direitos autorais.

Para obter mais informações sobre a licença e solicitar permissão, entre em contato conosco através de [endereço de e-mail da equipe de desenvolvimento].