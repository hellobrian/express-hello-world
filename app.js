var express = require('express');
var http = require('http');
var path = require('path');
var cons = require('consolidate');
var dustjs = require('dustjs-linkedin');

var app = express();

app.set('appName', 'hello-world');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('dust', cons.dust);
app.set('view engine', 'dust');

app.all('/', function(req, res) {
  res.render('index', {msg: 'Welcome to Practical Node.js'});
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});

console.log(app.get('appName'));