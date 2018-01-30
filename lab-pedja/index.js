'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

require('dotenv').config();

app.use(express.static('./public'));

//TODO: add io listener io.on

http.listen(process.env.PORT, () => {
  console.log(`Server started on port: ${process.env.PORT}`);
});

