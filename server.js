var express = require('express'),
	server = express(),
	io = require('socket.io')(server);

server.get('/', function (req, res) {
	res.send('Hey! This is Express with Socket.io :)')
})

server.listen(3000, function () {
	console.log('Server running --> http://localhost:3000')
})