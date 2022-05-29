var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
const cors = require("cors");
const cookieParser = require("cookie-parser")
// const session = require('express-session')

var connection = require('./mySql/db_Connection');
var routes = require('./controller/router');

var app = express();

app.use('/', express.static(path.join(__dirname, '/')));

app.use(cors({
  origin:"http://localhost:3000",
  methods:["GET","POST","DELETE","PUT"],
  credentials: true,
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

connection.init();
routes.configure(app);

var server = app.listen(8000, function(){
  console.log('Server listening on port ' + server.address().port);
});