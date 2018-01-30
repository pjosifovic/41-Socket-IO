'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

require('dotenv').config();

app.use(express.static('./public'));

//TODO: add io listener io.on
io.on('connection', socket => {
  console.log('JOINED CHAT', socket.id);
 
  socket.on('disconnect', () => {
    console.log('LEFT CHAT', socket.id);
  })

  socket.on('send-message', data => {
    console.log('DATA MESSAGE', data.message);
    io.emit('receive-message', data);
  });
  
})

http.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});

