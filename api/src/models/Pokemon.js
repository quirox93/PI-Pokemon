const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sprite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spd: {
      type: DataTypes.INTEGER,
      validation: {
        min: 1,
      },
      defaultValue: 1,
    },
    height: {
      type: DataTypes.INTEGER,
      validation: {
        min: 1,
      },
      defaultValue: 1,
    },
    weight: {
      type: DataTypes.INTEGER,
      validation: {
        min: 1,
      },
      defaultValue: 1,
    },
  });
};
