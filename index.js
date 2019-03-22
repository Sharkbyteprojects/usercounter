const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const exphbs = require('express-handlebars');
const app = express();
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
    response.redirect('/');
    });
app.get('/repos', (request, response) => {
    response.send(jsonraw);
    });
app.set('view engine', 'handlebars');
app.use(morgan('common', { immediate: true }));
app.get('/', (request, response) => {
const connectionslistener = connections;
response.render(__dirname + '/transfer.handlebars', {connections: connectionslistener});
});
app.use(express.static(__dirname + '/content'));
app.listen(80, () => {
    console.log("SERVER ONLINE ON http://localhost/");
});
