const { STRING, Sequelize } = require("sequelize");
const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    species:{
      type: DataTypes.STRING,
      defaultValue: undefined
    },
    origin:{
      type: DataTypes.STRING, 
      defaultValue: undefined
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: undefined
    },
    created:{
      type: DataTypes.STRING,
      defaultValue: undefined
    },
  });
};
