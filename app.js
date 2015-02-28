var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('appName', 'hello-world');
console.log(app.get('appName'));