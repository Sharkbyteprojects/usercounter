const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const exphbs = require('express-handlebars');
const app = express();
var connections = 0;
app.use(helmet.xssFilter());
app.engine('handlebars', exphbs());
app.get('/count', (request, response) => {
    connections++;
    response.redirect('/');
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
