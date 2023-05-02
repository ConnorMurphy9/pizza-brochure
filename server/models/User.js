// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class User extends Model {}
//  User.init(  
//     {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }  
// },
//   {  
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "user",
// },
// );

// module.exports = User;

// Import the necessary Sequelize module and database configuration
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the `User` model
const User = sequelize.define('User', {
  // Define the columns of the `users` table
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Export the `User` model
module.exports = User;

