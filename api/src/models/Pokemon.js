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
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    velocidad: {
      type: DataTypes.INTEGER,
      validation: {
        min: 1,
      },
      defaultValue: 1,
    },
    altura: {
      type: DataTypes.INTEGER,
      validation: {
        min: 1,
      },
      defaultValue: 1,
    },
    peso: {
      type: DataTypes.INTEGER,
      validation: {
        min: 1,
      },
      defaultValue: 1,
    },
  });
};
