var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get("/", function(req,res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req,res){
    res.send("Goodbye!");
});

// "/dog" => "I'm a dog!"
app.get("/dog", function(req,res){
    console.log("Someone made a request to /dog!");
    res.send("I'm a dog!");
});

app.get("/r/:subredditName", function(req,res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " Subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
    console.log(req.params);
    res.send("Welcome to the comments page!");
});

// All other pages
app.get("*", function(req,res){
    res.send("This is any other page!");
});


// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});