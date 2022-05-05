var express = require('express');
// var path = require('path');
var app = express();

// app.use('/', express.static('./build'));
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static('./build'));

app.listen(8080);