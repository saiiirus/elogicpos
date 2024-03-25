// sequelize.config.js
const sequelize = require('../config/sequelize.config');
const { DataTypes } = require('sequelize');

const UserRole = sequelize.define('userRole', {
  col_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  col_rolename: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  col_desc: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  col_authorization: {
    type: DataTypes.STRING(2000), // Change to STRING type
    allowNull: true,
    get() {
      // Deserialize the JSON string to an array
      const value = this.getDataValue('col_authorization');
      return value ? JSON.parse(value) : [];
    },
    set(value) {
      // Serialize the array to a JSON string
      this.setDataValue('col_authorization', JSON.stringify(value));
    },
  }
});

module.exports = UserRole;
