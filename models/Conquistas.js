const db = require("../db/conn");
const { DataTypes } = require("sequelize");
const Jogo = require("../models/Jogo");

const Conquista = db.define(
  "Conquista",
  {
    quantidade: {
      type: DataTypes.INTEGER(50),
      allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
  },
  {
    tableName: "Conquistas",
  }
);

Conquista.belongsTo(Jogo);
Usuario.hasMany(Conquista);

module.exports = Conquista;
