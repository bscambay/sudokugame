var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path =require("path");
app.use(express.static('./public'));
//require('./public/css/board.css')
//require('./board.js')
//require('./logic.js')
app.use(express.static('board.js'));
//app.use(express.static('logic.js'));
app.get('index.html', function (req, res) {
    //console.dir(req);
   // console.dir(res);
   res.sendFile(__dirname + "/web/" + "index.html");
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});