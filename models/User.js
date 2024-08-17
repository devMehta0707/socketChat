const { DataTypes } = require('sequelize');
const sequelize = require('../conn/dbConnection');

const User = sequelize.define('users',{
  socket_id:{
    type:DataTypes.STRING
  },
  name:{
    type:DataTypes.STRING
  },
  email:{
    type:DataTypes.STRING
  },
  password:{
    type:DataTypes.STRING
  }
},{
  timestamps:true
})

module.exports = User;