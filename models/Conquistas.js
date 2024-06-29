const db = require("../db/conn");
const { DataTypes } = require("sequelize");
const Jogo = require("../models/Jogo");

const Conquista = db.define(
  "Conquista",
  {
    titulo: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING(60),
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
