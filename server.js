var server = require('express')(),
	app = require('http').Server(server),
	io = require('socket.io')(app),
	swig = require('swig');

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views', './views');

server.get('/', function (req, res) {
	res.render('index')
})

server.listen(28386, function () {
	console.log('Server running --> http://localhost:28386')
})