/**
 * Created by totor on 2017-11-17.
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
// var world = require('./js/server_world');

app.use('/js', express.static(__dirname + '/js'));
app.use('/data', express.static(__dirname + '/data'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/style', express.static(__dirname + '/style'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


http.listen(5555, function(){
    console.log("Server Running and Listen to port 5555");
});
