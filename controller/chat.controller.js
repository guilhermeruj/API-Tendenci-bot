const db = require("../db/conn.js");
const Chat = require("../models/chat.js");

exports.create = (req, res) => {
  //Validar a requisição
  if (!req.body.nome) {
    res.status(400).send({
      message: "Conteúdo não pode ser vazio!",
    });
    return;
  }

  const chat = {
    nome: req.body.nome,
    telefone: req.body.telefone,
    assunto: req.body.assunto,
  };

  Chat.create(chat)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu u, erro ao criar o Chat.",
      });
    });
};
