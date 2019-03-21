const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
let connectionslst = [
    {connections: 0}
];
var connections = 0;
app.engine('handlebars', exphbs());
app.get('/count', (request, response) => {
    connectionslst[1].connections + 1;
    connections++;
    });
app.get('/raw', (request, response) => {
        response.send(connectionslst);
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