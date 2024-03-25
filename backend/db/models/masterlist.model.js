const sequelize = require("../config/sequelize.config");
const { DataTypes } = require("sequelize");

const MasterList = sequelize.define("masterlist", {
  col_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  col_roleID: {
    // Change the column name to col_roleID
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: false,
  },
  col_Fname: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  col_address: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  col_username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  col_phone: {
    type: DataTypes.BIGINT,
    allowNull: true,
    unique: false,
  },
  col_email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
    validate: {
      isEmail: true,
    },
  },
  col_Pass: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  col_status: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
});

module.exports = MasterList;
