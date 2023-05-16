module.exports = (app) => {
  const chats = require("../controller/chat.controller.js");

  var router = require("express").Router();

  //  Criar um novo Chat
  router.post("/", chats.create);

  app.use("/api/chats", router);
};
