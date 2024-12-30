const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const dialogflow = require('../nlu/dialogflow');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Listen for incoming messages from the website
io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('chat message', async (msg) => {
    const response = await dialogflow.getResponse(msg); // Get response from Dialogflow
    socket.emit('chat message', response);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
