'use strict';

class ChatMessage {
  constructor(data){
    // data,
    this.username = data.username,
    this.message = data.message,
    this.timestamp = data.timestamp
  }

  render(parentEl){
    let container = document.createElement('div');
    let timestamp = document.createElement('span');
    let username = document.createElement('span');
    let message = document.createElement('span');

    username.classList.add('username');
    timestamp.classList.add('timestamp');
    container.classList.add('message');

    
    timestamp.textContent = this.timestamp;
    message.textContent = this.message;
    username.textContent = this.username + ': ';
    
    // if(this.data.socket.id){
    //   console.log('insinde IF');  
    //   username.textContent = this.data.socket.id.username;
    // }

    container.appendChild(timestamp);
    container.appendChild(username);
    container.appendChild(message);

    parentEl.appendChild(container);
  }
}