require('./conn/dbConnection')
const ejs = require('ejs')
const app = require('express')();
const httpServer = require('http').createServer(app);
const express = require('express')
const { Server } = require('socket.io');
const User = require('./models/User');
const Constant = require('./models/Constant');
const { Op } = require('sequelize');
const Message = require('./models/Message');
const port = 3000;
const io = new Server(httpServer)
const path = require('path')
Constant.belongsTo(User, {
  foreignKey: "sender_id",
  as: "sender"
})
Constant.belongsTo(User, {
  foreignKey: "reciever_id",
  as: "reciever"
})
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.sendfile('index.html')
})

app.get('/login', (req, res) => {
  res.sendfile('index.html')
})

app.get('/signup', (req, res) => {
  res.sendfile('public/signup.html')
})

app.get('/chat', async (req, res) => {
  const constants = await Constant.findAll({
    where: {
      [Op.or]:
        [
          {
            sender_id: 1
          },
          {
            reciever_id: 1
          }
        ]
    },
    include: [
      {
        model: User,
        as: "sender"
      },
      {
        model: User,
        as: "reciever"
      }
    ]
  })
  console.log('constants: ', constants.reciever);
  res.render('chat', { constants })
})

io.on('connection', (socket) => {
  console.log('user connected', socket.id)
  socket.on('connect_user', async user => {
    console.log('user: ', user);
    await User.update({
      socket_id: socket.id
    }, {
      where: {
        id: user.id
      }
    })
    io.emit('user_connected', user, socket.id)
  })

  socket.on('send_message', async data => {
    let findConstant = await Constant.findOne({
      where: {
        [Op.or]: [
          {
            sender_id: data.sender_id,
            reciever_id: data.reciever_id
          },
          {
            sender_id: data.reciever_id,
            reciever_id: data.sender_id
          }
        ]
      }
    })
    console.log('findConstant: ', findConstant);
    if (!findConstant) {
      findConstant = await Constant.create({
        sender_id: data.sender_id,
        reciever_id: data.reciever_id,
        last_message: data.message
      })
    } else {
      await Constant.update({
        last_message: data.message
      }, {
        where: {
          id: findConstant.id
        }
      })
    }
    await Message.create({
      constant_id: findConstant.id,
      sender_id: data.sender_id,
      reciever_id: data.reciever_id,
      message: data.message
    })
  })

  socket.on('getMessages',async (data)=>{
    const msgs = await Message.findAll({
      where:{
        constant_id:data.id
      }
    })
    io.emit('getMessagesListener',msgs)
  })
})

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})