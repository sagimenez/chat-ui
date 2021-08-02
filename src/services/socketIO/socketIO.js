import socketIOClient from 'socket.io-client';
// import { ReceiveMessage } from '../../views/Conversation/ConversationView';
const endpoint = 'http://localhost:3030';

// var newMsg = '';
// var socket = socketIOClient(endpoint);
// socket.on('chat', data => {
//     newMsg = data;
//     ReceiveMessage(data);
// });

export function emitMessage(msg) {
    var socket = socketIOClient(endpoint);
    socket.emit('chat', msg);
}