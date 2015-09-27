var express = require('express')

var app = express();

app.get('/', function(req, res){
  res.send('hi theres');
});

app.listen(process.env.port || 5000);
