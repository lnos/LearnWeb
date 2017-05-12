'use strict';
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("<h1>Proceed to /app/whoami</h1>");
});

app.get('/app/whoami', function(req, res){

  var softwareStr = req.headers["user-agent"];;
  var software = softwareStr.slice(softwareStr.indexOf('(') + 1,softwareStr.indexOf(')'));

  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"].split(",")[0],
    software: software
  });
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});
