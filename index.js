const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const exphbs = require('express-handlebars');
const app = express();
const connectionsa = require('easy-array_sytem');
connectionsa.generate({conn: 0});
var connections = 0;
const jsonraw = [
  { name: 'github', url: 'https://github.com/Sharkbyteprojects/usercounter' },
  {name: 'docker', url: 'https://hub.docker.com/r/shark2byte/usercounter'},
  {name: 'npm', url: 'https://www.npmjs.com/package/user-counter'},
  {name: 'postman api', url: 'https://documenter.getpostman.com/view/6963541/S17qUALk'}
];
app.use(helmet.xssFilter());
app.engine('handlebars', exphbs());
app.get('/count', (request, response) => {
    connections++;
	connectionsa.changee("0", "conn", eval(`"${connections}"`));
    response.redirect('/');
    });
app.get('/repos', (request, response) => {
    response.send(jsonraw);
});
app.get('/raw', (request, response) => {
    var stringbuild = "" + connections + "";
    response.send(stringbuild);
});
app.get('/rawjson', (request, response) => {
    response.send(connectionsa.readall());
});
app.get('/rawjson/count', (request, response) => {
	connections++;
	connectionsa.changee("0", "conn", eval(`"${connections}"`));
    response.redirect('/rawjson');
});
app.get('/raw/count', (request, response) => {
    connections++;
	connectionsa.changee("0", "conn", eval(`"${connections}"`));
    response.redirect('/raw');});
app.set('view engine', 'handlebars');
app.use(morgan('common', { immediate: true }));
app.get('/', (request, response) => {
const connectionslistener = connections;
response.render(__dirname + '/transfer.handlebars', {connections: connectionslistener});
});
app.use(express.static(__dirname + '/content'));
app.get((request, response) => {
    response.send(stringbuild);
});
app.listen(80, () => {
    console.log("SERVER ONLINE ON http://localhost/");
});
