'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const dateFormat = require('dateformat');
const now = new Date();

require('dotenv').config();

app.use(express.static('./public'));

const USERS = {};


io.on('connection', socket => {
  USERS[socket.id] = {};
  USERS[socket.id].username = 'anonymous';

  socket.on('disconnect', () => {
    console.log('LEFT CHAT', socket.id);
  })

  socket.on('send-message', data => {
    data.username = USERS[socket.id].username;
    data.timestamp = dateFormat(now);
    console.log('DATA MESSAGE', data.message);
    io.emit('receive-message', data);
  });

  socket.on('set-username', data => {
    USERS[socket.id].username = data.username;
  });

});

http.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});

