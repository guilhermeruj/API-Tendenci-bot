const express = require("express");
const bodyParser = require("body-parser");
const conn = require("./db/conn.js");
const Clientes = require("./models/chat.js");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Olá, seja bem-vindo!" });
});

require("./router/chat.router")(app);

const PORT = process.env.PORT || 3030;

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
