var express = require('express');
var morgan = require('morgan');
var helmet = require('helmet');
var exphbs = require('express-handlebars');
var app = express();
var connections = 0;
var jsonraw = [
    { name: 'github', url: 'https://github.com/Sharkbyteprojects/usercounter' },
    { name: 'docker', url: 'https://hub.docker.com/r/shark2byte/usercounter' },
    { name: 'npm', url: 'https://www.npmjs.com/package/user-counter' },
    { name: 'postman api', url: 'https://documenter.getpostman.com/view/6963541/S17qUALk' }
];
app.use(helmet.xssFilter());
app.engine('handlebars', exphbs());
app.get('/count', function (request, response) {
    connections++;
    response.redirect('/');
});
app.get('/repos', function (request, response) {
    response.send(jsonraw);
});
app.get('/raw', function (request, response) {
    var stringbuild = "" + connections + "";
    response.send(stringbuild);
});
app.get('/raw/count', function (request, response) {
    connections++;
    response.redirect('/raw');
});
app.set('view engine', 'handlebars');
app.use(morgan('common', { immediate: true }));
app.get('/', function (request, response) {
    var connectionslistener = connections;
    response.render(__dirname + '/transfer.handlebars', { connections: connectionslistener });
});
app.use(express.static(__dirname + '/content'));
app.get(function (request, response) {
    response.send(stringbuild);
});
app.listen(80, function () {
    console.log("SERVER ONLINE ON http://localhost/");
});
