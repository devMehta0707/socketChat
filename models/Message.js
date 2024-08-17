const { DataTypes } = require('sequelize');
const sequelize = require('../conn/dbConnection');

const Message = sequelize.define('messages',{
  constant_id:{
    type:DataTypes.STRING
  },
  sender_id:{
    type:DataTypes.STRING
  },
  reciever_id:{
    type:DataTypes.STRING
  },
  message:{
    type:DataTypes.STRING
  }
},{
  timestamps:true
})

module.exports = Message;