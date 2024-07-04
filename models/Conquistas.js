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

Conquista.belongsTo(Jogo, { foreignKey: 'idJogo' });
Usuario.hasMany(Conquista, { foreignKey: 'idJogo' });

module.exports = Conquista;
