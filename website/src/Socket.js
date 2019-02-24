import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function postIncident(username, message) {
  socket.emit('new message', {
    user_name : username,
    message: message
  } )
}

function subscribeToIncident(cb) {
  socket.on('push message', msg => cb(null, msg));
}


export { postIncident, subscribeToIncident };
