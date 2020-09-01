const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const App = express();
const server = http.createServer(App);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new Connection');

    socket.on('disconnect', () => {
        console.log('User had left!!!');
    } )

});

App.use(router);

server.listen(PORT, console.log(`Server has started on port ${PORT}`));