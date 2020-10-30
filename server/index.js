const express = require('express')
const cors = require('cors')
const socket = require('socket.io')
const app = express()

app.use(cors())
app.use(express.json())

const server = app.listen('3001', () => {
  console.log('Server running on port 3001')
})

io = socket(server)

io.on('connection', (socket) => {
  console.log(socket.id)

  socket.on('join_room', (data) => {
    socket.join(data)

    console.log('User joined room: ', data)
  })

  socket.on('send_message', (data) => {
    console.log(data)
    socket.to(data.room).emit('recive_message', data.content)
  })

  socket.on('disconnect', () => {
    console.log('User Disconnected')
  })
})
