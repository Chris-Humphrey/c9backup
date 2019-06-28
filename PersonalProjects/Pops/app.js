var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/birthday', function(req,res){
    res.render('birthday');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Online");
});