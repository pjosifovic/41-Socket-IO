'use strict';

const socket = io();
console.log('socket_ID:', socket.id);

let sendMessageForm = document.getElementById('send-message-form');
let messageInput = document.getElementById('message-input');
let messageContainer = document.getElementById('messages');

sendMessageForm.addEventListener('submit', event => {
  event.preventDefault();
  let message = messageInput.value;
  socket.emit('send-message', { message });
});

socket.on('receive-message', data => {
  console.log('RECEIVED', data);
  let message = new ChatMessage(data);
  message.render(messageContainer);
})

let setUsernameForm = document.getElementById('set-username-form');
let usernameInput = document.getElementById('username-input');

setUsernameForm.addEventListener('submit', event => {
  event.preventDefault();
  let username = usernameInput.value;
  socket.emit('set-username', { username });
});

