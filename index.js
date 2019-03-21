const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
app.use(morgan('common', { immediate: true }));
app.use(express.static(__dirname + '/content'));
app.listen(80, () => {
    console.log("SERVER ONLINE ON http://localhost/");
});