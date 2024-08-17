const { DataTypes } = require('sequelize');
const sequelize = require('../conn/dbConnection');

const Constant = sequelize.define('constants',{
  sender_id:{
    type:DataTypes.STRING
  },
  reciever_id:{
    type:DataTypes.STRING
  },
  last_message:{
    type:DataTypes.STRING
  }
},{
  timestamps:true
})

module.exports = Constant;