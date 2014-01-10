var express = require("express");
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));
app.disable('x-powered-by');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen( process.env.PORT || 5000 );