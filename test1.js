var express = require('express')

var app = express();

app.get('/', function(req, res){
  res.send('hello changevdd');
});

app.listen(process.env.port || 5000);
