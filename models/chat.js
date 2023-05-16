const { DataTypes } = require("sequelize");

// Importar o conector do banco
const db = require("../db/conn");

const Clientes = db.define("clientes", {
  nome: {
    type: DataTypes.STRING,
  },
  telefone: {
    type: DataTypes.STRING,
  },
  assunto: {
    type: DataTypes.STRING,
  },
});

module.exports = Clientes;
