var server = require('express')(),
	app = require('http').Server(server),
	io = require('socket.io')(app);

server.get('/', function (req, res) {
	res.send('Hey! This is Express with Socket.io :)')
})

server.listen(3000, function () {
	console.log('Server running --> http://localhost:3000')
})